function LayoutChangerButtons() {
    function changeLayout(change: string) {
        let display = document.getElementById(`${change}Section`);
        display.classList.remove("d-none");
        display.classList.remove("d-sm-block");

        if(change === "right") {
            let displayNone = document.getElementById(`leftSection`);
            displayNone.classList.add("d-none");
            displayNone.classList.add("d-sm-block");
        }
        if(change === "left") {
            let displayNone = document.getElementById(`rightSection`);
            displayNone.classList.add("d-none");
            displayNone.classList.add("d-sm-block");
        }
    }

    return (
<div id="layoutButton" class="d-block d-sm-none">
  <button id="layoutButtonLeft" onclick={() => changeLayout("right")}></button>
  <button id="layoutButtonRight" onclick={() => changeLayout("left")}></button>
</div>
    );
}

export default LayoutChangerButtons;