import React, { useEffect, useState } from "react";
import apiServices from "../../services/apiServices";
import { Link, useNavigate, useParams } from "react-router-dom";
const UserAlbum = ()=>{
    let { userId } = useParams();
    const navigate = useNavigate()
    const[userAlbumData,setUserAlbumData]=useState([])
    useEffect(()=>{
        handleAlbumData()
    },[])
    const handleAlbumData = async() => {
        const res = await apiServices.albumsData(userId)
        // const filterData = res.filter((album) => album.userId == userId);
        setUserAlbumData(res)
        console.log("filterData:::",res)
    }
return(
    <>
    <h2>Albums</h2>
    <div className="row">
    {userAlbumData?.map((album, index) => (
        <div className="col-lg-4 col-sm-6 col-12" key={index}>
            <div className="card-container">
                <Link key={album.id} to={`/photos/${userId}/${album.id}`} className="card">
                    <div className="card-content">
                     <h3>{album.title}</h3>
                      <p>Album ID: {album.id}</p>
                    </div>
                </Link>
           </div>
        </div>
        ))}
        </div>
    </>
)
}
export default UserAlbum