import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './LoginFormStyle.css';
import Logo from '../../assets/pipiLogo.png';
import ChatScreen from '../ChatScreen/ChatScreen.jsx';
  
const LoginForm = props => {
 
    const [enteredEmail, setEnteredEmail]=useState('');
    const [enteredPassword, setEnteredPassword]=useState('');
    const[withEmail,setEmail]=useState(false)
 
    //console.log(enteredEmail,enteredPassword)
 
    const emailHandler = ()=>{
        if(enteredEmail !=('')){
            setEmail(!withEmail);
        }
    }
 
    const submitHandler =event=>{
        event.preventDefault();
        /*  */
    }

    return (
       
        <div className="pantalla">
            <img src={Logo} style={{borderRadius:'50%', height:'40vh'}} alt='' />
            
            <div className="LoginForm">
                <p className="LogoTitle">PIPI CHAT ™</p>
                <Form onSubmit={submitHandler} style={{display:'flex',flexDirection:'column'}}>
 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" value={enteredEmail}
                        onChange={event=>{setEnteredEmail(event.target.value)}}/>
                    </Form.Group>
 
                    {withEmail===false ?  <> 
                        
                        <div className="btn" onClick={()=>emailHandler()}><p>Send Me Code</p></div>
                       </> : 
                    <>  <Form.Group controlId="formBasicPassword">
                            <Form.Label>Security Code</Form.Label>
                            <Form.Control type="password" placeholder="Insert Security Code" value={enteredPassword}  
                                onChange={event=>{setEnteredPassword(event.target.value)}} />
                        </Form.Group>
                        <div>
                        <Link to={"/chat"} > <div style={{display:'flex',flexDirection:'column'}}>
                        <div className="btn" style={{textAlign:'center'}}><p>Log In</p></div>
                        </div>
                            
                        </Link>
                        </div>                        
                    </>}
                </Form>
            </div>
        </div>            
    );
};
 
LoginForm.propTypes = {
    
};
 
export default LoginForm;