import React, { useState,useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../js/action/authActions";

const Register = (props) => {
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role:"",
    code:""
  });

  const handleFormChange = (e) =>{
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleConfim = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  useEffect(() => {
   
    if (isAuth){
      alert("register secucess")
    history.push("/dashboard")}
    
  })

  return (
<div className="login-form">
    <form >
        <h2 className="text-center">Sign up</h2> 
        <div className="form-group">
            <input type="text" name="firstName" className="form-control" placeholder="firstName" required="required"
            onChange={handleFormChange}/>
        </div> 
        <div className="form-group">
            <input type="text" name="lastName" className="form-control" placeholder="lastName" required="required"
            onChange={handleFormChange}/>
        </div>        
        <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder="email" required="required"
            onChange={handleFormChange}/>
        </div>
        <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" required="required"
            onChange={handleFormChange}/>
        </div>
        <div className="form-group">
            <input type="text" name="role" className="form-control" placeholder="role : client/artisan/admin" required="required"
            onChange={handleFormChange}/>
        </div>
        <div className="form-group">
            <input type="password" name="code" className="form-control" placeholder="type secret code if you are admin" required="required"
            onChange={handleFormChange}/>
        </div>   
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={handleConfim}>Sign up</button>
        </div>
         
    </form>
  
</div>
  );
};

export default Register;