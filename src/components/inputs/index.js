import React, { Component } from 'react';
import { Form } from 'antd';
import { get } from 'lodash';
import * as FieldsComponent from './fields';


class renderFields extends Component {
    constructor(props) {
        super(props);
        this.FieldComponent = get(FieldsComponent, props.field, FieldsComponent.text);

    }


    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 5 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 12 },
            },
          };
        const { FieldComponent } = this;
        const { label, meta: { touched, error } } = this.props;
        console.log(touched)
        return (
            <Form.Item
                label={label}
                {...formItemLayout}
                hasFeedback
                validateStatus={(touched && error) ? 'error' : null}
                help={touched && error}
            >
                <FieldComponent {...this.props} />
            </Form.Item>
        );
    }
}

export default renderFields;