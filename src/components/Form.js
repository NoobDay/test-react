import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        phone: "",
        blogUrl: "",
      },
      errors: {},
    };
  }

  isFormValid() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  Submit = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.props.updateMessage("Form is Complete !");
    } else {
      this.props.updateMessage("Form is Incomplete !");
    }
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Form Validation</h1>
        <form noValidate autoComplete="off">
          <TextField
            className="onRow"
            label="Name"
            onChange={this.handleChange.bind(this, "name")}
            value={this.state.fields["name"]}
          />
          <TextField
            className="onRow"
            label="Email"
            onChange={this.handleChange.bind(this, "email")}
            value={this.state.fields["email"]}
          />
          <TextField
            className="onRow"
            label="Phone"
            onChange={this.handleChange.bind(this, "phone")}
            value={this.state.fields["phone"]}
          />
          <TextField
            className="onRow"
            label="Blog URL"
            onChange={this.handleChange.bind(this, "blogUrl")}
            value={this.state.fields["blogUrl"]}
          />

          <Button variant="contained" className="niceMargin" color="primary" onClick={this.Submit}>
            Verify
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
