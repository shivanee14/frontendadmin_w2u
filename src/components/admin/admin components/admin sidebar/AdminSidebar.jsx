import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } =
    useProSidebar();

  return (
    <>
      {/* <button
        className="btn dropdown-toggle"
        type="button"
        onClick={() => collapseSidebar()}
      >
        <img
          src="/assets/images/icons8-menu-22.png"
          alt=""
          className=""
          width="24px"
          height="22px"
        />
      </button> */}
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar width="100%">
          <Menu>
            <MenuItem component={<Link to="/admin" />}> Dashboard </MenuItem>
            <SubMenu label="Category">
              <MenuItem component={<Link to="/admin/list_category" />}>
                Table
              </MenuItem>
              <MenuItem component={<Link to="/admin/add_category" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu label="Subcategory">
              <MenuItem component={<Link to="/admin/list_subcategory" />}>
                Table
              </MenuItem>
              <MenuItem component={<Link to="/admin/add_subcategory" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu label="news">
              <MenuItem component={<Link to="/admin/list_news" />}>
                Table
              </MenuItem>
              <MenuItem component={<Link to="/admin/add_news" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu label="user">
              <MenuItem component={<Link to="/admin/list_user" />}>
                Table
              </MenuItem>
            </SubMenu>
            <SubMenu label="Advertisement">
              <MenuItem component={<Link to="/admin/list_advertisement" />}>
                Table
              </MenuItem>
              <MenuItem component={<Link to="/admin/add_advertisement" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu label="Business Listed">
              <MenuItem component={<Link to="/admin/list_businesses" />}>
                Table
              </MenuItem>
              <MenuItem component={<Link to="/admin/add_businesses" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu label="Darshan Timing">
              <MenuItem component={<Link to="/admin/list_darshan_timing" />}>
                Table
              </MenuItem>
              <MenuItem component={<Link to="/admin/add_darshan_timing" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu label="Home Video">
              <MenuItem component={<Link to="/admin/list_home_video" />}>
                Table
              </MenuItem>
              <MenuItem component={<Link to="/admin/add_home_video" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu label="Newsletter">
              <MenuItem component={<Link to="/admin/list_newsletter" />}>
                Table
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}

export default AdminSidebar;
