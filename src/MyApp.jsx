import './MyApp.css'
import Header from "./components/Header/Header.jsx";
import axios from "axios";
import {useState,useEffect} from "react";
import Input from "./components/Input/Input.jsx";

function App() {

      const [CurrentNumber, setNumber] = useState('')
      const [CurrentFact, setFact] = useState('')
    
      useEffect(() => {
    axios.get('http://numbersapi.com/42?json')
        .then(function (response) {

            setNumber(response.data.number)
            setFact(response.data.text)
        })
      }, []);
        
  return (
    <>
      <Header  CurrentNumber={CurrentNumber} CurrentFact={CurrentFact} ></Header>
        <Input></Input>
    </>
  )
}

export default App
