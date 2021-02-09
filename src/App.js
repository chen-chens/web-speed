import './App.css';
import { Section, Body, Title } from './components/StyledComponents.js';
import UnitConverter from './components/UnitConverter.js';
import UnitConverterNum from './components/UnitConverterNum.js';
import Footer from './components/Footer.js';
import { useState } from 'react';



const style = {
  display: 'flex',
  justifyContent:'space-around',
  alignItems:'center',
  padding:'20px 0px',
}

const inputStyle = {
  width:100, 
  height:30, 
  textAlign:'center', 
  fontSize:'1.5rem',
  fontWeight:'Bold',
  color:'#c19277',
  borderWidth:1,
  borderColor:'#eee',
  borderStyle:'none',
  backgroundColor:'#f6f5f5',
}



function App() {

  const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': "AAA"
  };

  const [number, setNumber] = useState(0);
  const handleInputChange = (e)=>{
    setNumber(e.target.value);
  }

  return(
    <Section>
      <Body>
        <Title>WEB SPEED TRANSLATOR</Title>
        <UnitConverter style={style} />
        <UnitConverterNum style={style} 
                          inputStyle={inputStyle} 
                          number={number}
                          setNumber={setNumber} 
                          handleInputChange={handleInputChange}
                          />
      </Body>
      <Footer number={number}>FAST</Footer>
    </Section>
  )

}
export default App;
