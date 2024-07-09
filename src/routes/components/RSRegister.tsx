import RandomBackgroundDots from "./RandomBackgroundDots";
import { Link } from "@solidjs/router";

import { useAuth } from "./AuthContext";

import { BsMusicPlayerFill } from "solid-icons/bs";
import { BsStarFill } from "solid-icons/bs";
import { IoSyncCircle } from "solid-icons/io";
import { AiFillLike } from "solid-icons/ai";
import { FaSolidLock } from "solid-icons/fa";
import { IoEarth } from "solid-icons/io";
import { BsBucketFill } from "solid-icons/bs";
import { FaSolidFolder } from "solid-icons/fa";

function RightSection() {
	const { register } = useAuth();

	const handleSubmit = async () => {
		await register();
	};

	return (
		<div
			id="rightSection"
			class="bg-body-tertiary border rounded-3"
			style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);"
		>
			<div class="px-4 py-5 my-5 text-center">
				<RandomBackgroundDots />
				<h1 class="display-5 fw-bold text-white">Join</h1>
				<div class="col-lg-10 mx-auto">
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button
							type="button"
							onClick={handleSubmit}
							class="btn btn-primary px-4 gap-3"
						>
							Sign Up
						</button>
					</div>
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<Link href="/sign-in/">
							<small class="text-white">Have an account? Sign In</small>
						</Link>
					</div>
					<p class="lead my-4 text-white">Why join to SkyMusic?</p>
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5 text-white">
						<div class="col d-flex align-items-start">
							<BsMusicPlayerFill size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">Music quality</h3>
								<p>
									Choose from four quality levels. Unregistered users get 160
									kbps. Register to access up to 320 kbps (40, 80, 160, 320).
								</p>
							</div>
						</div>
						<div class="col d-flex align-items-start">
							<BsStarFill size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">Favorite music</h3>
								<p>
									With registration, you can save your favorite songs and
									playlists, as well as create your own custom playlists.
								</p>
							</div>
						</div>
						<div class="col d-flex align-items-start">
							<IoSyncCircle size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">Save and sync</h3>
								<p>
									Without registration, data like history and favorites is saved
									locally. With registration, it's saved to the cloud and synced
									decentrally.
								</p>
							</div>
						</div>
						<div class="col d-flex align-items-start">
							<AiFillLike size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">Free to use</h3>
								<p>
									You can use our application for free, and in return, you may
									encounter non-intrusive ads on our interface.
								</p>
							</div>
						</div>
						<div class="col d-flex align-items-start">
							<FaSolidLock size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">Secure</h3>
								<p>
									Our application don't collect any data about you, and don't
									access to your stored music library at all.
								</p>
							</div>
						</div>
						<div class="col d-flex align-items-start">
							<IoEarth size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">Decentralized</h3>
								<p>
									Our application operates in a completely decentralized and
									private manner through the Sia network.
								</p>
							</div>
						</div>
						<div class="col d-flex align-items-start">
							<BsBucketFill size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">S3 storage</h3>
								<p>
									You can connect to any S3 cloud provider. If you don't have
									one, it's not a problem; you can create and manage it through
									the application anytime.
								</p>
							</div>
						</div>
						<div class="col d-flex align-items-start">
							<FaSolidFolder size="2em" />
							<div>
								<h3 class="fw-bold mb-0 fs-4">Local storage</h3>
								<p>
									Would you like to listen to your music stored on your desktop
									or mobile? There's no problem with SkyMusic; this is also
									possible.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightSection;
