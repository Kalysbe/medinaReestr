import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink, useParams } from "react-router-dom";


import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Container from '@mui/material/Container';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { CardContent, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material';

// Material Dashboard 2 React Components
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { fetchEmitentById } from '../../redux/actions/emitents';


const formData = [
    { key: 'full_name', name: 'Наименование эмитента' },
    { key: 'short_name', name: 'Номер гос. регистрации' },
    { key: 'gov_name', name: 'Орган осуществ-ший регистр' },
    { key: 'gov_number', name: 'Дата регистрации' },
    { key: 'gov_number', name: 'Орган регистрации выпуска ценных бумаг' },
    { key: 'legal_address', name: 'Адрес' },
    { key: 'phone_number', name: 'Номер телефона' },
    { key: 'email', name: 'Электронный адрес' },
    { key: 'bank_name', name: 'Наименование банка эмитента' },
    { key: 'bank_account', name: 'Счет в банке' },
    { key: 'id_number', name: 'Идентификационный номер' },
    { key: 'contract_date', name: 'Номер договора с регистратором' },
    { key: 'contract_date', name: 'Дата заключения договора' },
    { key: 'capital', name: 'Размер уставного капитала' },
    { key: 'director_registrar', name: 'Ф.И.О директора "Медина"' },
    { key: 'accountant', name: 'Ф.И.О гл. бухгалтера АО' },
    { key: 'director_company', name: 'Ф.И.О руководителя АО' }
]

function Basic() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const { emitent } = useSelector(state => state.emitents);



    useEffect(() => {
        dispatch(fetchEmitentById(id));
    }, []);

    const isEmitentLoading = emitent.status === 'loading'
    const emitentData = emitent.data

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onEdit = (edit) => {
        if (!edit) {
            setEdit(edit)
            return
        }
        setEdit(edit)
    }



    return (

        <DashboardLayout>
            <DashboardNavbar />
            <Card>
                <MDBox py={3}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1}>
                        <MDBox
                            mx={2}
                            mt={-3}
                            py={1}
                            px={6}
                            variant="gradient"
                            bgColor="info"
                            borderRadius="lg"
                            coloredShadow="info"
                        >
                            <MDTypography variant="h5" color="white">
                                Карточка эмитента
                            </MDTypography>
                        </MDBox>
                        {/* <MDBox color="text" px={2}>
                  <MDButton variant="gradient" color="dark" component={NavLink}
                    to="/add-emitent">
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    Новый Эмитент
                  </MDButton>
                </MDBox> */}
                    </MDBox>
                    {/* <Container> */}
                    <MDBox px={3} mt={2}>
                        <MDTypography align='center' variant="h3" mr={2}>  </MDTypography>
                        <Table>
                            <TableBody>
                                {formData.map((item, key) => (
                                    <TableRow key={key}>
                                        <TableCell width={'30%'}>
                                            <MDTypography variant="h6" color="dark" >
                                                {item.name}
                                            </MDTypography>
                                        </TableCell>
                                        <TableCell fullWidth>
                                                <MDTypography variant="h6" color="dark">
                                                    {emitentData[item.key]}
                                                </MDTypography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </MDBox>
                        <MDBox px={3} display="flex" alignItems="center" justifyContent="end">
                            <MDButton
                                variant="outlined"
                                color="info"
                                size="small"
                                style={{ marginRight: '12px' }}
                                component={NavLink}
                                to={`/emitent/${id}/edit`}
                            >
                                Редактировать
                            </MDButton>
                            <MDButton
                                variant="outlined"
                                color="warning"
                                size="small"
                            >
                                Печать
                            </MDButton>
                        </MDBox>
                </MDBox>
            </Card >
        </DashboardLayout >
    );
};

export default Basic;