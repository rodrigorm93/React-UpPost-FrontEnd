import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

export const CardApp = ({
  title,
  id,
  descripcion,
  url,
  urlVideoState,
  name,
  newDate,
}) => {
  return (
    <div id="cards_landscape_wrap-2">
      <div className="container">
        <div className="row">
          <div>
            <Link to={`/detalle/${id}`}>
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    {urlVideoState ? (
                      <ReactPlayer
                        className="react-player-home"
                        url={urlVideoState}
                        controls={true}
                      />
                    ) : (
                      <img
                        className="card-img-home"
                        variant="top"
                        src={url}
                        alt={name}
                      />
                    )}
                  </div>

                  <div className="text-container">
                    <div className="footer-container">
                      <Avatar size={40}>
                        {name.substr(0, 2).toUpperCase()}
                      </Avatar>
                    </div>
                    <h6>{title}</h6>
                    <p>{descripcion}</p>
                    <p> {newDate.format("MMM Do YY")}</p>
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
