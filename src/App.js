import React from "react";
import Lists from "./Lists";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
    };
    this.getLists = this.getLists.bind(this);
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3002/posts")
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            loading: false,
            alldata: result,
          })
        )
        .catch(console.log);
    });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      <Lists alldata={this.state.alldata} />
    );
    return (
      <div className="container">
        <span className="title-bar">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.getLists}
          >
            Get Lists
          </button>
        </span>
        <br />
        {listTable}
      </div>
    );
  }
}

export default App;
