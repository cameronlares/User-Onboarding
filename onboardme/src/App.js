import React, { useState } from 'react';
import './App.css';
import Form from './Form'
// 🔥 STEP 1- CHECK THE ENDPOINTS USING POSTMAN OR HTTPIE
// 🔥 STEP 2- FLESH OUT FriendForm.jsx
// 🔥 STEP 3- FLESH THE SCHEMA IN ITS OWN FILE
// 🔥 STEP 4- IMPORT THE SCHEMA, AXIOS AND YUP
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as Yup from 'yup'
import { Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';


const initialForm = {
  name: '',
  email: '',
  password: '',
  termsofservice: false
}

const initialError = {
  name: '',
  email: '',
  password: '',
  termsofservice: false
}

const initialDisabled = true


const Dummy = {
  
    name: "Cameron",
    email: "cameron@gmail.com",
    password: "cameron123",
    termsofservice: "true"

}




function App() {

  const [form, setForm] = useState(initialForm) //Initial Form
  const [users, setUsers] = useState([]) 
  const [error, setError] = useState(initialError)
  const [disabled, setDisabled] = useState(initialDisabled)


  const onChange = e => {
    const {name, value } = e.target

    Yup.reach(formSchema, name)
    .validate(value)
    .then(()=>{
      setError({...error, [name]: "" }) //  This is an object
    })
    .catch(err=>{
      setError({...error, [name]: err.error[0] })
    })
setForm({...form,  [name]: value}) //The Magic 
    
  }

  const onCheck = e => {
    const {name, checked } = e.target
    setForm({...form, [name]: checked}) //The Magic 
    
  }

  const onSubmit = e => {
    e.preventDefault()
    axios.post("https://reqres.in/api/users", form )
  .then(res=>{
    console.log(res.data)
    setUsers(res.data) // Response of the data
  })
  .catch(err=>console.log(err)) //Axios is executed

  }

  

  return (
    <div className="App">
      <Form form={form} onChange={onChange} onCheck= {onCheck} onSubmit = {onSubmit}/>
  
  <div>
  <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Users</CardTitle>
          <CardText>
            Name: {users.name}
            Email: {users.email}
            Password:{users.password}
            Terms of Service: {JSON.stringify(users.termsofservice)}

          </CardText>

        </Card>
      </Col>
  
        
    </Row>
  </div>

    </div>
  );
}

export default App;
