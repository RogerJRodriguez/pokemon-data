import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import InfoCard from './InfoCard';
import LandingPage from './LandingPage';
import genviiiPokemon from '../gen8pokemonTypes';
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
        var types = [];
        var data = {};
        var tmpTerm = term;
        term = term.toLowerCase();

        try {
            const response = await unsplash.get(`/pokemon/${term}`);
            types = response.data.types;
            data.types = types;
            data.stats = response.data.stats;
        } catch(err) {
            types = [
                { 
                    type: {
                        name: '' 
                    }
                } 
            ];

            types[0].type.name = genviiiPokemon[tmpTerm].type1;
            if(genviiiPokemon[tmpTerm].type2) {
                types.push({
                    type: {
                        name: ''
                    }
                });
                types[1].type.name = genviiiPokemon[tmpTerm].type2;
            }

            // have to reverse stats array to match pokeApi
            data.stats = genviiiPokemon[tmpTerm].stats.reverse();
            data.types = types;
        }
        const type1 = await unsplash.get(`/type/${types[0].type.name}`);
        
        data.type1_damage = type1.data.damage_relations;
        if( types[1] ) {
            const type2 = await unsplash.get(`/type/${types[1].type.name}`);
            data.type2_damage = type2.data.damage_relations;
        }
        term = term.toLowerCase();
        data.name = term;
        data.image = `./3dpokemonsprites/${term}.gif`;
        this.setState({ pokemonData: data, landingPageOn: false });
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