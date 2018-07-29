import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Form, Button, Icon} from 'antd';
import {loginFields} from '../../fields/loginFields'
import renderFields from '../../../../components/inputs/index';

let LoginForm = (props) => {
    const {handleSubmit, submitting} = props;

    return (
        <Form onSubmit={handleSubmit(props.login)} className="login-form">
        {
            loginFields.map((field, key)=> (
                <Field component={renderFields} key={key} {...{...field}}/>
            )
        )}
            <Button type="primary" htmlType="submit" className="login-form-button" loading={submitting}>Login</Button>
        </Form>
    );
};

// export default LoginForm
// export default LoginPage
LoginForm = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginForm;

