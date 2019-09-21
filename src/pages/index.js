import React from "react"
import Navbar from "react-bootstrap/Navbar"
import {
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap"

const logo = require("../images/logo.png")
const background = require("../images/background.png")

export default () => (
  <>
    <Navbar bg="light" expand="md">
      <img className="mr-3" src={logo} width="30px" height="30px" />
      <Navbar.Brand href="#home">ABD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Portofolio</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <div
      className="text-white"
      style={{
        backgroundColor: "rgb(0,0,0,0.5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ margin: "100px 0px" }}>
        <h1 className="text-center mt-lg-10">
          <strong>HELLO...</strong>
        </h1>
        <h1 className="text-center mt-10">I'm @warisHafidz</h1>
      </div>
      <img
        style={{ zIndex: "-1", position: "absolute", top: 0 }}
        src={background}
      />
    </div>
    <h1 className="mt-5  text-center">
      <strong> My Stories</strong>
    </h1>
    <div className="ml-5 mr-5">
      <Row>
        <Col className="bg-dark m-2" sm={3}>
          <h3 className="text-center">Summary</h3>
        </Col>
        <Col className="bg-primary m-2">
          <h3 className="text-center">Description</h3>
        </Col>
      </Row>
      <Row>
        <Col className="bg-dark m-2" sm={3}>
          <h3 className="text-center">Summary</h3>
        </Col>
        <Col className="bg-primary m-2">
          <h3 className="text-center">Description</h3>
        </Col>
      </Row>
    </div>
  </>
)
