import RandomBackgroundDots from "./RandomBackgroundDots";

import { IoSettingsSharp } from 'solid-icons/io'
import { IoListSharp } from 'solid-icons/io'
import { TiDelete } from 'solid-icons/ti'

import { Link } from '@solidjs/router';

function RightSection() {
    return (
<div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
  <div class="px-4 py-5 my-5 text-center">
    <RandomBackgroundDots />
    <h1 class="display-5 fw-bold text-white">Profile</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-white">Profile</p>
      <div class="list-group">
        <Link href="/settings/" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
          <IoSettingsSharp />
          <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 class="mb-0">Settings</h6>
            </div>
          </div>
        </Link>
        <Link href="/my-list/" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
          <IoListSharp />
          <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 class="mb-0">My list</h6>
            </div>
          </div>
        </Link>
        <Link href="#" class="list-group-item list-group-item-action list-group-item-danger d-flex gap-3 py-3" aria-current="true">
          <TiDelete />
          <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 class="mb-0">Delete profile</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>
    );
}

export default RightSection;