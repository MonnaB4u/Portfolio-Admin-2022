import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AchivementAll = () => {
    const [data, setData] = useState([])
    // console.log(Projectdata)
    useEffect(() => {
        const url = 'https://afternoon-plains-42822.herokuapp.com/allAchivement'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    })

    const handleDeleteUser = id => {

        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://afternoon-plains-42822.herokuapp.com/allAchivement/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(datas => {
                    if (datas.deletedCount > 0) {
                        alert('Deleted Successfully')

                        const remaining = data.filter(user => user._id !== id)
                        setData(remaining)
                    }
                })
        }
    }
    const navigate = useNavigate()

    return (
        <div className="row my-5">
            {
                data.map((each, index) =>
                    <div className="col-sm">
                        <div class=" border  m-3 flex-warp">
                            <div className="">
                                <div class="mt-3">
                                    <p>{each.name} <button onClick={() => navigate(`/Editachivment/${each._id}`)} className="mx-2 btn btn-success bg-primary" variant="info">Edit</button>  <a type="button" onClick={() => handleDeleteUser(each._id)} className="btn btn-danger mx-2" href="">Delete</a> </p>

                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AchivementAll;
