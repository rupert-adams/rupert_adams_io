import React,{ Component }  from 'react';
import { Link } from 'react-router-dom';
import { fourOhFourData } from '../data/fourOhFourData.js';



class notFound extends Component {

    render() {
        return (
            <div>
                <h1>404</h1>
                {fourOhFourData.map((message) => (
                    <div>
                        <h2>{message.errTitle}</h2>
                        <p>{message.errMessage}</p>
                        <Link className="App-button" to='/' >{message.goHomeButton}</Link>
                    </div>
                ))[Math.floor(Math.random()*fourOhFourData.length)]}
            </div>
        );
    }
}

export default notFound