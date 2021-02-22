import React from "react";
import { generateId } from "../../utils.js";
import "./InputFloatingLabel.css";

class InputFloatingLabel extends React.Component {
  constructor({ placeholder, props }) {
    super(props);
    this.placeholder = placeholder;
    this.handleChange = this.handleChange.bind(this);
    this.inputId = "field-input-" + generateId();
  }

  state = {
    inputClassnames: "field-input",
    labelClassnames: "field-label",
  };

  handleChange(e) {
    this.showLabel(e.target.value);

    if (this.props.handleChange != null) this.props.handleChange(e);
  }

  showLabel(value){
    if (value === "") {
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
          id={this.inputId}
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
