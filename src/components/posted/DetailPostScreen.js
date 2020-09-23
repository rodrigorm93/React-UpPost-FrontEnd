import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";

import { Card } from "react-bootstrap";

import ReactPlayer from "react-player";
import CKEditor from "ckeditor4-react";

export const DetailPostScreen = ({ props }) => {
  const [urlVideoState, setUrlVideoState] = useState("");

  const { title, urlImg, urlVideo, body } = props;

  useEffect(() => {
    setUrlVideoState(`${urlVideo}`);
  }, [urlVideo]); // DE LAS VARIABLES QUE SE VAN A EJECUTAR SE HARA QUE EL USEEFECT SE VUELVA A EJECUTAR, si alguna de
  //esas dos variables sufre un cambio el useEffect se actualizara

  return (
    <>
      <Row justify="space-around" align="middle" className="row-container">
        <Col span={20} className="col-detail">
          <Card
            className="text-center card-box-container"
            bg={"light"}
            text={"dark"}
            border="light"
          >
            <Card.Header className="header-card">
              <Card.Title className="title-card">{title}</Card.Title>
              {!!urlVideo ? (
                <ReactPlayer
                  className="react-player"
                  url={urlVideoState}
                  controls={true}
                />
              ) : (
                <Card.Img className="img-card" variant="top" src={urlImg} />
              )}
            </Card.Header>

            <CKEditor
              config={{
                language: "es",
                height: "auto",
                width: "100%",
              }}
              readOnly={true}
              data={body}
            />
          </Card>

          <footer className=" footer-card"></footer>
        </Col>
      </Row>

      <Row></Row>
    </>
  );
};
