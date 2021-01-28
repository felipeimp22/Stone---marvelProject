import React,{useState} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Header } from '../../styles/Header/Header'
import './SearchHeroes.css';
import { Div } from '../../styles/Div/Div'
import axios from 'axios';
import * as Marvel from '../../../assets/marvelWhite.png'
import * as Comics from '../../../assets/Comics.png'

function SearchHeroes() {
    const [heroes, setHeroes] = useState([])
    const [dataHeroes, setDataHeroes] = useState([])

    let search = ''
    const handleInput = async() =>{
        console.log(search)
        const result = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${search}&ts=1&apikey=c7f573cee400794c9dcfe91982ab3468&hash=26e5b250a883bac18ba4687feff1577b`)
        console.log(result.data.data.results[0])
        setDataHeroes(result.data.data.results[0].description)
        setHeroes(search)
    }
    const handleChangeInput = e => {
        search = e.target.value
    }
  return(
      <div>
          <Header>
          <h1><img style={{width:180, height:60}} src={Marvel} alt="avengers-font" border="0"/></h1>
          <h4><img style={{width:80, height:30}} src={Comics} alt="avengers-font" border="0"/></h4>
          <div style={{display: 'flex', alignItems: 'flex-end'}}>
          <input  onChange={(e)=>{handleChangeInput(e)}} className="search-input" type="text" placeholder="Search"/>
          <input onClick={handleInput} type="button" className="vaiTeia" value="Vai teia" />
          </div>
          <button type="button" className="back">
              <Link to="/">
                back
              </Link>
      </button>
          </Header>
          
          <Div>
          <div >
          <h1 > {heroes} results:</h1>
        <h4 > About </h4>
        <h5 >{dataHeroes}</h5>

        <h1>Topics:</h1>
        </div>
        </Div>
      </div>
      
  )
}

export default SearchHeroes;