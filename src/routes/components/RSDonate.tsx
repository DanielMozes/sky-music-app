import { createSignal } from "solid-js";
import RandomBackgroundDots from "./RandomBackgroundDots";
import { Link } from "@solidjs/router";

import { BsMusicPlayerFill } from "solid-icons/bs";
import { BiRegularCoffeeTogo } from "solid-icons/bi";
import { BiSolidDonateHeart } from "solid-icons/bi";
import { FaSolidRepeat } from "solid-icons/fa";
import { AiFillEuroCircle } from "solid-icons/ai";
import { AiFillDollarCircle } from "solid-icons/ai";

function RightSection() {
	const [answer1, setAnswer1] = createSignal(null);
	const [answer2, setAnswer2] = createSignal(null);
	const [answer3, setAnswer3] = createSignal(null);

	const allAnswered = () =>
		answer1() !== null && answer2() !== null && answer3() !== null;

	const renderButton = () => {
		if (!allAnswered()) return null;

		if (answer1() && answer2() && answer3()) {
			return null;
		}
		if (answer1() && !answer2() && !answer3()) {
			return null;
		}
		if (answer1() && answer2() && !answer3()) {
			return null;
		}
		if (answer1() && !answer2() && answer3()) {
			return null;
		}
		if (!answer1() && !answer2() && !answer3()) {
			return (
				<Link
					href={import.meta.env.VITE_STRIPE_URL_USD_MONTHLY}
					type="button"
					class="btn btn-primary px-4 gap-3"
					target="_blank"
				>
					Donate
				</Link>
			);
		}

		if (!answer1() && answer2() && !answer3()) {
			return (
				<Link
					href={import.meta.env.VITE_STRIPE_URL_USD}
					type="button"
					class="btn btn-primary px-4 gap-3"
					target="_blank"
				>
					Donate
				</Link>
			);
		}
		if (!answer1() && !answer2() && answer3()) {
			return (
				<Link
					href={import.meta.env.VITE_STRIPE_URL_EUR_MONTHLY}
					type="button"
					class="btn btn-primary px-4 gap-3"
					target="_blank"
				>
					Donate
				</Link>
			);
		}
		if (!answer1() && answer2() && answer3()) {
			return (
				<Link
					href={import.meta.env.VITE_STRIPE_URL_EUR}
					type="button"
					class="btn btn-primary px-4 gap-3"
					target="_blank"
				>
					Donate
				</Link>
			);
		}
	};

	const resetAnswers = () => {
		setAnswer1(null);
		setAnswer2(null);
		setAnswer3(null);
	};

	return (
		<div
			id="rightSection"
			class="bg-body-tertiary border rounded-3"
			style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);"
		>
			<div class="px-4 py-5 my-5 text-center">
				<RandomBackgroundDots />
				<h1 class="display-5 fw-bold text-white">Donate</h1>
				<p class="lead mb-4 text-white">
					My app is free to use, so please support it with a donation!
					<br />
					With your help, I can continue to develop and maintain my services.
					<br />
					Your contribution is essential for me to keep providing high-quality
					and free content.
					<br />
					Thank you for your support! :)
				</p>
				<div class="col-lg-6 mx-auto">
					{answer1() === null && (
						<div class="list-group">
							<a
								href="#"
								class="list-group-item list-group-item-action d-flex gap-3 py-3"
								aria-current="true"
								onClick={() => setAnswer1(true)}
							>
								<BsMusicPlayerFill />
								<div class="d-flex gap-2 w-100 justify-content-between">
									<div>
										<h6 class="mb-0">Support the App</h6>
										<p class="mb-0 opacity-75">
											If you support the application, 100% of your contribution
											will be used transparently to maintain the app.
										</p>
									</div>
								</div>
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action d-flex gap-3 py-3"
								aria-current="true"
								onClick={() => setAnswer1(false)}
							>
								<BiRegularCoffeeTogo />
								<div class="d-flex gap-2 w-100 justify-content-between">
									<div>
										<h6 class="mb-0">Support the Creator</h6>
										<p class="mb-0 opacity-75">
											Choose this option if you'd like to treat the app creator
											to a coffee or a pizza. Your support means a lot!
										</p>
									</div>
								</div>
							</a>
						</div>
					)}
					{answer1() !== null && answer2() === null && (
						<div class="list-group">
							<a
								href="#"
								class="list-group-item list-group-item-action d-flex gap-3 py-3"
								aria-current="true"
								onClick={() => setAnswer2(true)}
							>
								<BiSolidDonateHeart />
								<div class="d-flex gap-2 w-100 justify-content-between">
									<div>
										<h6 class="mb-0">One time donation</h6>
									</div>
								</div>
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action d-flex gap-3 py-3"
								aria-current="true"
								onClick={() => setAnswer2(false)}
							>
								<FaSolidRepeat />
								<div class="d-flex gap-2 w-100 justify-content-between">
									<div>
										<h6 class="mb-0">Monthly donation</h6>
									</div>
								</div>
							</a>
						</div>
					)}
					{answer1() !== null && answer2() !== null && answer3() === null && (
						<div class="list-group">
							<a
								href="#"
								class="list-group-item list-group-item-action d-flex gap-3 py-3"
								aria-current="true"
								onClick={() => setAnswer3(true)}
							>
								<AiFillEuroCircle />
								<div class="d-flex gap-2 w-100 justify-content-between">
									<div>
										<h6 class="mb-0">Paying with EUR</h6>
									</div>
								</div>
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action d-flex gap-3 py-3"
								aria-current="true"
								onClick={() => setAnswer3(false)}
							>
								<AiFillDollarCircle />
								<div class="d-flex gap-2 w-100 justify-content-between">
									<div>
										<h6 class="mb-0">Paying with USD</h6>
									</div>
								</div>
							</a>
						</div>
					)}
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						{renderButton()}
					</div>
					{answer1() !== null && (
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								resetAnswers();
							}}
						>
							<small class="text-white">Reset</small>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default RightSection;
