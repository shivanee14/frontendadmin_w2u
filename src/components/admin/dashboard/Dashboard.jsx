import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../admin components/admin navbar/AdminNavbar";
import AdminFooter from "../admin components/admin footer/AdminFooter";
import AdminSidebar from "../admin components/admin sidebar/AdminSidebar";
import { ProSidebarProvider } from "react-pro-sidebar";


function Dashboard() {
  return (
    <>
    <div className="your-element" style={{backgroundImage:"url('/barner2.png')",backgroundSize:"cover", position:" relative",backgroundReapeat:"no-repeat"
 }}>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row">
          <ProSidebarProvider>
            <div className="col-3">
              <AdminSidebar />
            </div>
            <div className="col-9">
              <Outlet />
            </div>
          </ProSidebarProvider>
        </div>
      </div>
      <AdminFooter />
      </div>
    </>
  );
}

export default Dashboard;
