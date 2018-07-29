import React, { Component } from 'react';
import { Input } from 'antd';

export class text extends Component {
    render() {
        const { label, placeholder, input, ...restOfProps } = this.props;
        return(
            <Input {...input} {...{ ...restOfProps }} placeholder={placeholder||label}/>
        );

    }
}
