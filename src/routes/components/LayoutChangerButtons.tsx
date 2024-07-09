import { BsMusicPlayerFill } from "solid-icons/bs";
import { BsFileEarmarkMusicFill } from "solid-icons/bs";
import { BsSearch } from "solid-icons/bs";

import { useNavigate } from "solid-start";

function LayoutChangerButtons() {
	const navigate = useNavigate();

	const handleSearch = () => {
		navigate("/search");
	};

	function changeLayout(change: string) {
		let display = document.getElementById(`${change}Section`);
		display.classList.remove("d-none");
		display.classList.remove("d-sm-block");

		let layoutButton = document.getElementById(`layoutButtonLeft`);
		layoutButton.classList.remove("d-none");
		layoutButton.classList.remove("d-sm-block");

		layoutButton = document.getElementById(`layoutButtonRight`);
		layoutButton.classList.remove("d-none");
		layoutButton.classList.remove("d-sm-block");

		if (change === "right") {
			let displayNone = document.getElementById(`leftSection`);
			displayNone.classList.add("d-none");
			displayNone.classList.add("d-sm-block");

			layoutButton = document.getElementById(`layoutButtonLeft`);
			layoutButton.classList.add("d-none");
			layoutButton.classList.add("d-sm-block");
		}
		if (change === "left") {
			let displayNone = document.getElementById(`rightSection`);
			displayNone.classList.add("d-none");
			displayNone.classList.add("d-sm-block");

			layoutButton = document.getElementById(`layoutButtonRight`);
			layoutButton.classList.add("d-none");
			layoutButton.classList.add("d-sm-block");
		}
	}

	return (
		<>
			<div id="layoutButton" class="d-block d-sm-none m-2">
				<a
					id="layoutButtonLeft"
					class="d-none d-sm-block"
					onclick={() => changeLayout("right")}
				>
					<BsFileEarmarkMusicFill />
				</a>
				<a id="layoutButtonRight" onclick={() => changeLayout("left")}>
					<BsMusicPlayerFill />
				</a>
			</div>
			<div id="layoutButton" class="d-block d-sm-none m-2">
				<a id="layoutButtonSearch" onClick={handleSearch}>
					<BsSearch />
				</a>
			</div>
		</>
	);
}

export default LayoutChangerButtons;
