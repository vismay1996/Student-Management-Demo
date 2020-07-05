import React, { Component } from "react";
import Moment from "moment";
import Table from "react-bootstrap/Table";

class UserTable extends Component {
  render() {
    const { tableContents } = this.props;

    return (
      <div className="tableData">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Name</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Division</th>
            </tr>
          </thead>
          <tbody>
            {tableContents.length ? (
              tableContents.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{Moment(item.dob).format("DD-MM-YYYY")}</td>
                  <td>{item.gender}</td>
                  <td>{item.studentClass}</td>
                  <td>{item.division}</td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserTable;
