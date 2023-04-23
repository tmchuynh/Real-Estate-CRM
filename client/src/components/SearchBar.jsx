import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search...."
        aria-describedby="basic-addon2"
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </InputGroup>
  )
}

export default SearchBar;