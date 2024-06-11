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
import { fetchCreateTransaction, fetchOperationTypes } from '../../../../redux/actions/transactions'

const formConfig = [
    { key: "holder_from_id", label: "Кто отдает ", type: "list", option: 'holders', size: 6 },
    { key: "holder_to_id", label: "Кто принимает", type: "list", option: 'holders', size: 6 },
    { key: "emission_id", label: "Эмиссия для передачи", type: "list", option: 'stocks', size: 12 },
    { key: "is_exchange", label: "Вид сделки", type: "list", option: 'typesOrder', size: 4 },
    { key: "emission", label: "Эмиссия", type: "text", size: 4 },
    { key: "postal_address", label: "Вид акций", type: "text", size: 4 },
    { key: "operation_id", label: "Операция", type: "list", option: 'typeOperations', size: 4 },
    { key: "quantity", label: "Количество", type: "number", size: 4 },
    { key: "amount", label: "Сумма сделки", type: "number", size: 4 },
    { key: "is_family", label: "Признак родственника", type: "list",option:'typesFamily', size: 4 },
    { key: "id_number", label: "Документ", type: "text", size: 4 },
    { key: "contract_date", label: "Дата операции", type: "date", size: 4 },



];

const stocks = [
    { id: 1, name: 'KG0101139234', type: 'простые именные', count: 12 },
    { id: 2, name: 'KG0101016010', type: 'простые именные', count: 20 },
];

const typesOrder = [
    { id: 1, name: 'Биржевая', value:true },
    { id: 2, name: 'Не биржевая',value:false }
]

const typesFamily = [
    { id: 1, name: 'Да', value:true },
    { id: 2, name: 'Нет',value:false }
]

const EditEmitent = () => {
    const { eid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, status } = useSelector(state => state.holders.holders);
    const { operationTypes } = useSelector(state => state.transactions)



    const optionsMap = {
        holders: items,
        stocks: stocks,
        typesOrder: typesOrder,
        typeOperations: operationTypes,
        typesFamily: typesFamily
    };

    

    const [formData, setFormData] = useState(
     {}
    );

    useEffect(() => {
        dispatch(fetchHolders())
        dispatch(fetchOperationTypes())
    }, [])

    const [loading, setLoading] = useState(false);



    const handleChange = (e) => {
        const { name, value,type } = e.target;

        const newValue = type === 'number' ? Number(value) : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
        console.log(formData)
    };

    const handleSubmit = async () => {
        console.log(eid)
        setLoading(true);
        const emitent_id = Number(eid);
        try {
            await dispatch(fetchCreateTransaction({emitent_id, ...formData}));
            Swal.fire({
                title: 'Успешно!',
                text: 'Данные успешно отправлены',
                icon: 'success',
                confirmButtonText: 'Ок',
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
                            Операция передача акций
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <form>
                    <MDBox>
                        <Grid container spacing={2}>
                            {formConfig.map(({ key, label, type, option, size }) => (
                                <Grid sm={12} md={size} item key={key}>
                                    {type === 'list' ? (
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                                            <Select
                                                name={key}
                                                value={formData[key]}
                                                label={label}
                                                onChange={handleChange}
                                            >

                                                {(optionsMap[option] || []).map(opt => (
                                                    <MenuItem key={opt.id} value={key == 'is_exchange' || key == 'is_family' ? opt.value : opt.id}>{opt.name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    ) : type === 'date' ? (
                                        <MDInput
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
