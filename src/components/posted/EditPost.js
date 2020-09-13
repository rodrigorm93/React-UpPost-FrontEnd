import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activePost, startSavedPost } from "../../action/post";
import { Form } from "react-bootstrap";
import { Row, Col } from "antd";
import { useForm } from "../../hooks/useForm";

export const EditPost = () => {
  const dispatch = useDispatch();
  const [fileup, setfileup] = useState(null);

  const { active: post } = useSelector((state) => state.posts);

  const [formValues, handleInputChange] = useForm(post);

  const { title, body, urlVideo } = formValues;

  //cada cambio que se le haga a la nota sera actualizado en la nota activa
  useEffect(() => {
    dispatch(activePost(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(startSavedPost(post, fileup));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setfileup(file);
  };
  return (
    <div>
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
                value={body}
                onChange={handleInputChange}
              />
            </Form.Group>

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
