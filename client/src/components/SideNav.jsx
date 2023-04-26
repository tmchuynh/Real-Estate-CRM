import React from "react";
import { Nav, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHouse, faUserGear, faChartLine, faCalendarWeek, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import "../images/logo.png";

const SidebarNav = () => {
  return (
    <div className="btn-group-vertical justify-content-start" style={{width: "14rem"}}>
      <Image src="../images/logo.png" alt="RealAgentDesk logo" />
      <Nav.Link href="/">
        <Button type="button" className="btn btn-primary">
          <FontAwesomeIcon  icon={faRightFromBracket} className="mx-3" />
          Logout
        </Button>
      </Nav.Link>

      <Nav.Link href="/user_profile">
        <Button type="button" className="btn btn-primary">
          <FontAwesomeIcon icon={faUserGear} className="mx-3" />
          My Profile
        </Button>
      </Nav.Link>

      <Nav.Link href="/leads">
        <Button type="button" className="btn btn-primary">
          <FontAwesomeIcon icon={faUsers} className="mx-3" />
          Leads
        </Button>
      </Nav.Link>

      <Nav.Link href="/activity">
        <Button type="button" className="btn btn-primary">
          <FontAwesomeIcon icon={faChartLine} className="mx-3" />
          My Activity
        </Button>
      </Nav.Link>

      <Nav.Link href="/calendar">
        <Button type="button" className="btn btn-primary">
          <FontAwesomeIcon icon={faCalendarWeek} className="mx-3" />
          Schedule
        </Button>
      </Nav.Link>

      <Nav.Link href="/listings">
        <Button type="button" className="btn btn-primary">
        <FontAwesomeIcon icon={faHouse} className="mx-3" />
          My Listings
        </Button>
      </Nav.Link>
    </div>
  );
};

export default SidebarNav;