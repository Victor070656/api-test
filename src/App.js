import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  const register = (e) =>{
    e.preventDefault()
  }

  const handleSubmit = () => {
    if (name === "") {
      alert('Name is empty!')
    } else if (email === "") {
      alert('Email is empty!')
    } else {
      const url = 'http://localhost/apitest/index.php'

      let fData = new FormData();
      fData.append('name', name);
      fData.append('email', email);

      axios.post(url, fData)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

  }
  return (
    <div>
      <form action="" method="post" className='form'>
        <label htmlFor="">name</label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value) } />
        <label htmlFor="">email</label>
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value) } />
        <input type="submit" onClick={handleSubmit} onSubmit={register}/>
      </form>
    </div>

  );
}

export default App;
