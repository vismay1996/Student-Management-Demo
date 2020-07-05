import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Row, Col, Button } from "react-bootstrap";

const classes = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

const divisions = ["A", "B", "C"];

class Form extends Component {
  state = {
    name: "",
    dob: "",
    studentClass: "",
    division: "",
    gender: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      dob: date,
    });
  };

  isDisabled = () => {
    const { name, dob, studentClass, division, gender } = this.state;

    return (
      !name.length ||
      !dob ||
      !studentClass.length ||
      !division.length ||
      !gender.length
    );
  };

  handleClick = () => {
    const { name, dob, studentClass, division, gender } = this.state;
    this.props.updateTable({ name, dob, studentClass, division, gender });
    this.setState({
      name: "",
      dob: "",
      studentClass: "",
      division: "",
      gender: "",
    });
  };

  render() {
    return (
      <div class="sidebar">
        <div className="top-panel">
        <h3 className="mt-5">Student Management System</h3>
        <p className="m-5">Fill out all fields.  All fields are mandatory.</p>
        </div>
        <Row>
          <Col className="d-flex justify-content-between align-items-center px-5 my-3" sm={12}>
            <label className="textLabel">Name</label>
            <input
              className="inputField"
              name="name"
              value={this.state.name}
              placeholder="Enter name"
              onChange={(e) => this.handleChange(e)}
            />
          </Col>
          {/*  */}
          <Col className="d-flex justify-content-between align-items-center  px-5 my-3 " sm={12}>
            <label className="textLabel">DOB</label>
            <DatePicker
              className="inputField"
              selected={this.state.dob}
              name="dob"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date of Birth"
              maxDate={new Date()}
              onChange={(e) => this.handleDateChange(e)}
            />
          </Col>
          {/*  */}
          <Col className="d-flex justify-content-between align-items-center  px-5 my-3" sm={12}>
            <label className="textLabel">Class</label>
            <select
              className="inputField"
              value={this.state.studentClass}
              name="studentClass"
              onChange={(e) => this.handleChange(e)}
            >
              <option value="">-Select-</option>
              {classes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Col>
          {/*  */}
          <Col className="d-flex justify-content-between align-items-center  px-5 my-3" sm={12}>
            <label className="textLabel">Division</label>
            <select
              className="inputField"
              value={this.state.division}
              name="division"
              onChange={(e) => this.handleChange(e)}
            >
              <option value="">-Select-</option>
              {divisions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Col>
          {/*  */}
          <Col className="d-flex justify-content-between align-items-center  px-5 my-3" sm={12}>
            <label className="textLabel">Gender</label>
            <div className="radioBut">
              <div className="radio-male"><input 
                className=""
                onChange={(e) => this.handleChange(e)}
                checked={this.state.gender === "male"}
                type="radio"
                name="gender"
                value="male"
              />  
              Male
              </div>
              <div>
              <input
                onChange={(e) => this.handleChange(e)}
                type="radio"
                name="gender"
                checked={this.state.gender === "female"}
                value="female"
              />
              Female
              </div>
            </div>
          </Col>
          {/*  */}
          <Col sm={12}>
            <Button
              onClick={() => this.handleClick()}
              disabled={this.isDisabled()}
              className="m-3"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form;
