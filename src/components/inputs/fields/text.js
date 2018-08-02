import React, { Component } from 'react';
import { Input } from 'antd';

export class text extends Component {
    render() {
        const { label, placeholder, input } = this.props;
        return(
            <Input {...input} {...this.props } placeholder={placeholder||label}/>
        );

    }
}
