import {
    VIEW_MOVIE,
    VIEW_SEARCH
} from './constants';

import Results from './Results';

class State {
    constructor() {
        this.path           = '';
        this.view           = '';
        this.query          = '';
        this.suggestions    = new Results();
        this.results        = new Results();
        this.isFetching     = false;
        this.movie          = null;

        Object.seal(this);
    }

    get isSearchView() {
        return this.view === VIEW_SEARCH;
    }

    get isMovieView() {
        return this.view === VIEW_MOVIE;
    }

    get hasSuggestions() {
        return this.suggestions.totalResults > 0;
    }

    get hasResults() {
        return this.results.totalResults > 0;
    }

    get hasQuery() {
        return this.query !== '';
    }
}

export default State;