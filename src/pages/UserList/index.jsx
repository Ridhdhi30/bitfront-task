import React, { useEffect, useState } from "react";
import "./index.css"
import apiServices from "../../services/apiServices";
import { useNavigate } from "react-router-dom";
const UserList =()=>{
    const navigate = useNavigate()
    const [userdata,setUserData]=useState([])
    useEffect(() => {
        userListData()
      }, []);
      const userListData = async() =>{
        const res = await apiServices.getUserProfile()
        setUserData(res)
      }
      const handleUserAlbums = (id)=>{
        navigate(`/albums/${id}`)
      }
    return(
        <>
        <div>
        <h2>Users</h2>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>website</th>
                        <th>company</th>
                        <th>address</th>
                    </tr>
                    </thead>
                    <tbody>
                        {userdata?.map((user,index)=>(
                            <tr key={index} style={{cursor:"pointer"}} onClick={()=>handleUserAlbums(user.id)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company?.name}</td>
                                <td>{user.address?.city}</td>

                            </tr>
                        ))}
                    
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default UserList;