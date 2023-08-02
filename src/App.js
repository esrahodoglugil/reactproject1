import './App.css'
import Form from './components/form/Form'
import Input from './components/input/Input'
import Button from './components/button/Button'
import {useState} from 'react'
function App() {
  const[user,setUser]=useState({name:"", password:""})
  const handleChange=(e)=>{
    if(e.target.type==="text"){
      setUser({...user,name:e.target.value});
      console.log(user);
    }
    else if(e.target.type==="password"){
      setUser({...user,password:e.target.value});
      console.log(user);
    }
  }
  const handleClick=()=>{
    if(user.name===""){
      alert("Kullanıcı Adı boş geçilemez")
    }
    else if(user.password===""){
      alert("Şifre boş geçilemez")
    }
    else{
      alert("Kullanıcı adı: " + user.name + "Şifre: " + user.password)
    }
  }
  return(
    <div className='App'>
      <h2>Giriş Formu</h2>
      <Form>
      <Input type={"text"} value={user.name} placeHolder={"Kullanıcı Adı"} onChange={handleChange}/>
      <Input type={"password"} placeHolder={"Şifreniz"} value={user.password} onChange={handleChange}/>
      <Button onClick={handleClick}/>
      </Form>
    </div>
  );
}
export default App;
