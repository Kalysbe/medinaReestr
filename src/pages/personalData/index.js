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
    const { emitent } = useSelector(state => state.emitents);



    useEffect(() => {
        dispatch(fetchEmitentById(id));
    }, []);

    const isEmitentLoading = emitent.status === 'loading'
    const emitentData = emitent.data



    console.log(emitentData)

    return (

        <DashboardLayout>
            <DashboardNavbar />
            <Card py={2}>
            <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
                <MDBox
                    variant="gradient"
                    bgColor={'info'}
                    color={ "white" }
                    coloredShadow={'light'}
                    borderRadius="xl"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="4rem"
                    height="4rem"
                    mt={-3}
                >
                    <Icon fontSize="medium" color="inherit">
                    person
                    </Icon>
                </MDBox>
                <MDBox textAlign="right" lineHeight={1.25}>
                    <MDTypography variant="h4">Карточка эмитента</MDTypography>
                </MDBox>
            </MDBox>
            {/* <Container> */}
                
                    <MDBox px={3} mt={2}>
                        <MDTypography align='center' variant="h3" mr={2}>  </MDTypography>
                        <Grid container spacing={2}>
                            {formData.map((item, key) => (
                                <Grid sm={12} md={12} item key={key}>
                                    <MDBox display="flex" alignItems="center">
                                        <MDTypography variant="h6" mr={2}> {item.name}: </MDTypography>
                                        <MDTypography variant="h6">  {emitentData[item.key]}</MDTypography>
                                    </MDBox>
                                </Grid>
                            ))}
                        </Grid>
                    </MDBox>
                    <MDBox px={3} display="flex" alignItems="center" justifyContent="end">
                        <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            style={{marginRight:'12px'}}
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
            {/* </Container> */}
            </Card>
        </DashboardLayout>
    );
};

export default Basic;