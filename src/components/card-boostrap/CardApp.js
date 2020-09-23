import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export const CardApp = ({
  title,
  id,
  descripcion,
  urlImg,
  urlVideoState,
  user,
  newDate,
}) => {
  //substr(0, 2).toUpperCase()

  //const handleActive = (id) => {
  //dispatch(StartDetailPosts(id));
  // };

  return (
    <div id="cards_landscape_wrap-2">
      <div className="container">
        <div className="row">
          <div>
            <Link to={`/public/detalle/${id}`}>
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    {urlVideoState !== "undefined" ? (
                      <ReactPlayer
                        className="react-player-home"
                        url={urlVideoState}
                        controls={true}
                      />
                    ) : (
                      <img
                        className="card-img-home"
                        variant="top"
                        src={urlImg}
                        alt={user.name}
                      />
                    )}
                  </div>

                  <div className="text-container">
                    <h6>{title}</h6>
                    <p>{descripcion}</p>
                    <p> {newDate.format("MMM Do YY")}</p>

                    <p> BY: {user.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
