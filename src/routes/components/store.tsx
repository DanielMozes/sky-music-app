import { createStore } from 'solid-js/store';

export const [searchStore, setSearchStore] = createStore({ query: '' });