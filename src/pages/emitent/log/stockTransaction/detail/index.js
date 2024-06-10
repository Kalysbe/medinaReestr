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
import { fetchTransactionById } from '../../../../../redux/actions/transactions';
import { fetchTransactionPrintById } from '../../../../../redux/actions/prints';

import CircularProgress from '@mui/material/CircularProgress';

import Transfer from 'print/emitent/Transfer';
import { useReactToPrint } from 'react-to-print';


function Basic() {
    const { tid } = useParams();
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.transactions.transaction);
    const { printData, printStatus } = useSelector(state => state.prints.prints);


    const printRef = useRef();

    useEffect(() => {
        dispatch(fetchTransactionById(tid));
        dispatch(fetchTransactionPrintById(tid))
    }, [dispatch, tid]);

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
                                Детали транзакции
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox px={3} mt={2}>
                        <MDTypography align='center' variant="h3" mr={2}>  </MDTypography>
                       
                        {status === "loading" && tid ? (
                            <MDBox py='30px' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress color='info' size='80px' /> {status}
                            </MDBox>) : (
                                 <MDBox sx={{ minWidth: 275, margin: 2 }}>
                                
                                   <MDTypography variant="h5" component="div" align="center">
                                     ПЕРЕДАТОЧНОЕ РАСПОРЯЖЕНИЕ
                                   </MDTypography>
                         
                                   <MDTypography variant="h5" component="div" align="center">
                                     ЗАО "Энар"
                                   </MDTypography>
                         
                                   <Grid container spacing={2} sx={{ mt: 2 }}>
                                     <Grid item xs={12}>
                                        {data.holder_from && (
                                            <>
                                       <MDTypography variant="h6" component="div">
                                         Лицо передающее ценные бумаги
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Ф.И.О: {data.holder_from.name}
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Лицевой счет: 40
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Документ серии: ID
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Номер: 2706347, выдан: МКК 218061, 29.03.2022
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Адрес: 724800 Сокулукский р-н,с.Сокулук,ул.Больничная,27
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Отношение к акциям: владелец акций
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Телефон, факс: 22608195910026
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         ИНН: 
                                       </MDTypography>
                                       </>)}
                                     </Grid>
                         
                                     <Grid item xs={12}>
                                     {data.holder_to && (
                                            <>
                                       <MDTypography variant="h6" component="div">
                                         Лицо приобретающее ценные бумаги
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Ф.И.О: {data.holder_to.name}
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Лицевой счет: {data.holder_to.id}
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Документ серии: {data.holder_to.passport_type}
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Номер: {data.holder_to.passport_number}
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Выдан: <strong> {data.holder_to.passport_agency}</strong>
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Адрес: 720015 г.Бишкек, ул.Восьмого Марта,16
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Отношение к акциям: владелец акций
                                       </MDTypography>
                                       <MDTypography variant="body2" color="text.secondary">
                                         Телефон, факс: 27-99-07
                                       </MDTypography>
                                       </>
                                     )}
                                     </Grid>
                                   </Grid>
                         
                                   <MDTypography variant="h6" component="div" sx={{ mt: 2 }}>
                                     Передаваемые ценные бумаги
                                   </MDTypography>
                         
                                   <MDTypography variant="body2" color="text.secondary">
                                     Эмитент: ЗАО "Энар"
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Вид ценных бумаг: простые именные
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Эмиссия: KG0102011416
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Операция: Дарение
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Количество: 1
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Сумма сделки: 0.00
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Дата сделки: 31.01.2024
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Основание перехода права собственности: Договор дарения
                                   </MDTypography>
                                   <MDTypography variant="body2" color="text.secondary">
                                     Передаваемые ценные бумаги не обременены обязательствами
                                   </MDTypography>
                         
                                  
                    
                              
                               </MDBox>
                        )}
                    </MDBox>
                    <MDBox px={3} display="flex" alignItems="center" justifyContent="end">
                        <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            style={{ marginRight: '12px' }}
                            component={NavLink}
                            to={`/emitent/${tid}/edit`}
                        >
                            Назад
                        </MDButton>
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
            {printStatus === "loaded" && tid && (
            <div style={{ display: 'none' }}>
                <Transfer ref={printRef} data={printData} status={printStatus} />
            </div>
            )}
        </DashboardLayout>
    );
}

export default Basic;
