import React, { useRef } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AllProject from './AllProject';


const AddProject = () => {

    const nameRef = useRef();
    const pLinkRef = useRef();
    const pImgRef = useRef();
    const detailsRef = useRef();
    const technologyRef = useRef();

    const handleUser = e => {
        const name = nameRef.current.value;
        const link = pLinkRef.current.value;
        const img = pImgRef.current.value;
        const details = detailsRef.current.value;
        const tecnology = technologyRef.current.value;

        const newProject = { name, link, img, details, tecnology }
        console.log(newProject);

        fetch('https://afternoon-plains-42822.herokuapp.com/addProjects', {
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
        <div className="container">
            <div className="row">

                <div className="col-md-">
                    <div className='mt-5 p-5 text-center'>
                        <h2 className=""> Add Project</h2>
                        <div className="d-flex justify-content-center mb-4">
                            <div className="border-bottom w-25 text-bottom border-info"></div>
                        </div>
                        <form className='' action="" onSubmit={handleUser}>
                            {/* <input type="text" ref={nameRef} />
                            <input className="mx-5  " type="email" name='' ref={eamilRef} />
                            <input type="submit" value="Add" /> */}

                            <div class="row w-75">

                                <div class="col-md mb-3">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Project Name" ref={nameRef} required />
                                    </div>
                                </div>

                                <div class="col-md- mb-3">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="link" id="link" placeholder="Project Link" ref={pLinkRef} required />
                                    </div>
                                </div>



                                <div class="col-md-">
                                    <div class="form-group">
                                        <textarea class="form-control" name="details" rows="2" placeholder="Project Details" ref={detailsRef} required></textarea>
                                    </div>
                                </div>

                                <div class="col-md- mt-3">
                                    <div class="form-group">
                                        <textarea class="form-control" name="tecnology" rows="2" placeholder="Project Technology" ref={technologyRef} required></textarea>
                                    </div>
                                </div>

                                <div class="col-md- mb-3">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="img" id="img" placeholder="Project Image Link" ref={pImgRef} required />
                                    </div>
                                </div>

                                <div class="col-md- text-center ">
                                    <button type="submit" class="btn btn-primary mt-4">Send Project</button>
                                </div>
                            </div>

                        </form>


                    </div>
                    <div className="my-5">
                        <AllProject></AllProject>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddProject;
