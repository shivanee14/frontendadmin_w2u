import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } = useProSidebar();

  return (<>
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
      <div style={{ display: "flex", minHeight: "100vh" ,backgroundColor:"powderblue"}}>
        <Sidebar width="100%">
          <Menu style={{backgroundColor:"#c0e4ea"}}>
            <MenuItem style={{fontWeight: "bold"}}  component={<Link to="/admin" />}> Dashboard </MenuItem>
            <SubMenu style={{fontWeight: "bold"}}  label="Category">
              <MenuItem style={{fontWeight: "bold"}}  component={<Link to="/admin/list_category" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_category" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}} label="Subcategory">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_subcategory" />}>
              List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_subcategory" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="News">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_news" />}>
              List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_news" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="User">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_user" />}>
                List
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Advertisement">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_advertisement" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_advertisement" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Business Listed">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_businesses" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_businesses" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Darshan Timing">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_darshan_timing" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_darshan_timing" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Home Video">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_home_video" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_home_video" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Newsletter">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_newsletter" />}>
                List
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Social Media">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_social_media" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_social_media" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Event">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_event" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_event" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Guide">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_guide" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_guide" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Blogger Influencer">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_blogger" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_blogger" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Blog">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_blog" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_blog" />}>
                Add New +
              </MenuItem>
            </SubMenu>           
            <SubMenu style={{fontWeight: "bold"}}  label="Food">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_food" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_food" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Mandir">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_mandir" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_mandir" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Shopping">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_shopping" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_shopping" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Tourist">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_tourist" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_tourist" />}>
                Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Wedding Agent">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_wedding_agent" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_wedding_agent" />}>
              Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Online Directory">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_online_directory" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_online_directory" />}>
              Add New +
              </MenuItem>
            </SubMenu>
            <SubMenu style={{fontWeight: "bold"}}  label="Organized By">
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/list_organizedby" />}>
                List
              </MenuItem>
              <MenuItem style={{fontWeight: "bold"}} component={<Link to="/admin/add_organizedby" />}>
                Add New +
              </MenuItem>
            </SubMenu>
          </Menu>        
        </Sidebar>      
      </div>
  </>);
}

export default AdminSidebar;
