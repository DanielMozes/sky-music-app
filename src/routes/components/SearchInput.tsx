import { useNavigate } from "solid-start";
import { searchStore, setSearchStore } from "./store";

function SearchInput() {
	const navigate = useNavigate();

	let previousQueryLength = 0;

	let inputRef;

	const updateSearchQuery = (event) => {
		const newQuery = event.target.value;
		setSearchStore("query", newQuery);
		if (newQuery.length >= 3) {
			handleSubmit(event);
		} else if (
			newQuery.length < previousQueryLength &&
			previousQueryLength >= 3
		) {
			navigate(-1);
		}
		previousQueryLength = newQuery.length;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/search`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				onInput={updateSearchQuery}
				class="form-control btn btn-outline-primary"
				placeholder="Search"
				aria-label="Search"
				value={searchStore.query}
			/>
		</form>
	);
}

export default SearchInput;
