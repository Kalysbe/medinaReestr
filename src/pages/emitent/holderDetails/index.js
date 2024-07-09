// Basic.js
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink, useParams } from "react-router-dom";
import { Grid, Card, Container, Table, TableBody, TableRow, TableCell } from '@mui/material';

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { fetchHolderById } from '../../../redux/actions/holders';
import { fetchExtractReestr } from '../../../redux/actions/prints';
import ExtractReestr from 'print/emitent/ExtractReestr';
import { useReactToPrint } from 'react-to-print';

const formData = [
    { key: 'name', name: 'Наименование' },
    { key: 'actual_address', name: 'Фактический адрес' },
    { key: 'email', name: 'Почта' },
    { key: 'inn', name: 'ИНН' },
    { key: 'legal_address', name: 'Юридический адрес' },
    { key: 'passport_agency', name: 'Орган выдачи' },
    { key: 'passport_number', name: 'Номер паспорта' },
    { key: 'passport_type', name: 'Тип паспорта' },
    { key: 'phone_number', name: 'Номер телефона' }
]

function Basic() {
    const { eid, hid } = useParams();
    const dispatch = useDispatch();
    const holder = useSelector(state => state.holders.holder);
    const {extractReestr} = useSelector(state => state.prints.prints);
    const printData = extractReestr?.data;
    console.log(printData,'pri')
    const holderData = holder.data;
    const printRef = useRef();

    useEffect(() => {
        dispatch(fetchHolderById(hid));
        dispatch(fetchExtractReestr({ eid: eid, hid: hid }));
    }, [dispatch, eid,hid]);

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

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
                                Держатель
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox px={3} mt={2}>
                        <MDTypography align='center' variant="h3" mr={2}></MDTypography>
                        <Table>
                            <TableBody>
                                {formData.map((item, key) => (
                                    <TableRow key={key}>
                                        <TableCell width={'30%'}>
                                            <MDTypography variant="h6" color="dark">
                                                {item.name}
                                            </MDTypography>
                                        </TableCell>
                                        <TableCell fullWidth>
                                            <MDTypography variant="h6" color="dark">
                                                {holderData[item.key]}
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
                            color="warning"
                            size="small"
                            onClick={handlePrint}
                        >
                            Печать
                        </MDButton>
                    </MDBox>
                </MDBox>
            </Card>
            {printData && hid && (
            <div style={{ display: 'none' }}>
                <ExtractReestr ref={printRef} data={printData}/>
            </div>
            )}
        </DashboardLayout>
    );
}

export default Basic;
