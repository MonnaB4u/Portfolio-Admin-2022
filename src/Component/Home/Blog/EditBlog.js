import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const EditBlog = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})

    console.log(user)
    useEffect(() => {
        const url = `https://portfolio2022-database.vercel.app/allBlog/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    console.log(user)

    const handleNameChange = e => {
        const updateName = e.target.value
        const updateUser = { title: updateName, img: user.img, view: user.view };
        setUser(updateUser)
    }

    const handleImageChange = e => {
        const updateImage = e.target.value
        const updateUser = { title: user.title, img: updateImage, view: user.view };
        setUser(updateUser)
    }

    const handleLinkChange = e => {
        const updateLink = e.target.value
        const updateUser = { title: user.title, img: user.img, view: updateLink };
        setUser(updateUser)
    }

    const handleUpdateuser = e => {
        const url = `https://portfolio2022-database.vercel.app/allBlog/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    setUser({});
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="my-5 container">
                <div className="row mt-5 p-5">

                </div>
                <h1>This is Update:  {id}</h1>

                {
                    user.length === 0 ?
                        <div className=" ">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only w-75 h-75"></span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-sm-3 border-right ">
                                <img src={user.img} className="img-fluid" alt="" />
                            </div>
                            <div className="col-sm-6 col-md-7">
                                <p className="h4">Name: {user.title}</p>
                                <p><span className="h4">Link: </span><span>{user.view}</span></p>
                                <p><span className="h4">Image: </span><span>{user.img}</span></p>
                            </div>
                        </div>
                }


                <form className='' action="" onSubmit={handleUpdateuser}>

                    <div class="row w-75">

                        <div class="col-md mb-3">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Project Name" onChange={handleNameChange} value={user.title || ''} />
                            </div>
                        </div>

                        <div class="col-md- mb-3">
                            <div class="form-group">
                                <input type="text" class="form-control" name="img" id="link" placeholder="Project Link" onChange={handleImageChange} value={user.img || ''} />
                            </div>
                        </div>


                        <div class="col-md- mb-3">
                            <div class="form-group">
                                <input type="text" class="form-control" name="view" id="view" placeholder="Project Link" onChange={handleLinkChange} value={user.view || ''} />
                            </div>
                        </div>




                        <div class="col-md- text-center ">
                            <button type="submit" class="btn btn-primary mt-4">Update Project</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>

    );
};

export default EditBlog;
