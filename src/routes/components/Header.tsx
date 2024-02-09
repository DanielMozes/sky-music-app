import LayoutChangerButtons from "./LayoutChangerButtons";

function Header() {
    return (
<header class="p-2 bg-dark fixed-top" style="border-bottom: 2px solid #000!important;">
    <div class="container-fluid d-grid gap-2 align-items-center" style="grid-template-columns: 2fr 2fr 2fr;">
      <a href="/" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 text-decoration-none navbar-brand" style="color: #fff;" aria-expanded="false"><img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
        <span style="padding-left: 5px;">SkyMusic</span>
      </a>

      <div id="search" class="d-flex align-items-center">
        <form class="w-100 me-3" role="search">
          <input type="search" class="form-control btn btn-outline-primary" placeholder="Search" aria-label="Search" />
        </form>
      </div>

      <div class="d-flex align-items-center flex-row-reverse">
        <div class="flex-shrink-0 dropdown">
          <a href="/login/" class="btn btn-outline-primary me-2" role="button">Login</a>
          <a href="/register/" class="btn btn-primary" role="button">Register</a>
        </div>
        <LayoutChangerButtons />
      </div>
    </div>
</header>
    );
}

export default Header;