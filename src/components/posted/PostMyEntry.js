import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { DeleteFilled, SettingFilled } from "@ant-design/icons";
import momente from "moment";
import { useDispatch } from "react-redux";
import { activePost } from "../../action/post";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import CKEditor from "ckeditor4-react";

export const PostMyEntry = ({
  id,
  body,
  descripcion,
  title,
  date,
  urlVideo,
  urlImg,
  img,
  categoria,
}) => {
  const [urlVideoState, setUrlVideoState] = useState("");
  const newDate = momente(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
      activePost(id, {
        date,
        title,
        body,
        urlVideo,
        categoria,
        descripcion,
        img,
        urlImg,
      })
    );
  };

  useEffect(() => {
    setUrlVideoState(`${urlVideo}`);
  }, [urlVideo]); // DE LAS VARIABLES QUE SE VAN A EJECUTAR SE HARA QUE EL USEEFECT SE VUELVA A EJECUTAR, si alguna de
  //esas dos variables sufre un cambio el useEffect se actualizara

  const handleDelete = () => {};

  return (
    <Card className="text-center">
      <Card.Header className="header-card">
        <Card.Title className="title-card">{title}</Card.Title>
        {!!urlVideo ? (
          <ReactPlayer
            className="react-detail"
            url={urlVideoState}
            controls={true}
          />
        ) : (
          <Card.Img className="card-img-detail" variant="top" src={urlImg} />
        )}
      </Card.Header>

      <Card.Body>
        <CKEditor
          config={{
            language: "es",
          }}
          readOnly={true}
          data={body}
        />
      </Card.Body>
      <Card.Footer className="text-muted">
        {newDate.format("MMM Do YY")}

        <Link
          to="/private/editPost"
          className="icon-edit"
          onClick={handleEntryClick}
        >
          <SettingFilled />
        </Link>

        <div className="icons-list btn-delete" onClick={handleDelete}>
          <DeleteFilled />
        </div>
      </Card.Footer>
    </Card>
  );
};
