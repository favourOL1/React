import Button from "./Button/Button"
import ButtonInline from "./Components/ButtonInline"
import Card from "./Components/Card"
import Food from "./Components/Food"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Student from "./Components/Student"

function App() {

  return (
    <>
      {/* <Header/>
      <Food/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> 
      <Button/>
      <ButtonInline/>
      <Footer/> */}
      <Student name = "Favour" age = {30} isStudent = {true}/>
      <Student name = "Patrick" age = {42} isStudent = {false}/>
      <Student name = "Jerry" age = {46} isStudent = {false}/>
      <Student name = "john" age = {23} isStudent = {true}/>
      <Student/>
    </>
  )
}

export default App
