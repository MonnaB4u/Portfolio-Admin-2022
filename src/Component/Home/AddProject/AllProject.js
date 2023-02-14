import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllProject = () => {

    const [Projectdata, setData] = useState([])
    // console.log(Projectdata)
    useEffect(() => {
        const url = 'https://portfolio2022-database.vercel.app/projectCollection'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    })

    const handleDeleteUser = id => {

        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://portfolio2022-database.vercel.app/projectCollection/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(datas => {
                    if (datas.deletedCount > 0) {
                        alert('Deleted Successfully')

                        const remaining = Projectdata.filter(user => user._id !== id)
                        setData(remaining)
                    }
                })
        }
    }



    const navigate = useNavigate()
    return (
        <div>
            <h2 className="text-center  ">All Projects</h2>
            <div className="d-flex justify-content-center mb-4">
                <div className="border-bottom w-25 text-bottom border-info"></div>
            </div>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Images</th>
                            <th scope="col">Name</th>
                            <th scope="col" >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Projectdata.map(users =>

                                <tr>
                                    <th class="col-2">{users._id}</th>
                                    <td class="border col-2"> <img src={users.img} className="img-fluid " alt="" /> </td>
                                    <td class=" border">{users.name}</td>

                                    <td>
                                        <button onClick={() => handleDeleteUser(users._id)} className="btn btn-danger bg-danger">Delete</button>
                                        <button onClick={() => navigate(`/update/${users._id}`)} className="mx-2 btn btn-success bg-primary" variant="info">Edit</button>
                                        <a href={users.link} className="btn btn-success bg-success">See</a>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>

                </table>
                {
                    Projectdata.length === 0 &&
                    <div className=" ">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only w-75 h-75"></span>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    );
};

export default AllProject;
