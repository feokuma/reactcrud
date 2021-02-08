import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: []
    };
    this.getLists = this.getLists.bind(this);
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3002/posts")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  }

  render() {
    return (
      <div className="container">
        <span className="title-bar">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={this.getLists}
          >
            Buscar listas
          </button>
        </span>
      </div>
    );
  }

}

export default App;
