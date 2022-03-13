import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PersonaButton from './personaButton.js'

const Header = (props) => (
    <div className="App-header-div">
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" />
            <PersonaButton className="App-button" persona={props} />
            <div className="App-header-persona">
                <h1 className="App-header-persona-element">{props.name}</h1>
                <h1 className="App-header-persona-element">X</h1>
                <h1 className="App-header-persona-element">{props.job}</h1>
            </div>
            <p className="App-header-break">-</p>
            <div className="App-header-nav">
                <NavLink className="App-link" to='/'>Home</NavLink>
                <NavLink className="App-link" to='/blog'>Blog</NavLink>
                <NavLink className="App-link" to='/contact'>Contact</NavLink> 
            </div>
        </header>
    </div>
);

const mapStateToProps = (state) => {
    return {
        logo: state.logo,
        name: state.name,
        job: state.job,
        button: state.button
    };
};

export default connect(mapStateToProps)(Header)

// class Header extends Component {

//     render() {
//         return (
//             <div>
//                 <header className="App-header">
//                     <img src={this.state.logo} className="App-logo" alt="logo" />
//                     <PersonaButton persona={this.state} />
//                     <h1>{this.state.name}</h1>
//                     <h1>X</h1>
//                     <h1>{this.state.job}</h1>
//                     <NavLink to='/'>Home</NavLink>
//                     <NavLink to='/blog'>Blog</NavLink>
//                     <NavLink to='/contact'>Contact</NavLink>
//                 </header>
//             </div>
//         );
//     }
// }

// export default Header