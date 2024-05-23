
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
        <div>
            {company.name}
            {company.gov_name}
            {company.gov_number}
            {company.license}
            {company.phone_number}
        </div>
    );
};

export default ReestrData;
