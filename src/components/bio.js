import React from 'react';
import { connect } from 'react-redux';

const Bio = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
    </div>
);


const mapStateToProps = (state) => {
    return {
        name: state.name,
        bio: state.bio.bio
    };
};


export default connect(mapStateToProps)(Bio)