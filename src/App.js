import React from "react";
import Lists from "./Lists";
import CreateList from "./CreateList";
import InputFloatingLabel from "./components/InputFloatingLabel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        author: "",
      },
    };
    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  getList(event, id) {
    this.setState(
      {
        singledata: {
          title: "Loading...",
          author: "Loading...",
        },
      },
      () =>
        fetch(`http://localhost:3002/posts/${id}`)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              singledata: {
                title: result.title,
                author: result.author ? result.author : "",
              },
            });
          })
    );
  }

  handleChange(event) {
    var title = this.state.singledata.title;
    var author = this.state.singledata.author;
    if (event.target.name === "title") title = event.target.value;
    else author = event.target.value;

    this.setState({
      singledata: {
        title: title,
        author: author,
      },
    });
  }

  createList() {
    fetch("http://localhost:3002/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    }).then((result) => {
      this.setState({
        singledata: {
          title: "",
          author: "",
        },
      });
      this.getLists();
    });
  }

  deleteList(event, id) {
    fetch(`http://localhost:3002/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            title: "",
            author: "",
          },
        });
        this.getLists();
      });
  }

  updateList(event, id) {
    fetch(`http://localhost:3002/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    }).then(() => {
      this.setState({
        singledata: {
          title: "",
          author: "",
        },
      });
      this.getLists();
    });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        handleChange={this.handleChange}
        getList={this.getList}
        deleteList={this.deleteList}
        updateList={this.updateList}
      />
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
          <CreateList
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {listTable}
        <br />
        <InputFloatingLabel
          placeholder="Title"
          fieldname="title"
          fieldvalue={this.state.singledata.title}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
