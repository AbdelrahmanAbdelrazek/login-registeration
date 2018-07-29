import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Form, Button, Icon} from 'antd';
import renderFields from '../../../../components/inputs/index';
import {registerFields} from '../../fields/registerFields';
import validate from './validations';

let RegisterForm = (props) => {
    const { handleSubmit, submitting } = props;
    return (
        <Form onSubmit={handleSubmit(props.signup)}>
            {
                registerFields.map((field, key)=> {
                    <Field component={renderFields} key={key} {...{...field}}/>
                })
            }
            <Button type="primary" htmlType="submit" className="login-form-button" loading={submitting}>Sumbit</Button>
        </Form>
    );
};



RegisterForm = reduxForm({
    form: 'register',
    validate
})(RegisterForm)

export default RegisterForm;

