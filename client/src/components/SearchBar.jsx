import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const SearchBar = () => {
    return (
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search...."
          aria-describedby="basic-addon2"
        />
        <Button id="button-addon2">
          Search
        </Button>
      </InputGroup>
    )
}

export default SearchBar;