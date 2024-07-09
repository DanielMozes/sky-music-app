import RandomBackgroundDots from "./RandomBackgroundDots";
import { Link } from "@solidjs/router";

import { useNavigate } from "solid-start";

import { useAuth } from "./AuthContext";

function RightSection() {
	const { login } = useAuth();
	let seedInput;

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(seedInput.value);
		const navigate = useNavigate();
		navigate("/");
	};

	return (
		<div
			id="rightSection"
			class="bg-body-tertiary border rounded-3"
			style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);"
		>
			<div class="px-4 py-5 my-5 text-center">
				<RandomBackgroundDots />
				<h1 class="display-5 fw-bold text-white">Welcome back</h1>
				<div class="col-lg-6 mx-auto">
					<p class="lead mb-4 text-white">
						Enter your seed phrase, and listen music. :)
					</p>
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<form onSubmit={handleSubmit}>
							<div class="input-group mb-3">
								<input
									type="password"
									class="form-control"
									ref={seedInput}
									placeholder="Seed"
									aria-label="Seed"
									aria-describedby="seed"
								/>
							</div>
							<button type="submit" class="btn btn-primary px-4 gap-3">
								Sign In
							</button>
							<br />
							<Link href="/sign-up/">
								<small class="text-white">Don't have an account? Sign Up</small>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightSection;
