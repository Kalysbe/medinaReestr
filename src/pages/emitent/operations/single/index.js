import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Navigate, useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Container } from '@mui/material';
import Swal from 'sweetalert2';

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { fetchHolders } from '../../../../redux/actions/holders';
import { fetchEmissionsByEmitentId } from '../../../../redux/actions/emissions';
import { fetchAddHolder } from '../../../../redux/actions/holders'
import { fetchCreateTransaction, fetchOperationTypes } from '../../../../redux/actions/transactions'
import { holderFormConfig, formConfig } from './const_forms'

import HolderForm from 'forms/holder/index'


const typesOrder = [
    { id: 1, name: 'Биржевая', value: true },
    { id: 2, name: 'Не биржевая', value: false }
]

const typesFamily = [
    { id: 1, name: 'Да', value: true },
    { id: 2, name: 'Нет', value: false }
]
const initHolderData = {
    name: "",
    actual_address: "",
    phone_number: "",
    passport_type: "",
    passport_number: "",
    passport_agency: "",
    inn: ""
}

const EditEmitent = () => {
    const { eid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formRef = useRef();

    const { items, status } = useSelector(state => state.holders.holders);
    const { operationTypes } = useSelector(state => state.transactions)
    const { emissions } = useSelector(state => state.emissions)
    const [config, setConfig] = useState(formConfig);
    const [isHolder, setIsHolder] = useState('true')
    const [selectedHolderId, setSelectedHolderId] = useState(null); 
    const [newHolderId, setNewHolderId] = useState(null)
    const [loading, setLoading] = useState(false);

    const optionsMap = {
        holders: items,
        stocks: emissions.items,
        typesOrder: typesOrder,
        typeOperations: operationTypes,
        typesFamily: typesFamily
    };

    const [holderData, setHolderData] = useState(initHolderData)

    const [formData, setFormData] = useState({
        operation_id: 1,
        emission_id: 0,
        is_exchange: false,
        emission: "",
        postal_address: "",
        quantity: 0,
        amount: 0,
        is_family: false,
        id_number: "",
        contract_date: "2024-06-12"
    });

    useEffect(() => {
        dispatch(fetchHolders())
        dispatch(fetchOperationTypes())
    }, [])



    useEffect(() => {
        dispatch(fetchEmissionsByEmitentId(eid))
    }, [])

    useEffect(() => {
        const newEmissionValue = emissions.items.find(item => item.id === formData.emission_id)
        if (newEmissionValue && newEmissionValue.reg_number) {
            setFormData(prevData => ({
                ...prevData,
                emission: newEmissionValue.reg_number
            }));
        }

    }, [formData.emission_id]);

    const handleChangeHolder = (e) => {
        setIsHolder(e.target.value);
    }

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'number' ? Number(value) : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };


    const handleFormSubmit = async () => {
        setLoading(true);
        try {
            if (formRef.current) {
                const holderId = await formRef.current.submitForm();
                setNewHolderId(holderId);
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            Swal.fire({
                title: 'Ошибка!',
                text: 'Произошла ошибка при отправке данных на сервер',
                icon: 'error',
                confirmButtonText: 'Ок',
            });
            setLoading(false);
        }
    };

    const handleCreateTransaction = async (holderId) => {
        try {
            const response = await dispatch(fetchCreateTransaction({ emitent_id:eid, holder_to_id: holderId, ...formData }));
            if (response.error) {
                throw new Error(response.error);
            }
            const newId = response.payload.id;

            Swal.fire({
                title: 'Успешно!',
                text: 'Данные успешно отправлены',
                icon: 'success',
                confirmButtonText: 'Ок',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/emitent/${eid}/log/stockTransaction/${newId}`);
                }
            });
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            Swal.fire({
                title: 'Ошибка!',
                text: 'Произошла ошибка при отправке данных на сервер',
                icon: 'error',
                confirmButtonText: 'Ок',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        setLoading(true);
        if (selectedHolderId) {
            handleCreateTransaction(selectedHolderId);
        } else {
            handleFormSubmit();
        }
    };

    useEffect(() => {
        if (newHolderId) {
            handleCreateTransaction(newHolderId);
        }
    }, [newHolderId]);
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Card style={{ padding: 30 }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1} mb={2}>
                    <MDBox
                        mt={-3}
                        py={1}
                        px={6}
                        variant="gradient"
                        bgColor="info"
                        borderRadius="lg"
                        coloredShadow="info"
                    >
                        <MDTypography variant="h5" color="white">
                            Одноместная операция
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDBox>
                    <MDTypography variant="h5" color="dark">
                        Карточка акционера
                    </MDTypography>

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Акционер</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={isHolder}
                            onChange={handleChangeHolder}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="Существующий" />
                            <FormControlLabel value={false} control={<Radio />} label="Новый акционер" />
                        </RadioGroup>
                    </FormControl>

                    {isHolder == 'true' ? (
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Кто принимает</InputLabel>
                            <Select
                                name="holder_to_id"
                                value={formData['holder_to_id']}
                                label='Кто принимает'
                                onChange={(e) => setSelectedHolderId(e.target.value)}
                            >
                                  <MenuItem value={0}>
                                       Выберите держателя
                                    </MenuItem>
                                {(optionsMap['holders'] || []).map(opt => (
                                    <MenuItem key={opt.id} value={opt.id}>
                                        {opt.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        <HolderForm ref={formRef} />
                    )}

                    <MDTypography variant="h5" color="dark" sx={{ my: 2 }}>
                        Детали операции
                    </MDTypography>
                    <Grid container spacing={2}>
                        {config.map(({ key, label, type, option, size, disabled }) => (
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
                </MDBox>
                <MDBox mt={4} display="flex" justifyContent="end">
                    <MDButton
                        color="error"
                        component={NavLink}
                        to='/emitent/personalData/'
                        style={{ marginRight: '12px' }}
                    >
                        Назад
                    </MDButton>
                    <MDButton
                        onClick={handleSubmit}
                        disabled={loading}
                        variant="gradient"
                        color="info"
                    >
                        Сохранить
                    </MDButton>
                </MDBox>
            </Card>
        </DashboardLayout>
    );
};

export default EditEmitent;
