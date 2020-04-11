import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { Nav } from 'react-bootstrap';
import List from './List';
import typeColors from '../typeColors';

class InfoCard extends React.Component {
    state = { 
        activeIndex: -1,
        activeKey: 'link-0',
        current: ''
    };

    typeDamageCalculations = (type1, type2) => {
        var typeDamage = {};
        var fourTimesWeak = [];
        var twoTimesWeak = [];
        var twoTimesResist = [];
        var fourTimesResist = [];
        var immune = [];
        
        if(type2) {
            var type1Name = '';
            var type2Name = '';
            var flag = true;
            
            for(var i = 0; i < type1.double_damage_from.length; i++) { 
                type1Name = type1.double_damage_from[i].name;
                flag = true;
                
                type2.double_damage_from.map(t => {
                    if(type1Name === t.name) {
                        flag = false;
                        fourTimesWeak.push(t.name);
                    }
                });

                
                type2.half_damage_from.map(t => {
                    if(type1Name === t.name) {
                        flag = false;
                    }
                });
                
                type2.no_damage_from.map(t => {
                    if(type1Name === t.name) {
                        flag = false;
                        if(!immune.includes(type1Name)) {
                            immune.push(type1Name);
                        }
                    }
                });

                if(flag) {
                    if(!fourTimesWeak.includes(type1Name)) {
                        twoTimesWeak.push(type1Name);
                    }
                }
            }

            for(var i = 0; i < type2.double_damage_from.length; i++) { 
                type2Name = type2.double_damage_from[i].name;

                flag = true;
                
                type1.half_damage_from.map(t => {
                    if(type2Name === t.name) {
                        flag = false;
                    }
                });
                
                type1.no_damage_from.map(t => {
                    if(type2Name === t.name) {
                        flag = false;
                        if(!immune.includes(type2Name)) {
                            immune.push(type2Name);
                        }
                    }
                });

                if(flag) {
                    if(!fourTimesWeak.includes(type2Name)) {
                        twoTimesWeak.push(type2Name);
                    }
                }
            }

            for(var i = 0; i < type1.half_damage_from.length; i++) { 
                type1Name = type1.half_damage_from[i].name;
                flag = true;
                
                type2.half_damage_from.map(t => {
                    if(type1Name === t.name) {
                        flag = false;
                        fourTimesResist.push(t.name);
                    }
                });

                
                type2.double_damage_from.map(t => {
                    if(type1Name === t.name) {
                        flag = false;
                    }
                });
                
                type2.no_damage_from.map(t => {
                    if(type1Name === t.name) {
                        flag = false;
                    }
                });

                if(flag) {
                    if(!fourTimesResist.includes(type1Name)) {
                        twoTimesResist.push(type1Name);
                    }
                }
            }

            for(var i = 0; i < type2.half_damage_from.length; i++) { 
                type2Name = type2.half_damage_from[i].name;

                flag = true;
                
                type1.double_damage_from.map(t => {
                    if(type2Name === t.name) {
                        flag = false;
                    }
                });
                
                type1.no_damage_from.map(t => {
                    if(type2Name === t.name) {
                        flag = false;
                    }
                });

                if(flag) {
                    if(!fourTimesResist.includes(type2Name)) {
                        twoTimesResist.push(type2Name);
                    }
                }
            }

            for(var i = 0; i < type1.no_damage_from.length; i++) {
                type1Name = type1.no_damage_from[i].name;
                if(!immune.includes(type1Name)) {
                    immune.push(type1Name);
                }
            }

            for(var i = 0; i < type2.no_damage_from.length; i++) {
                type2Name = type2.no_damage_from[i].name;
                if(!immune.includes(type2Name)) {
                    immune.push(type2Name);
                }
            }

            typeDamage.fourTimesWeak = fourTimesWeak;
            typeDamage.twoTimesWeak = twoTimesWeak;
            typeDamage.twoTimesResist = twoTimesResist;
            typeDamage.fourTimesResist = fourTimesResist;
            typeDamage.immune = immune;
            console.log(`immune: ${immune}`);
        } else {
            for(var i = 0; i < type1.double_damage_from.length; i++){
                twoTimesWeak.push(type1.double_damage_from[i].name);
            }

            for(var i = 0; i < type1.half_damage_from.length; i++){
                twoTimesResist.push(type1.half_damage_from[i].name);
            }

            for(var i = 0; i < type1.no_damage_from.length; i++){
                immune.push(type1.no_damage_from[i].name);
            }
            typeDamage.twoTimesWeak = twoTimesWeak;
            typeDamage.twoTimesResist = twoTimesResist;
            typeDamage.immune = immune;
        }

        return typeDamage;
    }

    render(props) {
        const { 
            name, 
            sprites, 
            image,
            damage_relations,
            type1_damage,
            type2_damage,
            types
        } = this.props.pokemonData;

        let pokeImage;
        if( name ) {
            var typeDamage = this.typeDamageCalculations(type1_damage, type2_damage);

            pokeImage = <img src={`${image}`} style={{ marginTop: '10px', marginBottom: '8px' }}/>;
            var pokeName = <span>{name.toUpperCase()}</span>;
            var color = typeColors[types[0]?.type?.name].background;
            var pokeTyping = [<span className={'badge badge-pill'} style={{ background: `${color}`, color: 'white', marginRight: '5px' }}>{types[0]?.type?.name}</span>];
            if(types[1]) {
                color = typeColors[types[1]?.type?.name].background;
                pokeTyping.push(<span className={'badge badge-pill'} style={{ background: `${color}`, color: 'white', marginRight: '5px' }}>{types[1]?.type?.name}</span>);
            }
            var navbar = (
                <Nav 
                        style={{ marginTop: '40px' }} 
                        variant="pills"
                        defaultActiveKey={this.state.activeKey}
                        onSelect={(selected) => this.setState({ activeKey: selected })}
                    >
                        <Nav.Item style={{ marginRight: '5px' }} >
                            <Nav.Link style={{ fontWeight: 'bold' }} eventKey="link-0">Weaknesses</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ marginRight: '5px' }}>
                            <Nav.Link style={{ fontWeight: 'bold' }} eventKey="link-1">Resistances</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ fontWeight: 'bold' }} eventKey="link-2">Immunities</Nav.Link>
                        </Nav.Item>
                </Nav>
            )
        }

        return (
            <div>
                <div class="jumbotron" style={{ background: '#000' }}>
                    <div class="text-center">
                        {pokeImage}
                    </div>
                    <div className="text-center" style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px' }}>
                        {pokeName}
                    </div>
                    <div className="text-center">
                        {pokeTyping}
                    </div>

                    {navbar}

                    {image !== undefined && this.state.activeKey === 'link-0' ? <List fourTimesWeak={typeDamage.fourTimesWeak} twoTimesWeak={typeDamage.twoTimesWeak}/> : ''}
                    {this.state.activeKey === 'link-1' ? <List fourTimesResist={typeDamage.fourTimesResist} twoTimesResist={typeDamage.twoTimesResist}/> : ''}
                    {this.state.activeKey === 'link-2' ? <List immune={typeDamage.immune}/> : ''}
                </div>
            </div>
        );
    }
}

export default InfoCard;