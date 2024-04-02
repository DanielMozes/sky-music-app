import RandomBackgroundDots from "./RandomBackgroundDots";
import { Link } from '@solidjs/router';

function RightSection() {
    return (
<div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
  <div class="px-4 py-5 my-5 text-center">
    <RandomBackgroundDots />
    <h1 class="display-5 fw-bold text-white">Donate</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-white">One time donation</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link href={import.meta.env.VITE_STRIPE_URL_EUR} type="button" class="btn btn-primary px-4 gap-3" target="_blank">EUR</Link>
        <Link href={import.meta.env.VITE_STRIPE_URL_USD} type="button" class="btn btn-primary px-4 gap-3" target="_blank">USD</Link>
      </div>
      <p class="lead m-4 text-white">Monthly donation</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link href={import.meta.env.VITE_STRIPE_URL_EUR_MONTHLY} type="button" class="btn btn-primary px-4 gap-3" target="_blank">EUR</Link>
        <Link href={import.meta.env.VITE_STRIPE_URL_USD_MONTHLY} type="button" class="btn btn-primary px-4 gap-3" target="_blank">USD</Link>
      </div>
    </div>
  </div>
</div>
    );
}

export default RightSection;