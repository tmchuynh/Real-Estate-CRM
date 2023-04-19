import React from "react";
import { Nav, Button } from "react-bootstrap";

const SidebarNav = () => {
  return (
    <div class="btn-group-vertical">
      <Button type="button" class="btn btn-primary">
        <Nav.Link href="/">Home</Nav.Link>
      </Button>
      <Button type="button" class="btn btn-primary">
        <Nav.Link href="/lead_profile">Lead</Nav.Link>
      </Button>
      <Button type="button" class="btn btn-primary">
        <Nav.Link href="/user_profile">User</Nav.Link>
      </Button>
      <Button type="button" class="btn btn-primary">
        <Nav.Link href="#">Documents</Nav.Link>
      </Button>
      <Button type="button" class="btn btn-primary">
        <Nav.Link href="#">Leads</Nav.Link>
      </Button>
      <Button type="button" class="btn btn-primary">
        <Nav.Link href="#">Contact</Nav.Link>
      </Button>
    </div>
  );
};

export default SidebarNav;