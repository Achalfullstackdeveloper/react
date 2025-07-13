import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      users: [],
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  fetchUsers = async () => {
    const response = await fetch("http://localhost:8002/api/users");
    const users = await response.json();
    console.log("Fetched users:", users);
    this.setState({ users: users });
  };

  handleSubmit = async () => {
    await fetch("http://localhost:8002/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
      }),
    });

    this.fetchUsers();
    this.setState({ name: "", email: "" });
  };

  componentDidMount() {
    this.fetchUsers(); 
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to PERN</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.fetchUsers}>Fetch</button>

        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
