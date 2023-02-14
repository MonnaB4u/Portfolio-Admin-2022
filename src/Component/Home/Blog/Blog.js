import React, { useRef } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BlogAll from './BlogAll';

const Blog = () => {

    const nameRef = useRef();
    const nameIMG = useRef();
    const nameLink = useRef();

    const handleUser = e => {
        const title = nameRef.current.value;
        const img= nameIMG.current.value;
        const view = nameLink.current.value
        const newProject = { title, img, view}
        console.log(newProject);

        fetch('https://portfolio2022-database.vercel.app/addBlog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProject)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User Inserted Successfully')
                    e.target.reset() //for clear form input
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="container text-center">
                <div className="row mt-5 p-5">

                    <div className="col-md-">
                        <div className='mt-5'>
                            <h2> Add New Blog</h2>
                            <form className='mt-5 border' action="" onSubmit={handleUser}>
                                <div class="row w-75 m-5">

                                    <div class="col-md mb-3">
                                        <div class="form-group">
                                            <input type="text" name="title" class="form-control" id="title" placeholder="Blog Name" ref={nameRef} required />
                                             <input type="text" name="img" class="form-control my-3" id="img" placeholder="Image Link" ref={nameIMG} required />
                                              <input type="text" name="view" class="form-control" id="view" placeholder="Blog Link" ref={nameLink} required />
                                        </div>
                                    </div>

                                    <div class="col-md- text-center ">
                                        <button type="submit" class="btn btn-primary mt-4">Send to Db</button>
                                    </div>
                                </div>

                            </form>


                        </div>
                        <BlogAll></BlogAll>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blog;
