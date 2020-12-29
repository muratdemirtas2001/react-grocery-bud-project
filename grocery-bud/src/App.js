import React, { useState, useEffect } from 'react'
import List from './list'
import Alert from './alert'

function App() {
  const [name,setName]=useState("");
  const [list,setList]=useState("[]");
  const [isEditing,setIsEditing]=useState(false);
  const [editID,setEditID]=useState(null);
  const [alert,setAlert]=useState({show:true, msg:"", type:""})

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("hello")
  }

  return <section className="section-center">
    <div className="grocery-container">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert/> }
        <h3>grocery-bud </h3>
        <div className="form-control">
          <input type="text"/>
          <button type="submit" className="submit-btn">
            {isEditing? "edit" :"submit"}
          </button>
        </div>
      </form>
      <List />
      <button className="clear-btn"> clear items</button>

    </div>

  </section>
}

export default App