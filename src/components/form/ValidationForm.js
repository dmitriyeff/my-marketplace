import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import GoBack from "../buttons/GoBack";
import "./styles.scss";

const initialState = {
    appName: "",
    nameOk: "",
    nameError: "",
    description: "",
    descriptionOk: "",
    descriptionIsMissing: "",
    descriptionIsTooShort: "",
};

class ValidationForm extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    validate = () => {
        let nameOk = "";
        let nameError = "";
        let descriptionOk = "";
        let descriptionIsMissing = "";
        let descriptionIsTooShort = "";

        const appDescription = this.state.description;

        !this.state.appName ? nameError = "Please fill app name" : nameOk = "Looks good!";

        if (!appDescription) {
            descriptionIsMissing = "Description is missing";
        } else if (appDescription.length < 10) {
            descriptionIsTooShort = "Description should be at least 10 chars long";
        } else {
            descriptionOk = "Looks good!";
        }

        if (nameOk || descriptionOk || nameError || descriptionIsMissing || descriptionIsTooShort) {
            this.setState({
                nameOk,
                nameError,
                descriptionOk,
                descriptionIsMissing,
                descriptionIsTooShort
            });

            return !!(descriptionOk && nameOk);
        }
    };

    handleInputValue = event => {
      const updatedAppName = event.target.value;

      this.setState({
         appName: updatedAppName,
      });
    };

    handleDescription = event => {
        const updatedDescription = event.target.value;

        this.setState({
            description: updatedDescription,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const isValid = this.validate();

        if (isValid) {
            return window.history.back();
        }
    };

    render() {
        return (
            <Fragment>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                >
                    <label className="label">
                        App name
                        <input
                            className="input-form"
                            type="text"
                            value={this.state.appName}
                            onChange={this.handleInputValue}
                        />
                        <p className="error">
                            {this.state.nameError}
                        </p>
                        <p className="valid">
                            {this.state.nameOk}
                        </p>
                    </label>
                    <label className="label">
                        Your app description
                        <textarea
                            value={this.state.description}
                            onChange={this.handleDescription}
                            className="input-form"
                            rows="3"
                        />
                        <p className="error">
                            {this.state.descriptionIsMissing}
                        </p>
                        <p className="error">
                            {this.state.descriptionIsTooShort}
                        </p>
                        <p className="valid">
                            {this.state.descriptionOk}
                        </p>
                    </label>
                    <Button className="button" type="submit" variant="outline-primary">Submit form</Button>
                    <div className="button">
                        <GoBack />
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default ValidationForm;
