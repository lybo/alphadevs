import React from "react";
import PageLayout from "../PageLayout";
import "!style!css!less!./style.less";
import {Fieldset, Field, createValue} from "react-forms";

class PageProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        let formValue = createValue({
            value: props.getProject(),
            onChange: this.onChange.bind(this)
        });
        this.state = {formValue};
    }

    onChange(formValue) {
        this.setState({formValue});
    }


    render() {
        const { authUser, onClickLogout, onProjectUpdate } = this.props;

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <Fieldset formValue={this.state.formValue}>
                    <Field select="name" label="Name" />
                    <Field select="description" label="description" />
                    <Field select="url" label="url" />
                </Fieldset>
                <button onClick={ () => onProjectUpdate(this.state.formValue.value)}>
                    Save Changes
                </button>
            </PageLayout>
        );
    }
}

export default PageProjectDetails;

