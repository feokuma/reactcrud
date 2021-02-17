import React from "react";
import "./InputFloatingLabel.css";

class InputFloatingLabel extends React.Component {
  constructor({placeholder, props}) {
    super(props);
    this.placeholder = placeholder;
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    inputClassnames: "field-input",
    labelClassnames: "field-label",
  };

  handleChange(e) {
    if (e.target.value === "") {
      this.setState({
        inputClassnames: "field-input",
        labelClassnames: "field-label",
      });
    } else {
      this.setState({
        inputClassnames: "field-input field--not-empty",
        labelClassnames: "field-label field--not-empty",
      });
    }

    if(this.props.handleChange != null)
        this.props.handleChange(e);
  }

  render() {
    const { inputClassnames, labelClassnames } = this.state;

    return (
      <div className="field">
        <label className={labelClassnames} htmlFor="field-input">
          {this.placeholder}
        </label>
        <input
          className={inputClassnames}
          id="field-input"
          name={this.props.fieldname}
          value={this.props.fieldvalue}
          placeholder={this.placeholder}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default InputFloatingLabel;
