import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "./redux/actions";

export default function Form() {
    const loginData = useSelector(state=>state.UserReducers)
    console.log(loginData);

    const [formData, setFormdata]=useState({
        email: "",
        password: "",
        type:""
    })

    const dispatch = useDispatch()

    const oninputChange=(e)=>{
        setFormdata({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(updateForm(formData))
    }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" type="email" value={formData.email} onChange={oninputChange} name="email" />
      <input placeholder="password" type="password" value={formData.password} onChange={oninputChange} name="password" />
      <select value={formData.type} onChange={oninputChange} name="type">
        <option value={1}>basic</option>
        <option value={2}>advance</option>
        <option value={3}>premium</option>
        <option value={4}>admin</option>
      </select>
      <button type="submit" >Submit</button>
    </form>
  );
}
