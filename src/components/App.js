import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import InfoCard from './InfoCard';
import LandingPage from './LandingPage';
import "bootswatch/dist/cyborg/bootstrap.min.css";

class App extends React.Component {
    state = { 
        pokemonData: { 
            sprites: {
                front_default: '' 
            }
        },
        landingPageOn: true 
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get(`/pokemon/${term}`);
        const types = response.data.types;
        const type1 = await unsplash.get(`/type/${types[0].type.name}`);
        response.data.damage_relations = type1.data.damage_relations;
        response.data.type1_damage = type1.data.damage_relations;
        if( types[1] ) {
            const type2 = await unsplash.get(`/type/${types[1].type.name}`);
            response.data.type2_damage = type2.data.damage_relations;
        }
        term = term.toLowerCase();
        response.data.image = `/3dpokemonsprites/${term}.gif`;
        this.setState({ pokemonData: response.data, landingPageOn: false });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <InfoCard pokemonData={this.state.pokemonData}/>
                {this.state.landingPageOn === true ? <LandingPage /> : ''}
            </div>
        );
    }
}

export default App;