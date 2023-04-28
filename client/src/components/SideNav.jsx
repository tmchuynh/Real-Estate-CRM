import React from "react";
import { Nav, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserGear, faChartLine, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/image.png";
import styles from "../Style.module.css/SideBar.module.css";

const SidebarNav = () => {
  return (
    <div className={`btn-group-vertical justify-content-start align-items-center ${styles.gradient} ${styles.sideBar}`}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
        <Image src={logo} alt="RealAgentDesk logo" style={{ width: "10rem" }} />
      </div>

      <Nav.Link href="/leads" className={`${styles.marginY}`}>
        <Button
          type="button"
          className={`btn btn-primary ${styles.widthBtn} `}
          style={{
            backgroundColor: "#6b3fa0",
            color: "#fae206",
            borderColor: "#000000",
            transition: "background-color 0.2s, color 0.2s",
            textAlign: "left"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#f0f5fa";
            e.target.style.color = "#6b3fa0";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#6b3fa0";
            e.target.style.color = "#fae206";
          }}
        >
          <FontAwesomeIcon icon={faUsers} className="mx-3" />
          Leads
        </Button>
      </Nav.Link>

      <Nav.Link href="/activity" className={`${styles.marginY}`}>
        <Button
          type="button"
          className={`btn btn-primary ${styles.widthBtn} `}
          style={{
            backgroundColor: "#6b3fa0",
            color: "#fae206",
            borderColor: "#000000",
            transition: "background-color 0.2s, color 0.2s",
            textAlign: "left"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#f0f5fa";
            e.target.style.color = "#6b3fa0";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#6b3fa0";
            e.target.style.color = "#fae206";
          }}
        >
          <FontAwesomeIcon icon={faChartLine} className="mx-3" />
          My Activity
        </Button>
      </Nav.Link>


      {/* <Nav.Link href="/listings" className={`${styles.marginY}`}>
        <Button
          type="button"
          className={`btn btn-primary ${styles.widthBtn} `}
          style={{
            backgroundColor: "#6b3fa0",
            color: "#fae206",
            borderColor: "#000000",
            transition: "background-color 0.2s, color 0.2s",
            textAlign: "left"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#f0f5fa";
            e.target.style.color = "#6b3fa0";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#6b3fa0";
            e.target.style.color = "#fae206";
          }}
        >
          <FontAwesomeIcon icon={faHouse} className="mx-3" />
          My Listings
        </Button>
      </Nav.Link>

      <Nav.Link href="/user_profile" className={`${styles.marginY}`}>
        <Button
          type="button"
          className={`btn btn-primary ${styles.widthBtn} `}
          style={{
            backgroundColor: "#6b3fa0",
            color: "#fae206",
            borderColor: "#000000",
            transition: "background-color 0.2s, color 0.2s",
            textAlign: "left"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#f0f5fa";
            e.target.style.color = "#6b3fa0";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#6b3fa0";
            e.target.style.color = "#fae206";
          }}
        >
          <FontAwesomeIcon icon={faUserGear} className="mx-3" />
          My Profile
        </Button>
      </Nav.Link>

      <Nav.Link href="/" className={`${styles.marginY}`}>
        <Button
          type="button"
          className={`btn btn-primary ${styles.widthBtn} `}
          style={{
            backgroundColor: "#6b3fa0",
            color: "#fae206",
            borderColor: "#000000",
            transition: "background-color 0.2s, color 0.2s",
            textAlign: "left"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#f0f5fa";
            e.target.style.color = "#6b3fa0";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#6b3fa0";
            e.target.style.color = "#fae206";
          }}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="mx-3" />
          Logout
        </Button>
      </Nav.Link>
    </div>
  );
};

export default SidebarNav;
