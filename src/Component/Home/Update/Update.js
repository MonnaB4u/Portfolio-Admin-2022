import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Update = () => {

    const { id } = useParams()


    const [user, setUser] = useState({})

    console.log(user)
    useEffect(() => {
        const url = `https://portfolio2022-database.vercel.app/projectCollection/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    console.log(user)
    const handleNameChange = e => {
        const updateName = e.target.value
        const updateUser = { name: updateName, link: user.link, details: user.details, technology: user.technology, img: user.img };
        setUser(updateUser)
    }

    const handleLinkChange = e => {
        const updateLink = e.target.value
        const updateUser = { name: user.name, link: updateLink, details: user.details, technology: user.technology, img: user.img };
        setUser(updateUser)
    }

    const handleGitLinkChange = e => {
        const gitLink = e.target.value
        const updateUser = { name: user.name, link: user.link, gitLink: gitLink , details: user.details, technology: user.technology, img: user.img };
        setUser(updateUser)
    }

    const handleDetailsChange = e => {
        const updateDetails = e.target.value
        const updateUser = { name: user.name, link: user.link, details: updateDetails, technology: user.technology, img: user.img };
        setUser(updateUser)
    }

    const handleTechnonogyChange = e => {
        const updateTechnology = e.target.value
        const updateUser = { name: user.name, link: user.link, details: user.details, technology: updateTechnology, img: user.img };
        setUser(updateUser)
    }

    const handleImageChange = e => {
        const updateImage = e.target.value
        const updateUser = { name: user.name, link: user.link, details: user.details, technology: user.technology, img: updateImage };
        setUser(updateUser)
    }

    const handleUpdateuser = e => {
        const url = `https://portfolio2022-database.vercel.app/projectCollection/${id}`;
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
             <Sidebar />

              <div className="my-5 container">
            <div className="row mt-5 p-5">
            </div>
            <h1>This is Update{id}</h1>

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
                            <p className="h4">Name: {user.name}</p>
                            <p><span className="h4">Link: </span><span>{user.link}</span></p>
                            <p><span className="h4">Details: </span> <span>{user.details}</span></p>
                            <p><span className="h4">Technology: </span> <span>{user.tecnology}</span></p>
                            <p><span className="h4">Image: </span><span>{user.img}</span></p>
                               <p><span className="h4">Git Link: </span>{user.gitLink === undefined ? <span>Coming Soon </span> : <span>{user.gitLink}</span>} </p>
                        </div>
                    </div>
            }


            <form className='' action="" onSubmit={handleUpdateuser}>

                <div class="row w-75">

                    <div class="col-md mb-3">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Project Name" onChange={handleNameChange} value={user.name || ''} />
                        </div>
                    </div>

                    <div class="col-md- mb-3">
                        <div class="form-group">
                            <input type="text" class="form-control" name="link" id="link" placeholder="Project Link" onChange={handleLinkChange} value={user.link || ''} />
                        </div>
                    </div>

                    <div class="col-md- mb-3">
                        <div class="form-group">
                            <input type="text" class="form-control" name="gitLink" id="gitLink" placeholder="Git Hub Link" onChange={handleGitLinkChange} value={user.gitLink || ''} />
                        </div>
                    </div>



                    <div class="col-md-">
                        <div class="form-group">
                            <textarea class="form-control" name="details" rows="2" placeholder="Project Details" onChange={handleDetailsChange} value={user.details || ''} ></textarea>
                        </div>
                    </div>

                    <div class="col-md- my-3">
                        <div class="form-group">
                            <textarea class="form-control" name="tecnology" rows="2" placeholder="Project Technology" onChange={handleTechnonogyChange} value={user.tecnology || ''} ></textarea>
                        </div>
                    </div>

                    <div class="col-md- mb-3">
                        <div class="form-group">
                            <input type="text" class="form-control" name="img" id="img" placeholder="Project Image Link" onChange={handleImageChange} value={user.img || ''} />
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

export default Update;
