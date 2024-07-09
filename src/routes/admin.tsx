import "./index.css";

import MySiteTitle from "./components/MySiteTitle";

import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RSAdmin";
import Footer from "./components/Footer";

import BasicAuth from "./components/BasicAuth";
import { Show } from "solid-js";

export default function Home() {
	const authenticated = BasicAuth();
	return (
		<>
			<MySiteTitle>Admin</MySiteTitle>

			<Show when={authenticated()}>
				<Header />

				<div
					class="container-fluid pb-2"
					style="background: url(/background.jpg); background-size: cover;"
				>
					<div
						class="d-grid gap-2"
						style="padding-top: 65px; min-height: 99vh;"
					>
						<LeftSection setSavedMusicIds={[]} setLikedMusicIds={[]} />
						<RightSection />
					</div>
				</div>

				<Footer />

				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
			</Show>
		</>
	);
}
