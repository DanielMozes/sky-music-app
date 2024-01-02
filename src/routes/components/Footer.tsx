import { BiSolidDonateHeart } from 'solid-icons/bi';

function Footer() {
  function changeBackground() {
    let backgroundSelector = document.getElementsByClassName("container-fluid")[1];
    if (backgroundSelector.style.background === 'url("/background.jpg") 0% 0% / cover') {
      backgroundSelector.style.background = 'url("/background-dark.jpg") 0% 0% / cover';
    } else {
      backgroundSelector.style.background = 'url("/background.jpg") 0% 0% / cover';
    }

}
    return (
<footer class="p-2 bg-dark" style="border-top: 2px solid #000!important;">
    <div class="container-fluid d-grid gap-2 align-items-center" style="grid-template-columns: 2fr 2fr 2fr;">
      <a href="/" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 text-decoration-none navbar-brand" style="color: #fff;" aria-expanded="false"><img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
        <span style="padding-left: 5px;">SkyMusic</span>
      </a>

      <div class="d-flex align-items-center">
        <div class="flex-shrink-0 dropdown w-100 me-3">
          <a href="/donate/" class="btn btn-primary me-2 btn-sm w-100" role="button"><BiSolidDonateHeart /> Donate</a>
        </div>
      </div>

      <div class="d-flex align-items-center flex-row-reverse">
        <div class="flex-shrink-0 dropdown">
          <button type="button" class="btn btn-outline-primary me-2 btn-sm"  onclick={() => changeBackground()}>Change background</button>
        </div>
      </div>
    </div>
  </footer>
    );
}

export default Footer;