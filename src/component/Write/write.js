import './write.css'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
    const [value, setValue] = useState('');
    return(
     <div className="writeW">
        <div className="contentWrite">
            <input type='text' placeholder='Title'/>
            <div className='editContainer'>
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
            </div>
        </div>
        <div className="menuW">
        <div className="itemW">
            <h1>Publish</h1>
            <span><b>Status: </b>Draft</span>
            <span><b>Visibility: </b>Public</span>
            <input style={{display:'none'}} type='file' name='' id='file'/>
            <label htmlFor='file' className='fileW'>Upload Image</label>
            <div className='buttonW'>
                <button className='first-child' >Sve as a draft</button>
                <button className='last-child'>Update</button>
            </div>
        </div>
        <div className="item">
            <h1>Category</h1>
            <div className='cat'>
            <input type='radio' name='cat' value='art' id='art'/>
            <label htmlFor='art'>Art</label>
            </div>
            <div className='cat'>
            <input type='radio' name='cat' value='science' id='science'/>
            <label htmlFor='science'>Science</label>
            </div>
            <div className='cat'>
            <input type='radio' name='cat' value='technology' id='technology'/>
            <label htmlFor='technology'>Technology</label>
            </div>
            <div className='cat'>
            <input type='radio' name='cat' value='cinema' id='cinema'/>
            <label htmlFor='cinema'>cinema</label>
            </div>
            <div className='cat'>
            <input type='radio' name='cat' value='design' id='design'/>
            <label htmlFor='design'>Design</label>
            </div>
            <div className='cat'>
            <input type='radio' name='cat' value='food' id='food'/>
            <label htmlFor='food'>Food</label>
            </div>
        </div>
        </div>
     </div>
    ) 
}
export default Write