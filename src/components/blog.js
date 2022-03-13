import React,{ Component }  from 'react';
import { blogData } from '../data/blogData.js';

class Blog extends Component {

    render() {
        return (
            <div className="App-component">
                {blogData.map(post => (
                    <div>
                        <h1>{post.title}</h1>
                        <img className="App-blog-picture" src={post.picture} alt="blog picture"/>
                        {post.body.map(para => (
                            <p className="App-blog-para">{para}</p>
                        ))}
                        <p>***</p>
                    </div>
                ))}   
            </div>
        );
    }
}

export default Blog