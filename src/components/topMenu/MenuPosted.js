import React from "react";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { startLogout } from "../../action/auth";

export const MenuPosted = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const { SubMenu } = Menu;
  const { Header } = Layout;

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </Menu.Item>

        <Menu.Item key="video" icon={<VideoCameraOutlined />}>
          <NavLink activeClassName="active" exact to="/public/category/video">
            Videos
          </NavLink>
        </Menu.Item>

        <Menu.Item key="imagen" icon={<CameraOutlined />}>
          <NavLink activeClassName="active" exact to="/public/category/imagen">
            Imagenes
          </NavLink>
        </Menu.Item>

        {name ? (
          <SubMenu
            key="user"
            icon={<UserOutlined />}
            title={name}
            className="sub-menu-user"
          >
            <Menu.Item key="addPost">
              <NavLink activeClassName="active" exact to="/private/subirPost">
                Subir Post
              </NavLink>
            </Menu.Item>

            <Menu.Item key="viewPost">
              <NavLink activeClassName="active" exact to="/private/viewPost">
                Ver Post
              </NavLink>
            </Menu.Item>

            <Menu.Item key="logout" onClick={hanleLogout}>
              Logout
            </Menu.Item>
          </SubMenu>
        ) : (
          <Menu.Item key="login" className="sub-menu-user">
            <Link to="/public/login" className="link">
              Login
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};
