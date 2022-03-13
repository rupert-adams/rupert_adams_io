import React from 'react';
import { connect } from 'react-redux';
import email_icon from '../media/email.png';
import twitter_icon from '../media/twitter.png';
import medium_icon from '../media/medium.png';


const Contact = (props) => (
    <div className="App-component">
        <h1>{props.name}</h1>
        <p>Feel free to contact me via e-mail or follow me on twitter. If you would like to see some of my earlier technical guides have a look at my medium posts.</p>
        <div className="App-contact">
            <a href="mailto:rupertadams@protonmail.com" className="Link-text">
                <img src={email_icon} alt="email" width="30" height="30" className="Link-image" />
                <p className="Link-text">rupertadams@protonmail.com</p>
            </a>
            <a href="https://www.twitter.com/skull_diggery" className="Link-text" target="_blank">
                <img src={twitter_icon} alt="twitter" width="30" height="30" className="Link-image" />
                <p className="Link-text">@skull_diggery</p>
            </a>
            <a href="https://medium.com/@rupertadams" className="Link-text" target="_blank">
                <img src={medium_icon} alt="medium" width="30" height="30" className="Link-image" />
                <p className="Link-text">@rupertadams</p>
            </a>
        </div>
    </div>
);


const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};


export default connect(mapStateToProps)(Contact)