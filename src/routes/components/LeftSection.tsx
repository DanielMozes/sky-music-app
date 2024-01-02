function LeftSection() {
    return (
<div id="leftSection" class="bg-body-tertiary border rounded-3 py-2 px-3" style="background-color: #212529 !important;">
  <div id="musicPlayer" class="card my-2">
    <img src="/music-player.png" class="card-img-top" width="100%" height="100%" style="padding: 15px;" />
    <div class="image-overlay">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
      </svg>
    </div>
    <div class="card-body text-white">
      <h6>Test - This is a text</h6>
    </div>
  </div>
  <div class="dropdown d-none">
    <a href="/profile/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://avatars.githubusercontent.com/u/147786207?s=400&v=4" alt="" width="32" height="32" class="rounded-circle me-2" />
      <strong>Test user</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
      <li><a class="dropdown-item" href="/settings/">Settings</a></li>
      <li><a class="dropdown-item" href="/profile/">Profile</a></li>
      <li><a class="dropdown-item" href="/my-list/">My list</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="/">Logout</a></li>
    </ul>
  </div>
</div>
    );
}

export default LeftSection;