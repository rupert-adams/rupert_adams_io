import React,{ Component }  from 'react';
import { blogData } from '../data/blogData.js';

class Blog extends Component {

    render() {
        return (
            <div className="App-component">
                {blogData.map(post => (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.picture}</p>
                        <p>{post.body}</p>
                        <p>*</p>
                    </div>
                ))}   
            </div>
        );
    }
}

export default Blog