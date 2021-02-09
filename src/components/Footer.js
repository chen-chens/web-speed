import { FooterStyle } from './StyledComponents';
import { useState } from 'react';


export default function Footer({number}){

    const [ status, setStatus ] = useState('---');

    if ( number > 300 ){
        setStatus('Fast');
    }else if ( 100 < number < 300 ){
        setStatus('Easy');

    }else{
        setStatus('Slow');
    }


    return(
        <FooterStyle style={{ background:(number>100) ? 'blue' : 'gray' }}>{status}</FooterStyle>
    )
}