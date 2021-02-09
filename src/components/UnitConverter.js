import React from 'react';
import { UnitName } from './StyledComponents.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';



export default function UnitConverter(props){

    const { style } = props;

    return(
        <section className="unitConverter" style={style}>
            <UnitName>Mbps</UnitName>
            <FontAwesomeIcon icon={fas.faAngleRight} size='2x' style={{color: '#ccc'}}/>
            <UnitName>MB/s</UnitName>
        </section>
    )
}