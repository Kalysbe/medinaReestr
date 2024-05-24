
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardEmitent } from '../../redux/actions/prints';

import MDTypography from "components/MDTypography";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const company = {
        "id": 1,
        "name": "ОсОО Реестродержатель Медина",
        "gov_name": "Чуй-Бишкекское Упралвение юстиции",
        "gov_number": "133580-3301-000 от 09.12.2013 год",
        "license": "№1430 от 20.12.2013 г. Гос. служба регуляр. и надзор за фин. рынок КР",
        "legal_address": "string",
        "phone_number": "720001 пр. Манаса 40, каб 324, тел 90-06-43, 31-17-65, 90-06-42"
    }


function ReestrData() {
    const data = useSelector(state => state.auth.data);
    console.log(data, 'print')
    return (
        <div style={{  padding: 15}}>
            <h5>Держатель реестра:</h5>
            <b>{company.name}</b><br></br>
            <span>Орган государственной регистрации: &nbsp;<b>{company.gov_name}</b></span><br></br>
            <span>Регистрационный номеар: &nbsp;<b>{company.gov_number}</b></span><br></br>
            <span>Лицензия: &nbsp;<b>{company.license}</b></span><br></br>
            <span>Юридический адрес: &nbsp;<b>{company.phone_number}</b></span><br></br>
        </div>
    );
};

export default ReestrData;
