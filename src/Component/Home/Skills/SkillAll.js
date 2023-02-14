import React, { useEffect, useState } from 'react';

const SkillAll = () => {

    const [data, setData] = useState([])
    // console.log(Projectdata)
    useEffect(() => {
        const url = 'https://portfolio2022-database.vercel.app/Skills'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    })


const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed===true) {
            // console.log(proceed)
            const url = `https://portfolio2022-database.vercel.app/Skills/${id}`
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


    return (
        <div className="row my-5">
            {
                data.map((each, index) =>
                    <div class=" col-3 flex-warp">
                        <div className="">
                            <div class="">
                                <p>{each.name}  <a type="button" onClick={() => handleDeleteUser(each._id)} className="btn btn-success bg-success" href="" className="mx-2">Delete</a> </p>

                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default SkillAll;
