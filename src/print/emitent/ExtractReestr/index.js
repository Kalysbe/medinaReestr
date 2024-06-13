import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReestrData from '../../ReestrData'
import { Box, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@mui/material';
import MDTypography from "components/MDTypography";

const EmitentCard = React.forwardRef((props, ref) => {
    const { printData } = props;
    const { emitent, holder, emission } = printData

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
        line: {
          borderBottom: '1px border #000',
      },
      };



    return (
        <Box ref={ref} p={2}>



<div style={styles.container}>
      <h5 style={styles.header}>ВЫПИСКА ИЗ РЕЕСТРА</h5>
      
      <div style={styles.section}>
        <table style={styles.infoTable}>
          <tbody>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Эмитент:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{emitent.full_name}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Зарегистрирован:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{emitent.gov_name}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Номер:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{emitent.gov_number}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Адрес:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{emitent.legal_address}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Лицевой счет 53</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>Ф.И.О.: Алаев Руслан Декабрьевич</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Адрес:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>г. Кон-Джар, ул. Юнус Осмона, 130</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Документ:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>серия AN номер 2559777 выдан МКК 50-58 29.09.2011</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Отношение к акциям:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>владелец акций</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Расчетный счет:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>......</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h6 style={styles.sectionTitle}>СПИСОК ЭМИССИЙ АКЦИЙ</h6>
        <table style={styles.infoTable}>
          <thead>
            <tr>
              <th style={styles.tableHeader} rowSpan="4">эмиссия</th>
              <th style={styles.tableHeader} rowSpan="4">регистрационный номер</th>
              <th style={styles.tableHeader} rowSpan="4">вид акций</th>
              <th style={styles.tableHeader} rowSpan="4">наличие акций</th>
              <th style={styles.tableHeader} rowSpan="4">номинал акций (сом)</th>
              <th style={styles.tableHeader} rowSpan="4">сумма по номинальной стоимости акций (сом)</th>
              <th style={styles.tableHeader} rowSpan="4">акции в залоге</th>
              <th style={styles.tableHeader} rowSpan="4">акции принятые в залог</th>
              <th style={styles.tableHeader} rowSpan="4">блокированные акции</th>        
            </tr>
          </thead>

          {emission && (
                        <tbody>
                            {emission.map((item, index) => (
                                <tr key={index}>
                                    <td style={styles.tableCell}>{item.id}</td>
                                    <td style={styles.tableCell}>{item.reg_number}</td>
                                    <td style={styles.tableCell}>простые</td>
                                    <td style={styles.tableCell}>{Number(item.start_nominal).toFixed(4)}</td>
                                    <td style={styles.tableCell}>{item.start_count}</td>
                                    <td style={styles.tableCell}>{Number(item.splitting).toFixed(2)}</td>
                                    <td style={styles.tableCell}>{Number(item.new_nominal).toFixed(2)}</td>
                                    <td style={styles.tableCell}>{item.new_count}</td>
                                    <td style={styles.tableCell}>{item.new_count}</td>
                                </tr>
                            ))} 
            <tr>
              <td style={{ ...styles.tableCell, ...styles.textRight }} rowSpan="2"><strong>ИТОГО:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.nowrap }} colSpan="2x"><strong>простые акции</strong></td>
              <td style={styles.tableCell}>131532</td>
              <td style={styles.tableCell}></td>
              <td style={styles.tableCell}>122715</td>
              <td style={styles.tableCell}>0</td>
              <td style={styles.tableCell}>0</td>
              <td style={styles.tableCell}>0</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }} colSpan="2"><strong>привилегированные</strong></td>
              <td style={styles.tableCell}>0</td>
              <td style={styles.tableCell}></td>
              <td style={styles.tableCell}>122715</td>
              <td style={styles.tableCell}>0</td>
              <td style={styles.tableCell}>0</td>
              <td style={styles.tableCell}>0</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }} colSpan="3"><strong>% от общего количества выпущенных акций</strong></td>
              <td style={styles.tableCell}>10.263662</td>
              <td style={styles.tableCell}></td>
              <td style={styles.tableCell}></td>
              <td style={styles.tableCell}></td>
              <td style={styles.tableCell}></td>
              <td style={styles.tableCell}></td>
            </tr>
            </tbody>
                    )}
        </table>
      </div>

      <div style={styles.section}>
        <h6 style={styles.sectionTitle}>всего на 14.05.2024</h6>
        <table style={styles.infoTable}>
          <tbody>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>акций:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>13500 (тринадцать тысяч пятьсот) сом</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>стоимость:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>122715.00 (сто двадцать две тысячи семьсот пятнадцать сом) сом</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>из них свободных от обязательств:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>13500 (тринадцать тысяч пятьсот) сом</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>стоимость:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>122715.00 (сто двадцать две тысячи семьсот пятнадцать сом) сом</td>
            </tr>
          </tbody>
        </table>
      </div>


    <ReestrData>
      
    </ReestrData>
          <div style={styles.section}>
            <div>
            <label style={{borderTop: '1px solid #000', fontSize: '14px', width: '300px'}}>Ф.И.О. уполномоченного лица</label>
            <label>МП</label>
             <label style={{borderTop: '1px solid #000', fontSize: '14px', }}>подпись</label>
            </div>
             <p style={{fontSize: '12px'}}>ПРИМЕЧАНИЕ:</p>
             <p style={{fontSize: '10px'}}> Выписка из реестра акционеров, выдаваемая регистратором – это документ,
 подтверждающий запись в реестре. Выписка не является ценной бумагой и передача ее от одного лица другому не влечет перехода собственности на акции.
             </p>
          </div>
    </div>
        </Box >
    );
});

export default EmitentCard;
