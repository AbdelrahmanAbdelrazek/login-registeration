import React, { Component } from 'react';
import { Input, Button} from 'antd';

export class Counter extends Component {
    
    render() {
        let { label, placeholder, input:{value, onChange, onBlur, ...input}, ...restOfProps } = this.props;
        return(
            <div>
                <Button type="Button" {...this.props} onClick={(ev)=>{onChange(Number(value)+1); console.log('ete', value)} }>+</Button>
                <h2>{value}</h2>
                <Button type="Button" {...this.props} onClick={(ev)=>{value = Number(value)-1; console.log('ete', input);onBlur(value)} } >-</Button>
            </div>
        );

    }
}
