import { createSignal, createEffect, onMount } from "solid-js";
import RandomBackgroundDots from "./RandomBackgroundDots";
import { Link } from "@solidjs/router";

import { useParams } from "@solidjs/router";
import { useNavigate } from "solid-start";

import { FaBrandsFacebook } from "solid-icons/fa";
import { ImMail4 } from "solid-icons/im";
import { FaSolidShare } from "solid-icons/fa";
import { FaBrandsFacebookMessenger } from "solid-icons/fa";
import { AiFillTwitterCircle } from "solid-icons/ai";
import { RiLogosWhatsappFill } from "solid-icons/ri";

function RightSection() {
	const params = useParams();
	const navigate = useNavigate();
	const id = params.id;

	createEffect(() => {
		if (!id || isNaN(Number(id))) {
			navigate("/");
		}
	});

	const [facebookShareUrl, setFacebookShareUrl] = createSignal("");
	const [emailShareUrl, setEmailShareUrl] = createSignal("");
	const [messengerShareUrl, setMessengerShareUrl] = createSignal("");
	const [xShareUrl, setXShareUrl] = createSignal("");
	const [whatsappShareUrl, setWhatsappShareUrl] = createSignal("");
	const [currentUrl, setCurrentUrl] = createSignal("");

	onMount(() => {
		const protocol = window.location.protocol;
		const hostname = window.location.hostname;
		const fullUrl = `${protocol}//${hostname}/music/${id}`;

		const encodedUrl = encodeURIComponent(fullUrl);
		const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
		setFacebookShareUrl(shareUrl);

		const emailSubject = encodeURIComponent("Check out this music!");
		const emailBody = encodeURIComponent(
			`I found this interesting music link: ${fullUrl}`
		);
		const mailtoUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;
		setEmailShareUrl(mailtoUrl);

		const messengerUrl = `fb-messenger://share?link=${encodedUrl}`;
		setMessengerShareUrl(messengerUrl);

		const xUrl = `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(
			"Check out this music!"
		)}`;
		setXShareUrl(xUrl);

		const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
		setWhatsappShareUrl(whatsappUrl);

		setCurrentUrl(fullUrl);
	});

	const copyToClipboard = () => {
		navigator.clipboard
			.writeText(currentUrl())
			.then(() => {
				alert("Link copied to clipboard");
			})
			.catch((err) => {
				console.error("Failed to copy: ", err);
			});
	};

	return (
		<div
			id="rightSection"
			class="bg-body-tertiary border rounded-3"
			style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);"
		>
			<div class="px-4 py-5 my-5 text-center">
				<RandomBackgroundDots />
				<h1 class="display-5 fw-bold text-white">Share</h1>

				<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
					<div class="col">
						<a
							href={facebookShareUrl()}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
								<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
									<h3 class="mt-4 mb-4 display-6 lh-1 fw-bold">
										<FaBrandsFacebook size="2em" />
										<br />
										Facebook
									</h3>
								</div>
							</div>
						</a>
					</div>

					<div class="col">
						<a href={emailShareUrl()} target="_blank" rel="noopener noreferrer">
							<div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
								<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
									<h3 class="mt-4 mb-4 display-6 lh-1 fw-bold">
										<ImMail4 size="2em" />
										<br />
										Email
									</h3>
								</div>
							</div>
						</a>
					</div>

					<div class="col">
						<div
							class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
							style="cursor: pointer;"
							onClick={copyToClipboard}
						>
							<div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
								<h3 class="mt-4 mb-4 display-6 lh-1 fw-bold">
									<FaSolidShare size="2em" />
									<br />
									Copy link
								</h3>
							</div>
						</div>
					</div>

					<div class="col">
						<a
							href={messengerShareUrl()}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
								<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
									<h3 class="mt-4 mb-4 display-6 lh-1 fw-bold">
										<FaBrandsFacebookMessenger size="2em" />
										<br />
										Messenger
									</h3>
								</div>
							</div>
						</a>
					</div>

					<div class="col">
						<a href={xShareUrl()} target="_blank" rel="noopener noreferrer">
							<div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
								<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
									<h3 class="mt-4 mb-4 display-6 lh-1 fw-bold">
										<AiFillTwitterCircle size="2em" />
										<br />X (Twitter)
									</h3>
								</div>
							</div>
						</a>
					</div>

					<div class="col">
						<a
							href={whatsappShareUrl()}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
								<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
									<h3 class="mt-4 mb-4 display-6 lh-1 fw-bold">
										<RiLogosWhatsappFill size="2em" />
										<br />
										WhatsApp
									</h3>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightSection;
