import React, { useContext,useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import axios from 'axios'

import './Home.css';
import { Header } from '../../styles/Header/Header'
import { Div } from '../../styles/Div/Div'
import * as Marvel from '../../../assets/marvelWhite.png'
import * as Comics from '../../../assets/Comics.png'
import * as spider from '../../../assets/haquadrinhos2.jpg'
import * as spider2 from '../../../assets/favs.png'
import * as shh from '../../../assets/shh.png'

import * as hf from '../../../assets/hfq.jpg'



// import * as user from '../../../assets/user.png'
let search = ''
let image = ''
const Home = () => {
  const [customResult, setCustomResult] = useState([])
  const [genericResult, setGenericResult] = useState([])
  // const [imagePathFav, setImagePathFav] = useState(spider)
  // const [imagePathSH, setImagePathSH] = useState(hf)



  const { setToken, token } = useContext(StoreContext);
  const { setEmail, email } = useContext(StoreContext);

  useEffect(() => {
  }, [])

const handleSearch = (event)=>{
  search = event.target.value
}
// const ariseImageFav =()=>{

//   setImagePathFav(spider2)
// }
// const vanishImageFav = ()=>{
//   setImagePathFav(spider)
// }


const handleSearchSubmit = async () =>{
  if(search.length>1){
    const result = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${search}&ts=1&apikey=c7f573cee400794c9dcfe91982ab3468&hash=26e5b250a883bac18ba4687feff1577b`)
    // console.log(result.data.data.results[0].comics)
    // console.log(result.data.data.results[0].events)
    // console.log(result.data.data.results[0].series)
    // console.log(result.data.data.results[0].stories)



    setCustomResult(["comics","events","series","stories"])
    return console.log(result)
  }
const result = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c7f573cee400794c9dcfe91982ab3468&hash=26e5b250a883bac18ba4687feff1577b`)
return console.log(result)

}

  function setStates() {
    return setToken(null), setEmail(null)
  }
  return (
    <>
 

      <Header>
        <h1><img style={{width:180, height:60}} src={Marvel} alt="avengers-font" border="0"/></h1>
        <h4><img style={{width:80, height:30}} src={Comics} alt="avengers-font" border="0"/></h4>
        <div style={{display: 'flex', alignItems: 'flex-end'}}>
          <input onChange={(e)=>{handleSearch(e)}} className="search-input" type="text" placeholder="Search"/>
          <input onClick={()=>{handleSearchSubmit()}} type="button" className="vaiTeia" value="Vai teia" />

        </div>
        <button type="button" className="logout" onClick={setStates}>
          Logout
      </button>
      </Header>
      <div className="all">
        <div className="content">
            <button type="button" className="favorite"><img src={spider2} /> Favoritos </button>
            {/* <img src={spider2} onMouseOver={ariseImageFav} onMouseOut={vanishImageFav} /> */}
            <button type="button" className="searchHeroes"><Link to="/searchHeroes"><img src={shh} /> Search Heroes </Link></button>
            <button type="button" className="searchComics"> Search Comics </button>
            {/* {customResult.length > 1 ?customResult.map(e=>(<h1>{e}</h1>)): null} */}
        </div>
        <button type="button" className="searchStories"> Search stories </button>
        <button type="button" className="searchCreators"> Search Creators </button>

      
    
      <div className="glass">
         </div>
     

      
      </div>
     
      </>
  );
};

export default Home;
