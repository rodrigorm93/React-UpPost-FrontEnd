import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { Row, Col } from "antd";
import { useForm } from "../../hooks/useForm";
import CKEditor from "ckeditor4-react";
import { eventStartUpdate } from "../../action/post";

export const EditPost = () => {
  const dispatch = useDispatch();

  const [file, setfile] = useState(false);

  const { active: post } = useSelector((state) => state.posts);

  console.log(post);

  const [formValues, handleInputChange] = useForm(post);

  const { title, body, descripcion, urlVideo } = formValues;

  const [selection, setSelection] = useState("imagen");

  const [category, setCategory] = useState("imagen");

  const handleSelectionCategory = (e) => {
    setCategory(e.target.value);
  };

  const [bodyPost, setBody] = useState({
    data: body,
  });
  //cada cambio que se le haga a la nota sera actualizado en la nota activa

  const handleEdit = (e) => {
    let postEdit;
    e.preventDefault();
    if (!!urlVideo) {
      postEdit = {
        id: post.id,
        title,
        body: bodyPost.data,
        descripcion,
        categoria: category,
        dateCreation: new Date(),
        urlVideo,
        idImg: post.img,
      };
    } else {
      postEdit = {
        id: post.id,
        title,
        body: bodyPost.data,
        descripcion,
        dateCreation: new Date(),
        categoria: category,
        idImg: post.img,
      };
    }

    dispatch(eventStartUpdate(postEdit, file));
  };

  const handleInputChangeCk = (e) => {
    setBody({
      data: e.editor.getData(),
    });
  };

  const handleSelection = (e) => {
    setSelection(e.target.value);
  };

  const onChangeFile = (e) => {
    setfile(e.target.files);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <Row justify="space-around" align="middle">
        <Col span={20}>
          <h1>EditPost</h1>
          <Form onSubmit={handleEdit}>
            <Form.Control
              size="lg"
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={handleInputChange}
            />
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="descripcion"
                value={descripcion}
                onChange={handleInputChange}
              />
            </Form.Group>
            <CKEditor
              config={{
                language: "es",
              }}
              onChange={handleInputChangeCk}
              data={bodyPost.data}
            />
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
            <button type="submit">Guardar</button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
