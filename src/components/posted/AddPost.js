import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewPost } from "../../action/post";
import { Form } from "react-bootstrap";
import { Row, Col } from "antd";
import { useForm } from "../../hooks/useForm";

import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CKEditor from "ckeditor4-react";
export const AddPost = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const [fileup, setfileup] = useState(false);

  //const [fileupArchivo, setFileupArchivo] = useState(null);

  const [category, setCategory] = useState("imagen");

  const [selection, setSelection] = useState("imagen");

  const [body, setBody] = useState({
    data: "hola",
  });

  const [formValues, handleInputChange] = useForm({
    title: "",
    decripcion: "",
    urlVideo: "",
  });

  const { title, decripcion, urlVideo } = formValues;

  const handleAddNew = (e) => {
    e.preventDefault();
    dispatch(
      startNewPost(name, title, body, decripcion, urlVideo, category, fileup)
    );
  };

  const handleInputChangeCk = (e) => {
    setBody({
      data: e.editor.getData(),
    });
  };

  const handleSelection = (e) => {
    setSelection(e.target.value);
  };

  const handleSelectionCategory = (e) => {
    setCategory(e.target.value);
  };

  const props = {
    onChange(info) {
      const file = info.fileList[0].originFileObj;
      setfileup(file);
    },
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
                name="decripcion"
                value={decripcion}
                onChange={handleInputChange}
              />

              <br />
              <Form.Label>Contenido:</Form.Label>
              <CKEditor data={body.data} onChange={handleInputChangeCk} />
            </Form.Group>
            <Form.Label>Categoria:</Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              onClick={handleSelectionCategory}
              custom
            >
              <option value="imagen">Imagen</option>
              <option value="video">Video</option>
            </Form.Control>
            <br /> <br />
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
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
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
