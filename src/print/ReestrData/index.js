
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

    const styles = {
        container: {
          fontFamily: 'Arial, sans-serif',
          margin: '10px',
          marginLeft:'50px',
          padding: '10px',
          border: '2px solid #000',
          maxWidth: '90%',
        //   margin: 'auto',
        },
        header: {
          textAlign: 'center',
          margin: '5px',
        },
        section: {
          marginBottom: '20px',
        },
        sectionTitle: {
          fontWeight: 'bold',
          marginBottom: '5px',
        },
        infoTable: {
          width: '100%',
          borderCollapse: 'collapse',
        },
        tableCell: {
          border: '1px solid #000',
          padding: '2px',
          textAlign: 'left',
          fontSize: '11px',
        },
        tableHeader: {
          border: '1px solid #000',
          padding: '2px',
          backgroundColor: '#f2f2f2',
          textAlign: 'center',
          fontSize: '11px',
        },
        nowrap: {
          whiteSpace: 'nowrap',
        },
        dottedLine: {
          borderBottom: '1px border #000',
        },
        textRight: {
          textAlign: 'right',
        },
      };

function ReestrData() {
    const data = useSelector(state => state.auth.data.user.company);
    console.log(data, 'print')
    return (
        <div style={styles.section}>
           <h6 style={styles.sectionTitle}>ДЕРЖАТЕЛЬ РЕЕСТРА АКЦИОНЕРОВ:{data.name}</h6>
           <table style={styles.infoTable}>
      <tbody>
        <tr>
          <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Орган государственной регистрации:</strong></td>
          <td style={{ ...styles.tableCell, ...styles.dottedLine }}>{data.gov_name}</td>
        </tr>
        <tr>
          <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Регистрационный номер:</strong></td>
          <td style={{ ...styles.tableCell, ...styles.dottedLine }}>{data.gov_number}</td>
        </tr>
        <tr>
          <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Лицензия:</strong></td>
          <td style={{ ...styles.tableCell, ...styles.dottedLine }}>№143 от 20.12.2013 г., Гос. служба регулир. и надзора за фин. рынком КР</td>
        </tr>
        <tr>
          <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Юридический адрес:</strong></td>
          <td style={{ ...styles.tableCell, ...styles.dottedLine }}>720001 пр. Манаса 40, каб 324, тел 90-06-43, 31-17-65, 90-06-42</td>
        </tr>
      </tbody>
    </table>
        </div>
        
    );
};

export default ReestrData;
