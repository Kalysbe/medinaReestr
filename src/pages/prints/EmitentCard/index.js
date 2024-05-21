import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardEmitent } from '../../../redux/actions/prints';
import ReestrData from '../ReestrData'
import { Box, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@mui/material';
import MDTypography from "components/MDTypography";

const EmitentCard = React.forwardRef((props, ref) => {
    const { id } = props;
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.prints.prints);
    const EmitentData = data.emitent

    useEffect(() => {
        dispatch(fetchCardEmitent(id));
    }, [dispatch, id]);

    if (status === 'loading') {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
            </Box>
        );
    }

    if (status === 'failed') {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <MDTypography variant="h6" color="error">
                    Error: {error}
                </MDTypography>
            </Box>
        );
    }

    console.log(data.emitent)

    return (
        <Box ref={ref} p={2}>


          
            <div style={{ border: "solid" }}>
                <h4 style={{ textAlign: "center" }}>КАРТОЧКА ЭМИТЕНТА</h4>
                <p style={{ paddingLeft: 15 }}>
                    Полное наименование:{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.full_name}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Краткое наименование:{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.short_name}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Орган государственной регистрации:{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.gov_name}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Номер и дата государственной регистрации:{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.gov_number}
                        10216-3301-ЗАО 01.01.2016 г.
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Юридический адрес:{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.legal_address}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Почтовый адрес ..:{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.postal_address}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Номер телефона, факса .....{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.phone_number}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Электроный адрес .............{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.email}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Банк эмитента ....................{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.bank_name}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Счет в банке .......................{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.bank_account}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Идентификационный номер{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.id_number}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Размер капитала ................{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.capital}
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Форма выпуска ценных бумаг
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        в форме записей на счетах
                    </a>
                </p>
                <p style={{ paddingLeft: 15 }}>
                    Дата заключения договора с регистратором{" "}
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        {EmitentData.contract_date}
                    </a>
                </p>


          

            <div>
                <h5 style={{ paddingLeft: '40px' }}>СПИСОК ЭМИССИЙ АКЦИЙ </h5>
                <table>
                    <thead style={{ display: 'table-header-group' }}>
                        <tr>
                            <th colspan="3">эмиссия акции</th>
                            <th rowspan="2">категория (тип) ценных бумаг</th>
                            <th rowspan="2">начальный номинал акции</th>
                            <th rowspan="2">начальное колич-во акций</th>
                            <th rowspan="2">К дробл</th>
                            <th rowspan="2">новый номинал акции</th>
                            <th rowspan="2">новое колич-во акций</th>
                            <th rowspan="2">количество фактически</th>

                        </tr>

                        <tr>
                            <td>номер</td>
                            <td>дата</td>
                            <td>рег. номер</td>
                        </tr>
                    </thead>
                    {data?.emissions && (
                        <tbody>
                            {data.emissions.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.release_date}</td>
                                    <td>{item.reg_number}</td>
                                    <td></td>
                                    <td>{item.start_nominal}</td>
                                    <td>{item.start_count}</td>
                                    <td>{item.splitting}</td>
                                    <td>{item.new_nominal}</td>
                                    <td>{item.new_count}</td>
                                    <td>{item.new_count}</td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>

   




            <ReestrData />
            </div>
        </Box >
    );
});

export default EmitentCard;
