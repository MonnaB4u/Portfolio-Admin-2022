import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogAll = () => {

    const [data, setData] = useState([])
    // console.log(Projectdata)
    useEffect(() => {
        const url = 'https://afternoon-plains-42822.herokuapp.com/allBlog'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    })


const handleDeleteUser = id => {

        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://afternoon-plains-42822.herokuapp.com/allBlog/${id}`
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
        <div className="row my-5 ">
            {
                data.map((each, index) =>
                   <div className="col-sm">
                        <div class=" text-center flex-warp border m-3">
                        <div className="">
                            <div class="mt-2">
                                <p>{each.title}   <button onClick={() => navigate(`/updateBlog/${each._id}`)} className="mx-2 btn btn-success bg-primary" variant="info">Edit</button> <a type="button" onClick={() => handleDeleteUser(each._id)} className="btn btn-danger mx-2" href="" >Delete</a> </p>

                            </div>
                        </div>

                    </div>
                   </div>
                )
            }
        </div>
    );
};;

export default BlogAll;
