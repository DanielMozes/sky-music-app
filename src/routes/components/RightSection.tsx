import MusicStyleSelectionButtonGroup from "./MusicStyleSelectionButtonGroup";
import RandomBackgroundDots from "./RandomBackgroundDots";
import Preload from "./preload";

import {
	Match,
	Switch,
	createSignal,
	createEffect,
	onMount,
	onCleanup,
} from "solid-js";
import { getDatabase, ref } from "firebase/database";
import { useDatabase, useFirebaseApp } from "solid-firebase";

function generateColorFromId(id) {
	let hash = 0;
	const salt = 123456789;
	const stringRepresentation = (id * salt).toString();
	for (let i = 0; i < stringRepresentation.length; i++) {
		const char = stringRepresentation.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}

	const positiveHash = Math.abs(hash);

	const hue = positiveHash % 360;
	const saturation = 60;
	const lightness = 60;

	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function RightSection({ savedMusicIds, likedMusicIds }) {
	const app = useFirebaseApp();
	const db = getDatabase(app);
	const musics = useDatabase(ref(db, "musics"));
	const playlists = useDatabase(ref(db, "playlists"));

	const changeIndex = (newIndex) => {
		localStorage.setItem("index", newIndex);
		window.dispatchEvent(new Event("storage"));
	};

	let result: number[] = [];
	const randomize = (count, max) => {
		const availableNumbers = Array.from({ length: max }, (_, index) => index);

		for (let i = availableNumbers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[availableNumbers[i], availableNumbers[j]] = [
				availableNumbers[j],
				availableNumbers[i],
			];
		}

		result.push(...availableNumbers.slice(0, count));
		return true;
	};

	const [color1, setColor1] = createSignal("transparent");
	const [color2, setColor2] = createSignal("transparent");
	const [color3, setColor3] = createSignal("transparent");
	const [color4, setColor4] = createSignal("transparent");
	const [color5, setColor5] = createSignal("transparent");
	const [color6, setColor6] = createSignal("transparent");

	const [color7, setColor7] = createSignal("transparent");
	const [color8, setColor8] = createSignal("transparent");
	const [color9, setColor9] = createSignal("transparent");
	const [color10, setColor10] = createSignal("transparent");
	const [color11, setColor11] = createSignal("transparent");
	const [color12, setColor12] = createSignal("transparent");

	const [color13, setColor13] = createSignal("transparent");
	const [color14, setColor14] = createSignal("transparent");
	const [color15, setColor15] = createSignal("transparent");
	const [color16, setColor16] = createSignal("transparent");
	const [color17, setColor17] = createSignal("transparent");
	const [color18, setColor18] = createSignal("transparent");

	createEffect(() => {
		if (musics.data) {
			setColor1(generateColorFromId(result[0]));
			setColor2(generateColorFromId(result[1]));
			setColor3(generateColorFromId(result[2]));
			setColor4(generateColorFromId(result[3]));
			setColor5(generateColorFromId(result[4]));
			setColor6(generateColorFromId(result[5]));

			setColor7(generateColorFromId(result[6]));
			setColor8(generateColorFromId(result[7]));
			setColor9(generateColorFromId(result[8]));
			setColor10(generateColorFromId(result[9]));
			setColor11(generateColorFromId(result[10]));
			setColor12(generateColorFromId(result[11]));

			setColor13(generateColorFromId(result[12]));
			setColor14(generateColorFromId(result[13]));
			setColor15(generateColorFromId(result[14]));
			setColor16(generateColorFromId(result[15]));
			setColor17(generateColorFromId(result[16]));
			setColor18(generateColorFromId(result[17]));
		}
	});

	onMount(() => {
		Preload("/music-pop.png");
		Preload("/music-rock.png");
		Preload("/music-dance.png");
		Preload("/music-rap.png");
		Preload("/music-jazz.png");
		Preload("/music-classic.png");
		Preload("/playlist-pop.png");
		Preload("/playlist-rock.png");
		Preload("/playlist-dance.png");
		Preload("/playlist-rap.png");
		Preload("/playlist-jazz.png");
		Preload("/playlist-classic.png");
		Preload("/liked-pop.png");
		Preload("/liked-rock.png");
		Preload("/liked-dance.png");
		Preload("/liked-rap.png");
		Preload("/liked-jazz.png");
		Preload("/liked-classic.png");
		Preload("/saved-pop.png");
		Preload("/saved-rock.png");
		Preload("/saved-dance.png");
		Preload("/saved-rap.png");
		Preload("/saved-jazz.png");
		Preload("/saved-classic.png");
	});

	return (
		<div
			id="rightSection"
			class="bg-body-tertiary border rounded-3 px-2"
			style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);"
		>
			<div class="album py-3">
				<div class="container-fluid">
					<RandomBackgroundDots />

					<MusicStyleSelectionButtonGroup />

					<Switch>
						<Match when={musics.loading}>
							<p>Loading...</p>
						</Match>
						<Match when={musics.error}>
							<p>An error occurred.</p>
						</Match>
						<Match
							when={
								musics.data && randomize(18, Object.keys(musics.data).length)
							}
						>
							<div
								id="musicCarousel"
								class="carousel slide mb-6"
								data-bs-ride="carousel"
							>
								<div class="carousel-indicators" style="margin-bottom: -0.2%;">
									<button
										type="button"
										data-bs-target="#musicCarousel"
										data-bs-slide-to="0"
										aria-label="Slide 1"
										class="active"
										aria-current="true"
									></button>
									<button
										type="button"
										data-bs-target="#musicCarousel"
										data-bs-slide-to="1"
										aria-label="Slide 2"
										class=""
									></button>
									<button
										type="button"
										data-bs-target="#musicCarousel"
										data-bs-slide-to="2"
										aria-label="Slide 3"
										class=""
									></button>
								</div>
								<div class="carousel-inner">
									<div class="carousel-item active">
										<div
											id="music"
											class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3"
										>
											<img
												src="/music.png"
												class="d-none d-sm-block"
												style="max-width:1.8vw; max-height:19.4vh; padding:0; margin-left: 0.4vw;"
											/>
											<h2 class="text-white d-block d-sm-none">Music</h2>
											<div class="col-6 col-sm">
												<a onClick={() => changeIndex(result[0])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color1()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[0]].title}</h6>
															<p class="card-text">
																{musics.data[result[0]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[1])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color2()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[1]].title}</h6>
															<p class="card-text">
																{musics.data[result[1]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[2])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color3()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[2]].title}</h6>
															<p class="card-text">
																{musics.data[result[2]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[3])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background:linear-gradient(${color4()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[3]].title}</h6>
															<p class="card-text">
																{musics.data[result[3]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[4])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color5()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[4]].title}</h6>
															<p class="card-text">
																{musics.data[result[4]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[5])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color6()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[5]].title}</h6>
															<p class="card-text">
																{musics.data[result[5]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
									<div class="carousel-item">
										<div
											id="music"
											class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3"
										>
											<img
												src="/music.png"
												class="d-none d-sm-block"
												style="max-width:1.8vw; max-height:19.4vh; padding:0; margin-left: 0.4vw;"
											/>
											<h2 class="text-white d-block d-sm-none">Music</h2>
											<div class="col-6 col-sm">
												<a onClick={() => changeIndex(result[6])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color7()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[6]].title}</h6>
															<p class="card-text">
																{musics.data[result[6]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[7])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color8()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[7]].title}</h6>
															<p class="card-text">
																{musics.data[result[7]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[8])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color9()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[8]].title}</h6>
															<p class="card-text">
																{musics.data[result[8]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[9])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background:linear-gradient(${color10()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[9]].title}</h6>
															<p class="card-text">
																{musics.data[result[9]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[10])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color11()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[10]].title}</h6>
															<p class="card-text">
																{musics.data[result[10]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[11])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color12()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[11]].title}</h6>
															<p class="card-text">
																{musics.data[result[11]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
									<div class="carousel-item">
										<div
											id="music"
											class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3"
										>
											<img
												src="/music.png"
												class="d-none d-sm-block"
												style="max-width:1.8vw; max-height:19.4vh; padding:0; margin-left: 0.4vw;"
											/>
											<h2 class="text-white d-block d-sm-none">Music</h2>
											<div class="col-6 col-sm">
												<a onClick={() => changeIndex(result[12])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color13()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[12]].title}</h6>
															<p class="card-text">
																{musics.data[result[12]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[13])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color14()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[13]].title}</h6>
															<p class="card-text">
																{musics.data[result[13]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[14])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color15()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[14]].title}</h6>
															<p class="card-text">
																{musics.data[result[14]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[15])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background:linear-gradient(${color16()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[15]].title}</h6>
															<p class="card-text">
																{musics.data[result[15]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[16])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color17()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[16]].title}</h6>
															<p class="card-text">
																{musics.data[result[16]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
											<div class="col-6 col-sm" style="margin-left: -0.45vw;">
												<a onClick={() => changeIndex(result[17])}>
													<div class="card">
														<div
															class="image-container"
															style="position: relative; width: 100%; height: 22vh;"
														>
															<img
																src="/button.jpg"
																class="card-img-top"
																width="100%"
																height="100%"
																style="filter: grayscale(100%);"
															/>
															<div
																style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color18()}, #212529);`}
															></div>
														</div>
														<div class="image-overlay">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="1em"
																height="1em"
																fill="#1ed660"
																class="bi bi-play-circle-fill"
																viewBox="0 0 16 16"
															>
																<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
															</svg>
														</div>
														<div
															class="card-body text-white p-2"
															style="height: 13vh;"
														>
															<h6>{musics.data[result[17]].title}</h6>
															<p class="card-text">
																{musics.data[result[17]].artist}
															</p>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Match>
					</Switch>

					<Switch>
						<Match when={playlists.loading}>
							<p>Loading...</p>
						</Match>
						<Match when={playlists.error}>
							<p>An error occurred.</p>
						</Match>
						<Match
							when={
								playlists.data &&
								randomize(6, Object.keys(playlists.data).length)
							}
						>
							<div
								id="playlist"
								class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3"
							>
								<img
									src="/playlist.png"
									class="d-none d-sm-block"
									style="max-width:1.8vw; max-height:31vh; padding:0; margin-left: 0.4vw;"
								/>
								<h2 class="text-white d-block d-sm-none">Playlist</h2>
								<div class="col-6 col-sm">
									<div class="card shadow-sm">
										<div
											class="image-container"
											style="position: relative; width: 100%; height: 22vh;"
										>
											<img
												src="/dark.jpg"
												class="card-img-top"
												width="100%"
												height="100%"
												style="filter: grayscale(100%);"
											/>
											<div
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color2()}, #212529);`}
											></div>
										</div>
										<div class="image-overlay">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												fill="#1ed660"
												class="bi bi-play-circle-fill"
												viewBox="0 0 16 16"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
											</svg>
										</div>
										<div class="card-body text-white p-2" style="height: 13vh;">
											<h5>Title</h5>
											<p class="card-text">Artist</p>
										</div>
									</div>
								</div>
								<div class="col-6 col-sm" style="margin-left:-0.45vw;">
									<div class="card shadow-sm">
										<div
											class="image-container"
											style="position: relative; width: 100%; height: 22vh;"
										>
											<img
												src="/dark.jpg"
												class="card-img-top"
												width="100%"
												height="100%"
												style="filter: grayscale(100%);"
											/>
											<div
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color5()}, #212529);`}
											></div>
										</div>
										<div class="image-overlay">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												fill="#1ed660"
												class="bi bi-play-circle-fill"
												viewBox="0 0 16 16"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
											</svg>
										</div>
										<div class="card-body text-white p-2" style="height: 13vh;">
											<h5>Title</h5>
											<p class="card-text">Artist</p>
										</div>
									</div>
								</div>
								<div class="col-6 col-sm" style="margin-left:-0.45vw;">
									<div class="card shadow-sm">
										<div
											class="image-container"
											style="position: relative; width: 100%; height: 22vh;"
										>
											<img
												src="/dark.jpg"
												class="card-img-top"
												width="100%"
												height="100%"
												style="filter: grayscale(100%);"
											/>
											<div
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color1()}, #212529);`}
											></div>
										</div>{" "}
										<div class="image-overlay">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												fill="#1ed660"
												class="bi bi-play-circle-fill"
												viewBox="0 0 16 16"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
											</svg>
										</div>
										<div class="card-body text-white p-2" style="height: 13vh;">
											<h5>Title</h5>
											<p class="card-text">Artist</p>
										</div>
									</div>
								</div>
								<div class="col-6 col-sm" style="margin-left:-0.45vw;">
									<div class="card shadow-sm">
										<div
											class="image-container"
											style="position: relative; width: 100%; height: 22vh;"
										>
											<img
												src="/dark.jpg"
												class="card-img-top"
												width="100%"
												height="100%"
												style="filter: grayscale(100%);"
											/>
											<div
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color6()}, #212529);`}
											></div>
										</div>{" "}
										<div class="image-overlay">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												fill="#1ed660"
												class="bi bi-play-circle-fill"
												viewBox="0 0 16 16"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
											</svg>
										</div>
										<div class="card-body text-white p-2" style="height: 13vh;">
											<h5>Title</h5>
											<p class="card-text">Artist</p>
										</div>
									</div>
								</div>
								<div class="col-6 col-sm" style="margin-left:-0.45vw;">
									<div class="card shadow-sm">
										<div
											class="image-container"
											style="position: relative; width: 100%; height: 22vh;"
										>
											<img
												src="/dark.jpg"
												class="card-img-top"
												width="100%"
												height="100%"
												style="filter: grayscale(100%);"
											/>
											<div
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color4()}, #212529);`}
											></div>
										</div>
										<div class="image-overlay">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												fill="#1ed660"
												class="bi bi-play-circle-fill"
												viewBox="0 0 16 16"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
											</svg>
										</div>
										<div class="card-body text-white p-2" style="height: 13vh;">
											<h5>Title</h5>
											<p class="card-text">Artist</p>
										</div>
									</div>
								</div>
								<div class="col-6 col-sm" style="margin-left: -0.45vw;">
									<div class="card shadow-sm">
										<div
											class="image-container"
											style="position: relative; width: 100%; height: 22vh;"
										>
											<img
												src="/dark.jpg"
												class="card-img-top"
												width="100%"
												height="100%"
												style="filter: grayscale(100%);"
											/>
											<div
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color3()}, #212529);`}
											></div>
										</div>
										<div class="image-overlay">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												fill="#1ed660"
												class="bi bi-play-circle-fill"
												viewBox="0 0 16 16"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
											</svg>
										</div>
										<div class="card-body text-white p-2" style="height: 13vh;">
											<h5>Title</h5>
											<p class="card-text">Artist</p>
										</div>
									</div>
								</div>
							</div>
						</Match>
					</Switch>

					<Switch>
						<Match when={musics.loading}>
							<p>Loading...</p>
						</Match>
						<Match when={musics.error}>
							<p>An error occurred.</p>
						</Match>
						<Match
							when={
								musics.data && randomize(6, Object.keys(musics.data).length)
							}
						>
							{savedMusicIds().length > 0 ? (
								<div
									id="musicCarousel"
									class="carousel slide mb-6"
									data-bs-ride="carousel"
								>
									<div
										class="carousel-indicators"
										style="margin-bottom: -0.2%;"
									>
										<button
											type="button"
											data-bs-target="#musicCarousel"
											data-bs-slide-to="0"
											aria-label="Slide 1"
											class="active"
											aria-current="true"
										></button>
										<button
											type="button"
											data-bs-target="#musicCarousel"
											data-bs-slide-to="1"
											aria-label="Slide 2"
											class=""
										></button>
										<button
											type="button"
											data-bs-target="#musicCarousel"
											data-bs-slide-to="2"
											aria-label="Slide 3"
											class=""
										></button>
									</div>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<div
												id="saved"
												class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3 pt-3"
											>
												<img
													src="/saved.png"
													class="d-none d-sm-block"
													style="max-width:1.8vw; max-height:19.4vh; padding:0; margin-left: 0.4vw;"
												/>
												<h2 class="text-white d-block d-sm-none">Saved</h2>
												{savedMusicIds().map((id, index) => (
													<div
														class="col-6 col-sm"
														style={index === 0 ? "" : "margin-left: -0.45vw;"}
													>
														<a onClick={() => changeIndex(id)}>
															<div class="card">
																<div
																	class="image-container"
																	style="position: relative; width: 100%; height: 22vh;"
																>
																	<img
																		src="/button.jpg"
																		class="card-img-top"
																		width="100%"
																		height="100%"
																		style="filter: grayscale(100%);"
																	/>
																	<div
																		style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color1()}, #212529);`}
																	></div>
																</div>
																<div class="image-overlay">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="1em"
																		height="1em"
																		fill="#1ed660"
																		class="bi bi-play-circle-fill"
																		viewBox="0 0 16 16"
																	>
																		<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
																	</svg>
																</div>
																<div
																	class="card-body text-white p-2"
																	style="height: 13vh;"
																>
																	<h6>{musics.data[id].title}</h6>
																	<p class="card-text">
																		{musics.data[id].artist}
																	</p>
																</div>
															</div>
														</a>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							) : null}
						</Match>
					</Switch>

					<Switch>
						<Match when={musics.loading}>
							<p>Loading...</p>
						</Match>
						<Match when={musics.error}>
							<p>An error occurred.</p>
						</Match>
						<Match
							when={
								musics.data && randomize(6, Object.keys(musics.data).length)
							}
						>
							{likedMusicIds().length > 0 ? (
								<div
									id="musicCarousel"
									class="carousel slide mb-6"
									data-bs-ride="carousel"
								>
									<div
										class="carousel-indicators"
										style="margin-bottom: -0.2%;"
									>
										<button
											type="button"
											data-bs-target="#musicCarousel"
											data-bs-slide-to="0"
											aria-label="Slide 1"
											class="active"
											aria-current="true"
										></button>
										<button
											type="button"
											data-bs-target="#musicCarousel"
											data-bs-slide-to="1"
											aria-label="Slide 2"
											class=""
										></button>
										<button
											type="button"
											data-bs-target="#musicCarousel"
											data-bs-slide-to="2"
											aria-label="Slide 3"
											class=""
										></button>
									</div>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<div
												id="liked"
												class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3 pt-3"
											>
												<img
													src="/liked.png"
													class="d-none d-sm-block"
													style="max-width:1.8vw; max-height:19.4vh; padding:0; margin-left: 0.4vw;"
												/>
												<h2 class="text-white d-block d-sm-none">Liked</h2>
												{likedMusicIds().map((id, index) => (
													<div
														class="col-6 col-sm"
														style={index === 0 ? "" : "margin-left: -0.45vw;"}
													>
														<a onClick={() => changeIndex(id)}>
															<div class="card">
																<div
																	class="image-container"
																	style="position: relative; width: 100%; height: 22vh;"
																>
																	<img
																		src="/button.jpg"
																		class="card-img-top"
																		width="100%"
																		height="100%"
																		style="filter: grayscale(100%);"
																	/>
																	<div
																		style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color1()}, #212529);`}
																	></div>
																</div>
																<div class="image-overlay">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="1em"
																		height="1em"
																		fill="#1ed660"
																		class="bi bi-play-circle-fill"
																		viewBox="0 0 16 16"
																	>
																		<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
																	</svg>
																</div>
																<div
																	class="card-body text-white p-2"
																	style="height: 13vh;"
																>
																	<h6>{musics.data[id].title}</h6>
																	<p class="card-text">
																		{musics.data[id].artist}
																	</p>
																</div>
															</div>
														</a>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							) : null}
						</Match>
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default RightSection;
