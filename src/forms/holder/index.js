import React, { useEffect, useState, forwardRef, useImperativeHandle  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import MDInput from "components/MDInput";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { fetchAddHolder } from '../../redux/actions/holders'
import { holderFormConfig, formConfig } from './const_forms'

const initHolderData = {
    name: "",
    actual_address: "",
    phone_number: "",
    passport_type: "",
    passport_number: "",
    passport_agency: "",
    inn: ""
}

const FormComponent = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initHolderData);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'number' ? Number(value) : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const handleSubmit = async () => {
        try {
            const holderResponse = await dispatch(fetchAddHolder(formData));
            if (holderResponse.error) {
                throw new Error(holderResponse.error);
            }
            const holder_to_id = holderResponse.payload.id
            return holder_to_id
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        } finally {}
    };

    useImperativeHandle(ref, () => ({
        submitForm: handleSubmit
    }));

    return (
        <Grid container spacing={2}>
            {holderFormConfig.map(({ key, label, type, option, size, disabled }) => (
                <Grid sm={12} md={size} item key={key}>
                    {type === 'list' ? (
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                            <Select
                                disabled={disabled}
                                name={key}
                                value={formData[key]}
                                label={label}
                                onChange={handleChange}
                            >

                                {(optionsMap[option] || []).map(opt => (
                                    <MenuItem key={opt.id} value={key == 'is_exchange' || key == 'is_family' ? opt.value : opt.id}>
                                        {key == 'emission_id' ? opt.reg_number : opt.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    ) : type === 'date' ? (
                        <MDInput
                            disabled={disabled}
                            fullWidth
                            label={label}
                            type={type}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />

                    ) : (

                        <MDInput
                            disabled={disabled}
                            fullWidth
                            label={label}
                            type={type}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />

                    )}
                </Grid>
            ))}
        </Grid>
    );
});

export default FormComponent;
