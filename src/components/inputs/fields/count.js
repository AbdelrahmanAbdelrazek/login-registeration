import React, { Component } from 'react';
import { Input } from 'antd';
import {Field} from 'redux-form';
import {text} from './text';
import {Counter} from './counter';
export class Count extends Component {
    render() {
        const { label, placeholder, input: {name}, ...restOfProps} = this.props;
        return(
            <div>
                <Field component={text} {...restOfProps} name={`${name}.category`}/>
                <Field component={Counter} {...restOfProps} name={`${name}.number`}/>
            </div>
        );

    }
}
