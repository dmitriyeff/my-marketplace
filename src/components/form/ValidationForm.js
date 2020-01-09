import React, { Component } from "react";
import { Button } from "react-bootstrap";

const initialState = {
  appName: "",
  nameOk: "",
  nameError: "",
};

class ValidationForm extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    validate = () => {
        let nameOk = "";
        let nameError = "";

        if (!this.state.appName) {
            nameError = "Please fill app name";
        } else {
            nameOk = "Looks good!";
        }

        if (nameOk || nameError) {
            this.setState({ nameOk, nameError });
        }
    };

    handleSubmit = event => {
      event.preventDefault();
      event.stopPropagation();

      this.validate();
    };

    handleInputValue = event => {
      const updatedAppName = event.target.value;

      this.setState({
         appName: updatedAppName,
      });
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                style={{
                    display: "table-caption"
                }}>
                <label>
                    App name:
                    <input
                        style={{
                            border: "1px solid #ced4da"
                        }}
                           type="text"
                           value={this.state.appName}
                           onChange={this.handleInputValue}
                    />
                    <p style={{
                        color: "#dc3545",
                        fontSize: "12px",
                        marginBottom: "0"
                    }}>
                        {this.state.nameError}
                    </p>
                    <p style={{
                        color: "limegreen",
                        fontSize: "12px",
                        marginBottom: "0"
                    }}>
                        {this.state.nameOk}
                    </p>
                </label>
                <Button type="submit" variant="outline-primary">Submit form</Button>
            </form>
        );
    }
}

export default ValidationForm;
