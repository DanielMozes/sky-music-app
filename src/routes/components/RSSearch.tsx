import RandomBackgroundDots from "./RandomBackgroundDots";

import SearchResult from './SearchResult';

function RightSection() {
    return (
  <div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
      <div class="album py-3">
    <div class="container">

    <RandomBackgroundDots />

    <SearchResult />
      
    </div>
  </div>
      </div>
    );
}

export default RightSection;