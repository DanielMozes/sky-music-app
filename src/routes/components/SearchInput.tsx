import { useNavigate } from 'solid-start';
import { setSearchStore } from './store';

function SearchInput() {
    const navigate = useNavigate();

    const updateSearchQuery = (event) => {
        setSearchStore('query', event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search`);
      };

    return (
        <form onSubmit={handleSubmit}>
          <input type="search" onInput={updateSearchQuery} class="form-control btn btn-outline-primary" placeholder="Search" aria-label="Search" />
        </form>
      );
}

export default SearchInput;