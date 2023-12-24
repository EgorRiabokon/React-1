import './MyApp.css'
import Header from "./components/Header/Header.jsx";
import axios from "axios";
import {useState,useEffect} from "react";
import Input from "./components/Input/Input.jsx";

function App() {

      const [CharacterName, setName] = useState('')
      const [CharacterImage, setImage] = useState('')
    

    axios.get('https://rickandmortyapi.com/api/character')
        .then(function (response) {

            setImage(response.data.results[7].image)
            setName(response.data.results[7].name)
        })
        
  return (
    <>
      <Header  CharacterName={CharacterName} CharacterImage={CharacterImage} ></Header>
        <Input></Input>
    </>
  )
}

export default App
