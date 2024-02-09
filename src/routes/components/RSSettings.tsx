import RandomBackgroundDots from "./RandomBackgroundDots";

function RightSection() {
    return (
<div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important;">
  <div class="px-4 py-5 my-5 text-center">
    <RandomBackgroundDots />
    <h1 class="display-5 fw-bold text-white">Settings</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-white">Quality</p>
      <div class="list-group list-group-radio d-grid gap-2 border-0">
        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridQuality" id="listGroupRadioGrid320" value="" checked />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid320">
            <strong class="fw-semibold">Extra high (320 kbps)</strong>
            <span class="d-block small opacity-75">The highest possible quality is with us; it is worth using only if the High setting is not to your liking</span>
          </label>
        </div>

        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridQuality" id="listGroupRadioGrid160" value="" />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid160">
            <strong class="fw-semibold">High (160 kbps) - Recommended</strong>
            <span class="d-block small opacity-75">Transparent sound, this is the recommended setting for most users</span>
          </label>
        </div>

        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridQuality" id="listGroupRadioGrid80" value="" />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid80">
            <strong class="fw-semibold">Normal (80 kbps)</strong>
            <span class="d-block small opacity-75">Balanced quality with less data usage</span>
          </label>
        </div>

        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridQuality" id="listGroupRadioGrid40" value="" />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid40">
            <strong class="fw-semibold">Low (40 kbps)</strong>
            <span class="d-block small opacity-75">Low quality with the minimum possible data usage</span>
          </label>
        </div>
      </div>
      <p class="lead my-4 text-white">Music repeating</p>
      <div class="list-group list-group-radio d-grid gap-2 border-0">
        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridMusicRepeating" id="listGroupRadioGridOff" value="" checked />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGridOff">
            <strong class="fw-semibold">Off</strong>
            <span class="d-block small opacity-75">Don't repeat the currently playing music</span>
          </label>
        </div>

        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridMusicRepeating" id="listGroupRadioGridRepeat" value="" />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGridRepeat">
            <strong class="fw-semibold">Repeat</strong>
            <span class="d-block small opacity-75">Repeat the currently playing music</span>
          </label>
        </div>

        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridMusicRepeating" id="listGroupRadioGridRepeatOnce" value="" />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGridRepeatOnce">
            <strong class="fw-semibold">Repeat once</strong>
            <span class="d-block small opacity-75">Repeat the currently playing music once</span>
          </label>
        </div>
      </div>
      <p class="lead my-4 text-white">Theme</p>
      <div class="list-group list-group-radio d-grid gap-2 border-0">
        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridTheme" id="listGroupRadioGridAutomatic" value="" checked />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGridAutomatic">
            <strong class="fw-semibold">Automatic (system)</strong>
            <span class="d-block small opacity-75">Using automatic theme based system settings</span>
          </label>
        </div>

        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridTheme" id="listGroupRadioGridLight" value="" />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGridLight">
            <strong class="fw-semibold">Light</strong>
            <span class="d-block small opacity-75">Using light theme</span>
          </label>
        </div>

        <div class="position-relative">
          <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGridTheme" id="listGroupRadioGridRepeatDark" value="" />
          <label class="list-group-item py-3 pe-5" for="listGroupRadioGridRepeatDark">
            <strong class="fw-semibold">Dark</strong>
            <span class="d-block small opacity-75">Using dark theme</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default RightSection;