import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activePost, startSavedPost } from "../../action/post";
import { Form } from "react-bootstrap";
import { Row, Col } from "antd";
import { useForm } from "../../hooks/useForm";
import CKEditor from "ckeditor4-react";

export const EditPost = () => {
  const dispatch = useDispatch();
  const [fileup, setfileup] = useState(null);

  const { active: post } = useSelector((state) => state.posts);

  const [formValues, handleInputChange] = useForm(post);

  const { title, body, descripcion, urlVideo } = formValues;

  const [editBody, setEditBody] = useState({
    data: body,
  });

  //cada cambio que se le haga a la nota sera actualizado en la nota activa
  useEffect(() => {
    dispatch(activePost(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(startSavedPost(post, editBody, fileup));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setfileup(file);
  };

  const handleInputChangeCk = (e) => {
    setEditBody({
      data: e.editor.getData(),
    });
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
                name="body"
                value={descripcion}
                onChange={handleInputChange}
              />
            </Form.Group>

            <CKEditor
              config={{
                language: "es",
              }}
              onChange={handleInputChangeCk}
              data={editBody.data}
            />

            <Form.Group controlId="formGroupVideo">
              <Form.Label>Url Video</Form.Label>
              <Form.Control
                type="text"
                name="urlVideo"
                value={urlVideo}
                onChange={handleInputChange}
              />
            </Form.Group>

            <input id="fileSelector" type="file" onChange={handleFileChange} />
            <button type="submit">Guardar</button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
