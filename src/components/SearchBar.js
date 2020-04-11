import React from 'react';
import _ from 'lodash';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import PokemonNames from '../pokemonNames';

const initialState = { isLoading: false, results: [], value: 'Search Pokemon...' };

class SearchBar extends React.Component {
    state = initialState;

    onSearchResultSelect = (e, { result }) => {
        this.setState({ value: result.title });
        this.props.onSubmit(result.title);
    }

    onSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(PokemonNames, isMatch),
            })
        }, 300)
    }

    onSearchMouseDown = (e) => {
        this.setState({ value: '' });
    }

    render() {
        const { isLoading, value, results } = this.state;
        return (
            <Grid centered>
                <Grid.Column width={10}>
                <Search
                    loading={isLoading}
                    onResultSelect={this.onSearchResultSelect}
                    onSearchChange={_.debounce(this.onSearchChange, 500, {
                    leading: true,
                    })}
                    onMouseDown={this.onSearchMouseDown}
                    results={results}
                    value={value}
                    {...this.props}
                />
                </Grid.Column>
            </Grid>
        );
    }
}

export default SearchBar;