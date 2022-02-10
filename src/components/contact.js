import React from 'react';
import { connect } from 'react-redux';

const Contact = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>This is a test</p>
    </div>
);


const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};


export default connect(mapStateToProps)(Contact)