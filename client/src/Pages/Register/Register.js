import React from "react";
import "./Register.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Register your Details</h2>
        <Card className="shadow mt-3 p-3">
          <div className="profile_div text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/236/236831.png"
              alt="img"
            />
          </div>
          
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="Fname" placeholder="Enter First Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                <Form.Label>last Name</Form.Label>
                <Form.Control type="text" name="lname" placeholder="Enter Last Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                <Form.Label>Mobile </Form.Label>
                <Form.Control type="text" name="Mobileno" placeholder="Enter Mobile no"/>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                <Form.Label>Select your Gender </Form.Label>
                 <Form.Check
                  type={"radio"}
                  label={"Male"}
                  name="gender"
                  value={"Male"}
                 />
                 <Form.Check
                  type={"radio"}
                  label={"Female"}
                  name="gender"
                  value={"Female"}
                 />

              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
