import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './ChatInput.css'

const ChatInput = props => {
    const [enteredMessage, setEnteredMessage] = useState('');

    const [message, setMessage] = useState([]);
    console.log(enteredMessage)

    const sendMessageHandler = () => {
        setMessage(currentMessages => [...currentMessages,
            { 
                id: Math.random().toString(), 
                user: 'You', 
                content: enteredMessage, 
                reaction: '' }])

        console.log(message);
        setEnteredMessage('');
        
    }

    const [checked, setChecked] = useState(false);

    const checkedHandler = () => {
        setChecked(!checked);
    }



    return (
        <div style={{marginBottom:'260px'}}>
            {message.map(msg =>

                <div id="messageTab" className='column bg-dark text-white p-2 m-1 rounded w-50'>
                    <p id="userName" className="ml-3">{msg.user}</p>
                    <p>{msg.content}</p>

                    <div id="notification">

                        {checked == false ?
                            <div className="row mw-100 ml-0">
                                <p className="col-10 mb-0 pl-2">dd/mm/aaaa  hh:mm:ss</p>
                                <p className="col-2 mb-0" >llego</p>
                            </div> :
                            <div className="row mw-100  ml-0">
                                <p className="col-10 mb-0 pl-2">dd/mm/aaaa  hh:mm:ss</p>
                                <p className="col-2 mb-0" >lei </p>
                            </div>}

                       
                    </div>

                        {/*<Button onClick={checkedHandler}>Notif</Button>*/}
                </div>


            )}
            <div className="input">
                <footer style={{ marginTop:"10px"}}>
                <div style={{display:'flex', justifyContent:'flexStart', marginBottom:10}}>
                    <input size="59" onChange={event=>setEnteredMessage(event.target.value)}></input><Button onClick={sendMessageHandler}>Enviar</Button>
                </div>
                   
                </footer>
            </div>
            
        </div>
    );
};

ChatInput.propTypes = {

};

export default ChatInput;