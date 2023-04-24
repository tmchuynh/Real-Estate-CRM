import React from "react";
import { Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHouse, faUserGear } from '@fortawesome/free-solid-svg-icons'

const SidebarNav = () => {
  return (
    <div className="btn-group-vertical justify-content-start" style={{width: "14rem"}}>
      <Nav.Link href="/">
        <Button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={faHouse} className="mx-3" />
          Lgout
        </Button>
      </Nav.Link>

      <Nav.Link href="/user_profile">
        <Button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={faUserGear} className="mx-3" />
          My Profile
        </Button>
      </Nav.Link>

      <Nav.Link href="/leads">
        <Button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={faUsers} className="mx-3" />
          Lead
        </Button>
      </Nav.Link>
    </div>
  );
};

export default SidebarNav;