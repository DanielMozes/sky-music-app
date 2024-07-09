import "./index.css";

import { Title } from "@solidjs/meta";

import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Footer from "./components/Footer";

import { createSignal } from "solid-js";

export default function Home() {
	const [savedMusicIds, setSavedMusicIds] = createSignal([]);
	const [likedMusicIds, setLikedMusicIds] = createSignal([]);

	return (
		<>
			<Title>SkyMusic</Title>

			<Header />

			<div
				class="container-fluid pb-2"
				style="background: url(/button.jpg); background-size: cover;"
			>
				<div class="d-grid gap-2" style="padding-top: 65px; min-height: 99vh;">
					<LeftSection
						setSavedMusicIds={setSavedMusicIds}
						setLikedMusicIds={setLikedMusicIds}
					/>
					<RightSection
						savedMusicIds={savedMusicIds}
						likedMusicIds={likedMusicIds}
					/>
				</div>
			</div>

			<Footer />

			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
		</>
	);
}
