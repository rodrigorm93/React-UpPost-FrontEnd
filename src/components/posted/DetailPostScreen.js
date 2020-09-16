import React, { useEffect, useState } from "react";
import { Row, Col, Avatar } from "antd";

import { Card } from "react-bootstrap";

import momente from "moment";
import ReactPlayer from "react-player";
import CKEditor from "ckeditor4-react";

export const DetailPostScreen = ({
  name,
  body,
  title,
  date,
  urlVideo,

  url,
}) => {
  const newDate = momente(date);
  const [urlVideoState, setUrlVideoState] = useState(null);

  useEffect(() => {
    setUrlVideoState(`${urlVideo}`);
  }, [urlVideo]); // DE LAS VARIABLES QUE SE VAN A EJECUTAR SE HARA QUE EL USEEFECT SE VUELVA A EJECUTAR, si alguna de
  //esas dos variables sufre un cambio el useEffect se actualizara

  return (
    <>
      <Row justify="space-around" align="middle" className="row-container">
        <Col span={15} className="col-detail">
          <Card
            className="text-center card-box-container"
            bg={"light"}
            text={"dark"}
            border="light"
          >
            <Card.Header className="header-card">
              <Avatar size={40} className="avatar-card">
                {name.substr(0, 2).toUpperCase()}
              </Avatar>

              <Card.Title className="title-card">{title}</Card.Title>
              {urlVideoState ? (
                <ReactPlayer
                  className="react-player"
                  url={urlVideoState}
                  controls={true}
                />
              ) : (
                <Card.Img className="img-card" variant="top" src={url} />
              )}
            </Card.Header>

            <CKEditor
              config={{
                language: "es",
                height: 500,
                width: "100%",
              }}
              readOnly={true}
              data={body.data}
            />
          </Card>

          <footer className=" footer-card">
            {newDate.format("MMM Do YY")}
          </footer>
        </Col>
      </Row>

      <Row></Row>
    </>
  );
};
