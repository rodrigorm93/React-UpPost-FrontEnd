import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewPost } from "../../action/post";
import { Form } from "react-bootstrap";
import { Row, Col } from "antd";
import { useForm } from "../../hooks/useForm";

export const AddPost = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const [fileup, setfileup] = useState(false);
  //const [fileupArchivo, setFileupArchivo] = useState(null);

  const [category, setCategory] = useState("imagen");

  const [selection, setSelection] = useState("imagen");

  const [formValues, handleInputChange] = useForm({
    title: "",
    body: "",
    urlVideo: "",
  });

  const { title, body, urlVideo } = formValues;

  const handleAddNew = (e) => {
    e.preventDefault();
    dispatch(startNewPost(name, title, body, urlVideo, category, fileup));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setfileup(file);
  };

  const handleSelection = (e) => {
    setSelection(e.target.value);
  };

  const handleSelectionCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <Row justify="space-around" align="middle">
        <Col span={20}>
          <h1>AddPost</h1>
          <Form onSubmit={handleAddNew}>
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
                rows="3"
                name="body"
                value={body}
                onChange={handleInputChange}
              />
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
              <input
                id="fileSelector"
                type="file"
                onChange={handleFileChange}
              />
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
            <button type="submit">Guardar</button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
