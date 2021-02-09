import styled from 'styled-components';


export const Section = styled.section`
  width:100%;
  height:100vh;
  background-color:#dddddd;
  display: flex;
  justify-content:center;
  align-items:center;
`;
export const Body = styled.div`
  width:500px;
  // border: 1px solid #ccc;
  background-color:#f6f5f5;
  box-shadow:0 0 10px #c7cfb7;
  text-align:center;

`;
export const Title = styled.h1`
  background-color:#62959c;
  color:#f8f1f1;
  padding: 20px 0px;
  margin-block-end:0;
  margin-block-start:0;
`;

export const UnitName = styled.h2`
  background-color:#e3d0b9;
  padding: 10px 15px;
  border-radius:10px;
  width:100px;
  margin-block-end:0;
  margin-block-start:0;
`;
export const Action = styled.h2`
  color:#cdd0cb;
  width:100px;
  margin-block-end:0;
  margin-block-start:0;
  margin-bottom:10px;
`;

export const FooterStyle = styled.footer`
  background-color: #276678;
  color:#fff;
  font-size:1rem;
  padding:10px 0px;
`;
