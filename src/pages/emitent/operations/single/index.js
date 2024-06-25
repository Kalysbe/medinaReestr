import React, { useEffect, useState } from 'react';
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

import { selectIsAuth } from '../../../../redux/slices/auth';
import { fetchHolders } from '../../../../redux/actions/holders';
import { fetchEmissionsByHolderId ,fetchEmissionsByEmitentId } from '../../../../redux/actions/emissions';
import { fetchCreateTransaction, fetchOperationTypes } from '../../../../redux/actions/transactions'

let formConfig = [
    { key: "operation_id", label: "Операция", type: "list", option: 'typeOperations', size: 12, disabled: false },
    { key: "holder_to_id", label: "Кто принимает", type: "list", option: 'holders', size: 6, disabled: false },
    { key: "emission_id", label: "Эмиссия для передачи", type: "list", option: 'stocks', size: 12, disabled: true },
    { key: "is_exchange", label: "Вид сделки", type: "list", option: 'typesOrder', size: 4, disabled: false },
    { key: "emission", label: "Эмиссия", type: "text", size: 4, disabled: true },
    { key: "postal_address", label: "Вид акций", type: "text", size: 4, disabled: true },
    { key: "quantity", label: "Количество", type: "number", size: 4, disabled: false },
    { key: "amount", label: "Сумма сделки", type: "number", size: 4, disabled: false },
    { key: "is_family", label: "Признак родственника", type: "list", option: 'typesFamily', size: 4, disabled: false },
    { key: "id_number", label: "Документ", type: "text", size: 4, disabled: false },
    { key: "contract_date", label: "Дата операции", type: "date", size: 4, disabled: false },
];


const typesOrder = [
    { id: 1, name: 'Биржевая', value: true },
    { id: 2, name: 'Не биржевая', value: false }
]

const typesFamily = [
    { id: 1, name: 'Да', value: true },
    { id: 2, name: 'Нет', value: false }
]

const EditEmitent = () => {
    const { eid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, status } = useSelector(state => state.holders.holders);
    const { operationTypes } = useSelector(state => state.transactions)
    const { emissions } = useSelector(state => state.emissions)
    const [config, setConfig] = useState(formConfig);
    const [loading, setLoading] = useState(false);
  




    const optionsMap = {
        holders: items,
        stocks: emissions.items,
        typesOrder: typesOrder,
        typeOperations: operationTypes,
        typesFamily: typesFamily
    };



    const [formData, setFormData] = useState({
        "operation_id": "",
        "holder_to_id": 0,
        "emission_id": "",
        "is_exchange": false,
        "emission": "test",
        "postal_address": "",
        "quantity": 0,
        "amount": 0,
        "is_family": "",
        "id_number": "",
        "contract_date": "2024-06-12"
    });

    useEffect(() => {
        dispatch(fetchHolders())
        dispatch(fetchOperationTypes())
    }, [])

   
    
    useEffect(() => {
        if(formData.operation_id === 1) {
            dispatch(fetchEmissionsByEmitentId(eid))
        }
       

    }, [formData.operation_id])

    useEffect(() => {
        const newEmissionValue = emissions.items.find(item => item.id === formData.emission_id)

        if(newEmissionValue && newEmissionValue.reg_number) {
            setFormData(prevData => ({
                ...prevData,
                emission: newEmissionValue.reg_number
            }));
        }
      
    }, [formData.emission_id]);
    





    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'number' ? Number(value) : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        const emitent_id = Number(eid);
        try {
            const response = await dispatch(fetchCreateTransaction({ emitent_id, ...formData }));
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
                    navigate(`/emitent/${eid}/log/stockTransaction/${newId}`) 
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
                <form>
                    <MDBox>
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
                                            defaultValue='12.12.2024'
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
                </form>
            </Card>
        </DashboardLayout>
    );
};

export default EditEmitent;
