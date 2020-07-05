import React from "react";
import Form from "./Form";
import UserTable from "./UserTable";
import Axios from "axios";

class App extends React.Component {
  state = {
    tableContents: [],
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    await Axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
      .then((res) => this.setState({ tableContents: res.data }))
      .catch((err) => console.log("Error: ", err));
  };

  updateTable = (contents) => {
    const { name, dob, studentClass, division, gender } = contents;

    Axios.post(`${process.env.REACT_APP_BASE_URL}/user`, {
      name,
      dob,
      studentClass,
      division,
      gender,
    })
      .then((res) => {
        this.setState({ tableContents: res.data.data });
      })
      .catch((err) => console.log("err: ", err));
  };

  render() {
    return (
      <div className="dashboard">
        <Form updateTable={this.updateTable} />
        <UserTable tableContents={this.state.tableContents} />
      </div>
    );
  }
}
export default App;
