import { createSignal, createEffect } from "solid-js";

const BasicAuth = () => {
  const [authenticated, setAuthenticated] = createSignal(false);

  const authenticate = (password) => {
    if (password == import.meta.env.VITE_ADMIN_PASSWORD) {
       setAuthenticated(true);
     }
  };

  const promptForCredentials = () => {
    const password = prompt("Password:");
    authenticate(password);
  };

  createEffect(() => {
    if (!authenticated()) {
      promptForCredentials();
    }
  });

  return authenticated;
};

export default BasicAuth;