


import styled, { keyframes, css } from 'styled-components';

export const Header = styled.div`

 /* min-width: "1000vh"; */

 height:15vh;
 min-height: 15vh;
 min-width:100%;
 width:99.6%;
margin: 1px auto;
background-color: #e71016;

border-radius: 0px 0px 10px 10px;
color: white;
display:flex;
align-items:center;
/* justify-content:center; */
border: 1px   solid rgba(0, 0, 0, 0.1);
/* box-shadow:0 0 2px 1px rgba(0, 0, 0, 0.2); */
box-shadow:0 0 2px 1px rgb(10, 200, 232,0.2);

opacity:0.8;
div{
  margin-right:25%;
  margin-left:25%

}
h1{
  padding:2rem auto;
  font-size:35px;
font-weight:900;
margin: 100px 10px 100px 0%;

padding: 8rem 0rem 8rem 1rem; 
font-family: HEROIC AVENGER;
}
h4{
  font-family: HEROIC AVENGER;
  margin: 150px 10px 100px 0%;
}
button{
      flex:0.2;
font-weight:800;
  margin-left: 2vw;
      width: 2vw;
      color: white;
      margin-right: 1vw;
/* box-shadow:0 0 3px 0.2px rgba(0, 0, 0, 0.2); */


/* flex:0.2; */
  
  border: 1px solid #CCCC;
  padding: 10px 15px;
  border-radius:10px;
  font-size: 18px;
  min-height: 2vh;
  min-width: 18vh;
  margin-right: 100vw;

cursor: pointer;
    
      /* margin:2rem auto; */
    }
    button:hover{
      color: #0abde3;

    }
 

`;
