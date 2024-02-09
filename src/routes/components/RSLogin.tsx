import RandomBackgroundDots from "./RandomBackgroundDots";

function RightSection() {
    return (
<div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important;">
  <div class="px-4 py-5 my-5 text-center">
    <RandomBackgroundDots />
    <h1 class="display-5 fw-bold text-white">Login</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-white">Enter your seed phrase</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <form>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Seed" aria-label="Seed" aria-describedby="seed" />
        </div>
          <button type="button" class="btn btn-primary px-4 gap-3">Login</button>
          <br />
          <a href="/register/"><small class="text-white">Register</small></a>
        </form>
      </div>
    </div>
  </div>
</div>
    );
}

export default RightSection;