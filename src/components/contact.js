import React from 'react';
import { connect } from 'react-redux';
import email_icon from '../media/email.png';
import twitter_icon from '../media/twitter.png';


const Contact = (props) => (
    <div className="App-component">
        <h1>{props.name}</h1>
        <a href="mailto:rupertadams@protonmail.com" className="Link-text">
            <img src={email_icon} alt="email" width="30" height="30" className="Link-image" />
            <p className="Link-text">rupertadams@protonmail.com</p>
        </a>
        <a href="https://www.twitter.com/skull_diggery" className="Link-text" target="_blank">
            <img src={twitter_icon} alt="twitter" width="30" height="30" className="Link-image" />
            <p>@skull_diggery</p>
        </a>
    </div>
);


const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};


export default connect(mapStateToProps)(Contact)