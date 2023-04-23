import React from "react";
import { Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHouse } from '@fortawesome/free-solid-svg-icons'

const SidebarNav = () => {
  return (
    <div class="btn-group-vertical justify-content-start">
      <Nav.Link href="/">
        <Button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={faHouse} className="mx-3"/>
          Lgout
        </Button>
      </Nav.Link>

      <Nav.Link href="/leads">
        <Button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={faUsers}  className="mx-3"/>
          Lead
        </Button>
      </Nav.Link>
    </div>
  );
};

export default SidebarNav;