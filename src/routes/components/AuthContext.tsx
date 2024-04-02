import { createContext, useContext, createSignal, createMemo } from 'solid-js';

interface AuthContextType {
    token: () => string | null;
    isLoggedIn: () => boolean;
    login: (seed: string) => Promise<void>;
    logout: () => void;
    register: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>();

export function AuthProvider(props: any) {
  const storedToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

  const [token, setToken] = createSignal<string | null>(storedToken);

  const isLoggedIn = createMemo(() => !!token());

  function generateRandomSeed(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  const login = async (seed: string) => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/login', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + import.meta.env.VITE_S5_AUTH_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seed })
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authToken', data.data.auth_token);
      setToken(data.data.auth_token);
    }
  };

  const register = async () => {
    const seed = generateRandomSeed(16);

    const response = await fetch(import.meta.env.VITE_API_URL + '/register', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + import.meta.env.VITE_S5_AUTH_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seed })
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authToken',  data.data.auth_token);
      setToken(data.data.auth_token);
      alert('Registration successful! The generated seed: ' + seed);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
  };

  const store: AuthContextType = {
    token,
    isLoggedIn,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={store}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}