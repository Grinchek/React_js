import './style.css';
import React, { useState } from 'react';
import logo from './images/Aivengo.JPG';

const Restaurant = () => {
    const [comments, setComments] = useState([]);

    const addComment = () => {
        const text = document.getElementById('CommentText').value.trim();
        if (text) {
            setComments([...comments, text]);
            document.getElementById('CommentText').value = '';
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Aivengo Restaurant</h1>
            </header>
            <div className="C-wraper">
                <div className="C-decription">
                    <img src={logo} alt="" width={300} height={300} />
                    <ul className="C-info">
                        <li>Aivengo</li>
                        <li>Address: Kolodenka Zelena str #53</li>
                        <li>Kitchen type: European</li>
                    </ul>
                </div>
                <div className="CommentField">
                    <h2>Comments</h2>
                    <div>
                        <h3>Add your comment</h3>
                        <textarea id="CommentText"></textarea>
                        <button className="Button" onClick={addComment}>Add</button>
                        <div id="CommentList">
                            {comments.map((text, index) => (
                                <>
                                    <p className='Comment' key={index}>{text}</p>
                                </>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;