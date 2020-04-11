import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import typeColors from '../typeColors';

const List = (props) => {
    const { 
        fourTimesWeak,
        twoTimesWeak,
        fourTimesResist,
        twoTimesResist,
        immune
    } = props;
    
    var list = [];
    if(fourTimesWeak?.length > 0) {
        list.push(<ListGroup.Item><span style={{ color: 'red', fontWeight: 'bold', marginRight: '5px' }}>4x:   </span>{fourTimesWeak?.map(i => { var color = typeColors[i].background; return <span className={'badge badge-pill'} style={{ background: `${color}`, color: 'white', marginRight: '5px' }}>{i} </span> })}</ListGroup.Item>);
    }
    if(twoTimesWeak?.length > 0) {
        list.push(<ListGroup.Item><span style={{ color: 'crimson', fontWeight: 'bold', marginRight: '5px' }}>2x:   </span>{twoTimesWeak?.map(i => { var color = typeColors[i].background; return <span className={'badge badge-pill'} style={{ background: `${color}`, color: 'white', marginRight: '5px' }}>{i} </span> })}</ListGroup.Item>);
    }
    if(fourTimesResist?.length > 0) {
        list.push(<ListGroup.Item><span style={{ color: 'aquamarine', fontWeight: 'bold', marginRight: '5px' }}>.25x:   </span>{fourTimesResist?.map(i => { var color = typeColors[i].background; return <span className={'badge badge-pill'} style={{ background: `${color}`, color: 'white', marginRight: '5px' }}>{i} </span> })}</ListGroup.Item>);
    }
    if(twoTimesResist?.length > 0) {
        list.push(<ListGroup.Item><span style={{ color: 'lightgreen', fontWeight: 'bold', marginRight: '5px' }}>.5x:   </span>{twoTimesResist?.map(i => { var color = typeColors[i].background; return <span className={'badge badge-pill'} style={{ background: `${color}`, color: 'white', marginRight: '5px' }}>{i} </span> })}</ListGroup.Item>);
    }
    if(immune?.length > 0) {
        list.push(<ListGroup.Item><span style={{ color: 'white', fontWeight: 'bold', marginRight: '5px' }}>0x:   </span>{immune?.map(i => { var color = typeColors[i].background; return <span className={'badge badge-pill'} style={{ background: `${color}`, color: 'white', marginRight: '5px' }}>{i} </span> })}</ListGroup.Item>);
    }

    return (
        <Card>
            <ListGroup variant="flush">
                {list}
            </ListGroup>
        </Card>
    );
}

export default List;