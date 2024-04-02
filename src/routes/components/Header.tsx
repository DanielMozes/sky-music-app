import LayoutChangerButtons from "./LayoutChangerButtons";
import { Link } from '@solidjs/router';

import SearchInput from './SearchInput';

import { createEffect, createSignal } from 'solid-js';
import { useAuth } from './AuthContext';

import { useNavigate } from 'solid-start';

function Header() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  const [isLoading, setIsLoading] = createSignal(true);

  createEffect(() => {
    setIsLoading(false); 
  });
    return (
<header class="p-2 bg-dark fixed-top" style="border-bottom: 2px solid #000!important;">
    <div class="container-fluid d-grid gap-2 align-items-center" style="grid-template-columns: 2fr 2fr 2fr;">
      <Link href="/" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 text-decoration-none navbar-brand" style="color: #fff;" aria-expanded="false"><img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
        <span style="padding-left: 5px;">SkyMusic</span>
      </Link>

      <div id="search" class="d-flex align-items-center">
        <form class="w-100 me-3" role="search">
          <SearchInput />
        </form>
      </div>

      <div class="d-flex align-items-center flex-row-reverse">
        <div class="flex-shrink-0 dropdown">
        {isLoading() ? (
        <div>Loading...</div>
      ) : auth.isLoggedIn() ? (
        <>
          <Link href="/profile/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/logo.png" alt="" width="30" height="30" class="rounded-circle me-2" />
            <strong>User</strong>
          </Link>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><Link class="dropdown-item" href="/settings/">Settings</Link></li>
            <li><Link class="dropdown-item" href="/profile/">Profile</Link></li>
            <li><Link class="dropdown-item" href="/my-list/">My list</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a onClick={handleLogout} class="dropdown-item">Logout</a></li>
          </ul>
        </>
      ) : (
        <>
          <Link href="/login/" class="btn btn-outline-primary me-2" role="button">Login</Link>
          <Link href="/register/" class="btn btn-primary" role="button">Register</Link>
        </>
      )}
        </div>
        <LayoutChangerButtons />
      </div>
    </div>
</header>
    );
}

export default Header;