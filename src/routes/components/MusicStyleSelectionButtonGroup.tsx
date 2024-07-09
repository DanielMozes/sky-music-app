function MusicStyleSelectionButtonGroup() {
	function changeMusicStyle(value: string, place: number) {
		if (document.body.className === `style-${value}`) {
			value = "default";
		}
		document.body.className = "";

		if (value != "default") {
			document.body.classList.add(`style-${value}`);
		}

		let styleSelection = document.getElementById("styleSelection");
		let styleButton = styleSelection.getElementsByTagName("button");

		for (let i = 0; i < styleButton.length; i++) {
			styleButton[i].classList.remove("opacity-50");
			if (i != place && value != "default") {
				styleButton[i].classList.add("opacity-50");
			}
		}
	}

	return (
		<div
			id="styleSelection"
			class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3"
		>
			<div style="max-width:2.2vw; padding:0" class="d-none d-sm-block"></div>
			<div class="col-4 col-sm" style="z-index:1;">
				<button
					class="btn btn-outline-primary align-items-center w-100"
					type="button"
					style="
background: url('/pop.jpg') no-repeat; border-color: #f5a3c3;"
					onclick={() => changeMusicStyle("pop", 0)}
				>
					POP
				</button>
			</div>
			<div class="col-4 col-sm" style="margin-left:-0.45vw; z-index:1;">
				<button
					class="btn btn-outline-primary align-items-center w-100"
					type="button"
					style="
background: url('/rock.jpg') no-repeat; border-color: #9d3b3a;"
					onclick={() => changeMusicStyle("rock", 1)}
				>
					ROCK
				</button>
			</div>
			<div class="col-4 col-sm" style="margin-left:-0.45vw; z-index:1;">
				<button
					class="btn btn-outline-primary align-items-center w-100"
					type="button"
					style="
background: url('/dance.jpg') no-repeat; border-color: #259ac2;"
					onclick={() => changeMusicStyle("dance", 2)}
				>
					DANCE
				</button>
			</div>
			<div class="col-4 col-sm" style="margin-left:-0.45vw; z-index:1;">
				<button
					class="btn btn-outline-primary align-items-center w-100"
					type="button"
					style="
background: url('/rap.jpg') no-repeat; border-color: #d5692d;"
					onclick={() => changeMusicStyle("rap", 3)}
				>
					RAP
				</button>
			</div>
			<div class="col-4 col-sm" style="margin-left:-0.45vw; z-index:1;">
				<button
					class="btn btn-outline-primary align-items-center w-100"
					type="button"
					style="
background: url('/jazz.jpg') no-repeat; border-color: #d8a077;"
					onclick={() => changeMusicStyle("jazz", 4)}
				>
					JAZZ
				</button>
			</div>
			<div class="col-4 col-sm" style="margin-left:-0.45vw; z-index:1;">
				<button
					class="btn btn-outline-primary align-items-center w-100"
					type="button"
					style="
background: url('/classic.jpg') no-repeat; border-color: #c9bbac;"
					onclick={() => changeMusicStyle("classic", 5)}
				>
					CLASSIC
				</button>
			</div>
		</div>
	);
}

export default MusicStyleSelectionButtonGroup;
