import { useNavigate } from "solid-start";
import { searchStore, setSearchStore } from "./store";
import { For, Show } from "solid-js";

import { getDatabase, ref } from "firebase/database";
import { useDatabase, useFirebaseApp } from "solid-firebase";

import SearchInput from "./SearchInput";

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

function SearchResult() {
	const app = useFirebaseApp();
	const db = getDatabase(app);
	const musics = useDatabase(ref(db, "musics"));
	const playlists = useDatabase(ref(db, "playlists"));

	const navigate = useNavigate();

	const changeIndex = (newIndex) => {
		localStorage.setItem("index", newIndex);
		window.dispatchEvent(new Event("storage"));
	};

	const handleBack = () => {
		navigate(-1);
		setSearchStore("query", "");
	};

	return (
		<>
			<div
				id="searchmobile"
				class="d-flex align-items-center d-block d-sm-none"
			>
				<form class="w-100 me-3" role="search">
					<SearchInput />
				</form>
			</div>
			<h6 class="text-white">
				Search results for "{searchStore.query}".{" "}
				<a href="#" style="color: #1ed660;" onClick={handleBack}>
					Back
				</a>
			</h6>
			<h5 class="text-white">Music</h5>
			<div
				id="music"
				class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3"
			>
				<For each={musics.data}>
					{(music, i) => (
						<Show
							when={
								(music.artist
									.toLowerCase()
									.includes(searchStore.query.toLowerCase()) ||
									music.title
										.toLowerCase()
										.includes(searchStore.query.toLowerCase())) &&
								searchStore.query != ""
							}
						>
							<div class="col-6 col-sm">
								<a onClick={() => changeIndex(i)}>
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
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${generateColorFromId(
													i()
												)}, #212529);`}
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
											<h6>{music.title}</h6>
											<p class="card-text">{music.artist}</p>
										</div>
									</div>
								</a>
							</div>
						</Show>
					)}
				</For>
			</div>
			<h5 class="text-white">Playlist</h5>
			<div
				id="playlist"
				class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3"
			>
				<For each={playlists.data}>
					{(playlist, i) => (
						<Show
							when={
								(playlist.artist
									.toLowerCase()
									.includes(searchStore.query.toLowerCase()) ||
									playlist.title
										.toLowerCase()
										.includes(searchStore.query.toLowerCase())) &&
								searchStore.query != ""
							}
						>
							<div class="col-6 col-sm">
								<a onClick={() => changeIndex(i)}>
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
												style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${generateColorFromId(
													i()
												)}, #212529);`}
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
											<h6>{playlist.title}</h6>
											<p class="card-text">{playlist.artist}</p>
										</div>
									</div>
								</a>
							</div>
						</Show>
					)}
				</For>
			</div>
		</>
	);
}

export default SearchResult;
