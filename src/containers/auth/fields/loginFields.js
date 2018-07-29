import { required, email } from '../validations/index';
import { Icon } from 'antd';
import React from 'react';


export const loginFields = [
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
    }
]
