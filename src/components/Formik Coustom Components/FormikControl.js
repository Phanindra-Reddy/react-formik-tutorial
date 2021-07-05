
import React from 'react'
import ChakraInput from './ChakraInput'
import CheckboxBtns from './CheckboxBtns'
import DatePicker from './DatePicker'
import Input from './Input'
import RadioBtns from './RadioBtns'
import SelectDropdown from './SelectDropdown'
import TextArea from './TextArea'

function FormikControl(props) {

    const {control, ...rest} = props

    switch( control ){
        case 'input':
            return <Input {...rest }/>
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <SelectDropdown {...rest} />
        case 'radio':
            return <RadioBtns {...rest} />
        case 'checkbox':
            return <CheckboxBtns {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        case 'chakrainput':
            return <ChakraInput {...rest} />
        default: 
            return null;
    }
}

export default FormikControl;




