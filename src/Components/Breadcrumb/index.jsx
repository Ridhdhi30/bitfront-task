import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

// const breadcrumbs = {
//   backgroundColor: "white",
//   border: "1px solid lightgray",
//   borderRadius: "0.37rem",
// };
// const navbarBack = {
//   width: "30%",
//   padding: "20px",
// };

function Breadcrumbs(props) {
  const [path, setPath] = useState([]);
  const [userId, setUserId] = useState([]);
  const [albumId, setAlbumId] = useState([]);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('albums')) {
      setUserId(location.pathname[location.pathname.length - 1])
      setPath([{
        name: 'albums',
        path: '/albums/'+ userId
      }])
    }
    else if (location.pathname.includes('photos')) {
      console.log(location.pathname[location.pathname.length - 3])
      setAlbumId(location.pathname[location.pathname.length - 1])
      setUserId(location.pathname[location.pathname.length - 3])
      setPath([{
        name: 'albums',
        path: '/albums/'+ userId
      },{
        name: 'photos',
        path: '/photos/'+ userId + '/' + albumId
      }])
    }
    else setPath([])
    console.log(path)
  }, [location.pathname]);
  return (
    <div className="m-2 mt-4 card rounded-2 shadow ">
      <nav aria-label="breadcrumb ">
        <ol className="d-flex justify-content-start align-content-center h-100 breadcrumb">
          <li className="px-2 breadcrumb-item">
            <Link
              to={``}
              className="text-decoration-none fw-bold breadcrumb-item-color"
            >
              Home
            </Link>
          </li>
          {path.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              <Link
                to={item.path}
                className="text-decoration-none fw-bold breadcrumb-item-color"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;
