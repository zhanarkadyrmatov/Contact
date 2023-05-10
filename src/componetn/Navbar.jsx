import React, { useContext, useState } from "react";
import { Container, Nav, Button, InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { AddContext } from "../App";
function Navbar() {
  const { search, setSearch, handleShow } = useContext(AddContext);
  return (
    <header className="p-4">
      <Container>
        <Nav className="d-flex justify-content-between align-items-center">
          <h4>Книга контактов</h4>
          <Button onClick={handleShow} variant="primary" className="">
            Корзина
          </Button>
        </Nav>
        <div>
          <InputGroup size="" className="mt-3 mb-2">
            <Form.Control
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="primary" id="button-addon2">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
