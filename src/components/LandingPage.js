import React from 'react';
import PokemonNames from '../pokemonNames';
import { Carousel } from 'react-bootstrap';

const LandingPage = () => {
    var tempNames = PokemonNames;
    var length = tempNames.length;
    length--;
    for(let i = length; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const arr = tempNames[i]
        tempNames[i] = tempNames[j]
        tempNames[j] = arr
    }
      
    var pokes1 = [];
    var pokes2 = [];
    var tempPoke1 = '';
    var tempPoke2 = '';
    for(var i = 0; i < 30; i++) {
        tempPoke1 = tempNames[i].title.toLowerCase();
        tempPoke2 = tempNames[i+30].title.toLowerCase();
        pokes1.push(tempPoke1);
        pokes2.push(tempPoke2);
    }

    return (
        <div class="text-center">
            <Carousel interval='2000' controls={false} indicators={false}>
                {pokes1.map(i => { return <Carousel.Item><img src={`/3dpokemonsprites/${i}.gif`} style={{ marginTop: '10px', marginBottom: '8px' }}/></Carousel.Item>})}
            </Carousel>
        </div>
    );
}

export default LandingPage;