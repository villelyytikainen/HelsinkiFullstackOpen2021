import React from 'react';
import './Notification.css';

export default function Notification({message,color}) {
    let messageColor = null;

    message.includes('error') ? messageColor = 'red' : messageColor = 'green'

    return message === '' ? null  : (
        <div className="notification" style={{border:`4px solid ${messageColor}`, color:`{${messageColor}`}}>
            {message}
        </div>
    )
}
