import React from 'react';
import { connect } from 'react-redux';

const Bio = (props) => (
    <div className="App-component">
        <h1>{props.name}</h1>
        {props.bio.map(para => (
            <p className="App-bio-para">{para}</p>
        ))}
        <div className="App-bio-list">
            {Object.entries(props.persona_set).map(([key, value]) => (
                <div>
                    <img src={value} className="App-bio-list-item" />
                    <p className="App-bio-list-item" >{key}</p>
                </div>
            ))}
        </div>
    </div>
);


const mapStateToProps = (state) => {
    return {
        name: state.name,
        bio: state.bio.bio,
        persona_set: state.bio.persona_set
    };
};


export default connect(mapStateToProps)(Bio)