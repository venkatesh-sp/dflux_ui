import React from "react";
import SideBar from "../components/page_elements/sidebar";
import Header from "../components/page_elements/header";

function MainLayout(props) {
  return (
    <div className="container-fluid h-100">
      <Header />
      <div className="row h-100">
        <div className="col-md-1 h-100">
          <SideBar />
        </div>
        <main className="col-md-11 bg-light">{props.children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
