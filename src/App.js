import { useState, useEffect, createContext } from "react";
import Question from "./components/Question";
import axios from "axios";
import { Button } from "react-bootstrap";

import PageNavBar from "./components/PageNavBar";
// ! react BootStrap 
import About from './components/Home/About'


import logo from './Img/attachment_95890421-removebg-preview.png'

function App() {

  const [testData, setTestData] = useState([])


  useEffect(() => {

      const getData = async () => {
        try {
          const { data } = await axios.get('https://the-trivia-api.com/api/questions')
          // console.log(data)
          setTestData(data)
          // ! this will be the entire API library
        } catch (error) {
          console.log(error)
        }
      }
      getData()
    }, [])
  

  const [visibleQuestion, setVisible] = useState(false)

  const [startVisibility, setStartVisibility] = useState(true)

  const questionVisibility = () => { 
    setVisible(true) 
    setStartVisibility(false)
  }

  return (
    <div className="App">
      
        <PageNavBar id="basic-navbar-nav" className='justify-content-end' />

        {/* <About /> */}
        {/* Make it clickable event with useState visibility */}
        <div className="hero">
        {/* <PageNavbar /> */}
        <div className="image-logo">
          <img src={logo} alt='logo'   />
          {/* just a small image maybe need to make it small */}
        </div>
        {/* <h1>Welcome To The Trivia Quiz!</h1> */}
        
        {/* Need to hide H3 and button once it is clicked */}
        
        {startVisibility ? <>
          <h6 className="font-weight-bold text-center display-6">Click on the Start button to begin the questions!</h6>
          <div className="d-grid gap-2">
          <button className="btn btn-success btn-lg"  onClick={questionVisibility}><h4>Start Quiz</h4></button>
        </div>
        </> : ""
        } 
        {visibleQuestion && <Question testData={testData} setStartVisibility={setStartVisibility} setVisible={setVisible} onClick={questionVisibility} />}
        </div>
    
      <footer className="footer-wrapper">
      <div className="text-center text-white p-3 " variant='dark' bg="dark" >
           <h4>Made By <a href='https://github.com/hal-alex/ga-project-2-trivia' target='_blank'>Alex</a> & <a href='https://github.com/SyztemError/GA-Project-2-Trivia' target='_blank'>Serhan</a>
           
           </h4> 
            {/* variant="dark" */}
    
      </div>
 
    </footer>
    </div>
    
    
  )
}

export default App;



