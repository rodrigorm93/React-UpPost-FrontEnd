import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

export const CarouselsApp = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <Carousel className="carousels-app">
        {posts.map((post) => (
          <Carousel.Item key={post.id}>
            <img
              className="d-block w-100"
              src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>{post.title}</h3>
              <p>{post.descripcion}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
