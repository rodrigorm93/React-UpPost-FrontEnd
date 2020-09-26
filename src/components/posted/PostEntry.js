import React, { useEffect, useState } from "react";

import momente from "moment";

import { CardApp } from "../card-boostrap/CardApp";
export const PostEntry = ({
  id,
  name,
  descripcion,
  title,
  date,
  urlVideo,
  urlImg,
  img,
  user,
}) => {
  const newDate = momente(date);
  const [urlVideoState, setUrlVideoState] = useState(null);

  useEffect(() => {
    setUrlVideoState(`${urlVideo}`);
  }, [urlVideo]); // DE LAS VARIABLES QUE SE VAN A EJECUTAR SE HARA QUE EL USEEFECT SE VUELVA A EJECUTAR, si alguna de
  //esas dos variables sufre un cambio el useEffect se actualizara

  return (
    <>
      <CardApp
        title={title}
        id={id}
        descripcion={descripcion}
        urlImg={urlImg}
        urlVideoState={urlVideoState}
        user={user}
        img={img}
        newDate={newDate}
      />
    </>
  );
};

/// toolbar: [["Bold", "Italic", "Format", "Styles", "Table"]],
