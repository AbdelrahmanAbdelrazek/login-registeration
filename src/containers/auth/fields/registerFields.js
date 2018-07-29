import { required, email, maxLength15, minLength3 } from '../validations/index';
import { Icon } from 'antd';
import React from 'react';

export const registerFields = [
    {
        name: "name",
        fields: [{
            label: "First Name",
            name: "firstName",
            validate: [required, maxLength15, minLength3],
            prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
        },
        {
            label: "Last Name",
            name: "lastName",
            validate: [required, maxLength15, minLength3],
            prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
        }]
    },
    {

        label: "Email",
        name: "email",
        placeholder: "example@domain.com",
        validate: [required, email],
        prefix: <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />

    },
    {
        label: "Password",
        name: "password",
        type: "password",
        validate: [required],
        prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />

    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        validate: [required],
        prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
    }
]
