import React, { useRef } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AchivementAll from './AchivementAll';

const Achivement = () => {
    const nameRef = useRef();
    const detailsRef = useRef();
    const ImgRef = useRef();

    const handleUser = e => {
        const name = nameRef.current.value;
        const img = ImgRef.current.value;
        const details = detailsRef.current.value;

        const newProject = { img, name, details }
        console.log(newProject);

        fetch('https://afternoon-plains-42822.herokuapp.com/addAchivement', {
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
            <div className="container">
                <div className="row mt-5 p-5">

                    <div className="col-md-">
                        <div className='mt-5 text-center'>
                            <h2>  Achiment</h2>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="border-bottom w-25 text-bottom border-info"></div>
                            </div>
                            <form className='' action="" onSubmit={handleUser}>
                                <div class="row w-75">

                                    <div class="col-md mb-3">
                                        <div class="form-group">

                                            <input type="text" name="name" class="form-control " id="name" placeholder="Acviment Name" ref={nameRef} required />
                                            <input type="text" name="img" class="form-control my-3" id="img" placeholder="Acviment Image" ref={ImgRef} required />
                                            <input type="text" name="details" class="form-control" id="details" placeholder="Acviment Details" ref={detailsRef} required />
                                        </div>
                                    </div>

                                    <div class="col-md- text-center ">
                                        <button type="submit" class="btn btn-primary mt-4">Send to Db</button>
                                    </div>
                                </div>

                            </form>


                        </div>
                        <AchivementAll></AchivementAll>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Achivement;
