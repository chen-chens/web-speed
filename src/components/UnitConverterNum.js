import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Action } from './StyledComponents.js';


export default function UnitConverterNum({style,inputStyle,number,handleInputChange}){
  



    return(
        <section className="unitConverterNum" style={style}>
          <div className="set">
            <Action>Set</Action>
              <input type="number" style={inputStyle} value={number} onChange={handleInputChange} min='0'/>
          </div>
          <FontAwesomeIcon icon={fas.faAngleRight} size='2x' style={{color: '#ccc'}}/>
          <div className="show">
            <Action>Show</Action>
              <input type="number" style={inputStyle} value={number / 8 } readOnly/>
          </div>
        </section>
    )
}