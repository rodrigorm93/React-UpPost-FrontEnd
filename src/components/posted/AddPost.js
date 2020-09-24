import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { eventStartAddNew } from "../../action/post";
import { Form } from "react-bootstrap";
import { Row, Col } from "antd";
import { useForm } from "../../hooks/useForm";

import CKEditor from "ckeditor4-react";
export const AddPost = () => {
  const dispatch = useDispatch();

  //const [fileupArchivo, setFileupArchivo] = useState(null);

  //const [category, setCategory] = useState("imagen");

  const [selection, setSelection] = useState("imagen");

  const [body, setBody] = useState({
    data: "",
  });

  const [formValues, handleInputChange] = useForm({
    title: "",
    descripcion: "",
    urlVideo: "",
  });

  const { title, descripcion, urlVideo } = formValues;

  const handleAddNew = (e) => {
    e.preventDefault();
    let post;

    if (!!urlVideo) {
      post = {
        title,
        body: body.data,
        descripcion,
        categoria: selection,
        dateCreation: new Date(),
        urlVideo,
      };
    } else {
      post = {
        title,
        body: body.data,
        descripcion,
        dateCreation: new Date(),
        categoria: selection,
      };
    }

    dispatch(eventStartAddNew(post, file));

    setfile(false);
  };

  const handleInputChangeCk = (e) => {
    setBody({
      data: e.editor.getData(),
    });
  };

  const handleSelection = (e) => {
    setSelection(e.target.value);
  };

  const [file, setfile] = useState(false);
  const onChangeFile = (e) => {
    setfile(e.target.files);
    console.log(e.target.files);
  };

  return (
    <div className="post__main animate__animated animate__pulse">
      <Row justify="space-around" align="middle">
        <Col span={20}>
          <h1 className="title-add-post">AddPost</h1>

          <Form onSubmit={handleAddNew}>
            <Form.Label>Titulo:</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={handleInputChange}
            />
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                name="descripcion"
                value={descripcion}
                onChange={handleInputChange}
              />

              <br />
              <Form.Label>Contenido:</Form.Label>
              <CKEditor data={body.data} onChange={handleInputChangeCk} />
            </Form.Group>
            <Form.Label>Opciones:</Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onClick={handleSelection}
            >
              <option value="imagen">Imagen</option>
              <option value="video">Video</option>
            </Form.Control>
            <br /> <br />
            {selection === "imagen" ? (
              <input type="file" id="fileUpload" onChange={onChangeFile} />
            ) : (
              <Form.Group controlId="formGroupVideo">
                <Form.Label>Url Video</Form.Label>
                <Form.Control
                  type="text"
                  name="urlVideo"
                  value={urlVideo}
                  onChange={handleInputChange}
                  placeholder="Enter url video"
                />
              </Form.Group>
            )}
            <div className="container-button-submit">
              <button className="button-submit" type="submit">
                Guardar
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
