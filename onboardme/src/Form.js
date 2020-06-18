import React, { useReducer } from 'react';

export default function Form(props){




 
 const {
     form,
     onChange,
     onCheck,
     onSubmit,
     disabled
 } = props

 


//Name
//Readme
//Email
//Password
//Checkbox Terms of Service
//Submit

return (
    <form onSubmit = {onSubmit}> 
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={form.name} onChange={onChange} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={form.email} onChange={onChange} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={form.password} onChange={onChange}/>

        <label htmlFor="termsofservice">Terms of Service</label>
        <input type="checkbox" name="termsofservice" id="termsofservice" checked = {form.termsofservice} onChange = {onCheck} />
        
        
        <button>Submit</button>
    </form>
)
}
