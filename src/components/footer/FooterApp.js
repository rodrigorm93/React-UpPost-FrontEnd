import React from "react";
import { Layout } from "antd";

export default function FooterApp() {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <p>Rodrigo Ramirez Mendez</p>
      <p>Desarrollado con : MongoDB-Express-React-NodeJS</p>
    </Footer>
  );
}
