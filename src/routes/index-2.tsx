import "./index-2.css";
import MusicStyleSelectionButtonGroup from './components/MusicStyleSelectionButtonGroup';
import RandomBackgroundDots from "./components/RandomBackgroundDots";

import { BiSolidDonateHeart } from 'solid-icons/bi';
import { IoMusicalNotes } from 'solid-icons/io';

export default function Home() {
  return (
    <>
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style="z-index: 10000; border-bottom: 2px solid #1ed660; padding: 10px 0 10px 10px;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" /> SkyMusic</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0"><li></li></ul>
        <div class="text-end">
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
            <button type="button" class="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </nav>
</header>

    <main class="d-flex flex-nowrap">
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark fixed-top" style="width: 280px; height: 100%; top: 60px;">
          <div id="musicPlayer" class="card my-3">
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
          <div class="text-white mt-5">
              <h5>Hello from SkyMusic. <IoMusicalNotes /></h5>
              <p>This is a text, why you donate our project.</p>
            </div>
          <div class="dropdown d-none">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
              <strong>Test user</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
          <button class="btn btn-primary d-inline-flex align-items-center w-100 mt-4" type="button">
            <BiSolidDonateHeart /> Donate</button>
        </div>
        <div class="album py-5" style="padding-left: 280px; padding-top: 6rem !important; background-color: #33363A">
    <div class="container">

  <RandomBackgroundDots />

  <MusicStyleSelectionButtonGroup />

      <div id="music" class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-4">
      <img src="/music.png" style="max-width:30px; max-height:150px; padding:0" />
        <div class="col">
          <div class="card">
            <img src="/music-1.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card">
            <img src="/music-2.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card">
            <img src="/music-3.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card">
            <img src="/music-4.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card">
            <img src="/music-5.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card">
            <img src="/music-6.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="playlist" class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-4">
      <img src="/playlist.png" style="max-width:30px; max-height:240px; padding:0" />
        <div class="col">
          <div class="card shadow-sm">
            <img src="/playlist-1.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-2.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-3.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-4.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-5.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
        <div class="col" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-6.jpg" class="card-img-top" width="100%" height="150" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white">
              <h5>Test</h5>
              <p class="card-text">This is a text.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script></>
  );
}