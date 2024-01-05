import React, { useEffect, useState } from "react";
import apiServices from "../../services/apiServices";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const AlbumList = () => {
  let { albumId } = useParams();
  const navigate = useNavigate();
  const [userAlbumData, setUserAlbumData] = useState([]);
//   const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    handleAlbumData();
  }, []);

  const handleAlbumData = async () => {
    const res = await apiServices.phtotoList(albumId);
    setUserAlbumData(res);
  };

  return (
    <>
      <h2>Photos</h2>
      <div className="row">
      {userAlbumData?.map((album, index) => (
        <div className="col-3 col-lg-4 col-sm-6 col-12" key={index}>
            <div className="card-container">
                    <div className="card-image">
                     <img src={album.thumbnailUrl} alt={album.title} />
                    </div>
                    <div className="card-content">
                     <h3>{album.title}</h3>
                      <p>Photo ID: {album.id}</p>
                    </div>
           </div>
        </div>
        ))}
      </div>
      
    </>
  );
};

export default AlbumList;
