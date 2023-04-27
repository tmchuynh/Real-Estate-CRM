import React from "react";
import { Nav, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHouse, faUserGear, faChartLine, faCalendarWeek, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/image.png";
import styles from "../Style.modules.css/Main.module.css";

const SidebarNav = () => {
  return (
    <div className={`btn-group-vertical justify-content-start align-items-center ${styles.gradient}`} style={{ width: "14rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
        <Image src={logo} alt="RealAgentDesk logo" style={{ width: "10rem" }} />
      </div>

      <Nav.Link href="/leads" className={`${styles.marginY}`}>
        <Button type="button" className={`btn btn-primary ${styles.widthBtn} ${styles.button}`}>
          <FontAwesomeIcon icon={faUsers} className="mx-3" />
          Leads
        </Button>
      </Nav.Link>

      <Nav.Link href="/activity" className={`${styles.marginY}`}>
        <Button type="button" className={`btn btn-primary ${styles.widthBtn} ${styles.button}`}>
          <FontAwesomeIcon icon={faChartLine} className="mx-3" />
          My Activity
        </Button>
      </Nav.Link>


      <Nav.Link href="/listings" className={`${styles.marginY}`}>
        <Button type="button" className={`btn btn-primary ${styles.widthBtn} ${styles.button}`}>
          <FontAwesomeIcon icon={faHouse} className="mx-3" />
          My Listings
        </Button>
      </Nav.Link>

      <Nav.Link href="/user_profile" className={`${styles.marginY}`}>
        <Button type="button" className={`btn btn-primary ${styles.widthBtn} ${styles.button}`}>
          <FontAwesomeIcon icon={faUserGear} className="mx-3" />
          My Profile
        </Button>
      </Nav.Link>

      <Nav.Link href="/" className={`${styles.marginY}`}>
        <Button type="button" className={`btn btn-primary ${styles.widthBtn} ${styles.button}`}>
          <FontAwesomeIcon icon={faRightFromBracket} className="mx-3" />
          Logout
        </Button>
      </Nav.Link>
    </div>
  );
};

export default SidebarNav;
