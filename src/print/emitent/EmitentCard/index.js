import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardEmitent } from '../../../redux/actions/prints';
import ReestrData from '../../ReestrData'
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
    

    console.log(EmitentData)

    return (
        <Box ref={ref} p={2}>

<div style={styles.container}>
      <h5 style={styles.header}>КАРТОЧКА ЭМИТЕНТА</h5>
      
      <div style={styles.section}>
        <table style={styles.infoTable}>
          <tbody>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Полное наименование:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.full_name}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Краткое наименование:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.short_name}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Орган государственной регистрации:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.gov_name}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Номер и дата государственной регистрации:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.gov_number}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Юридический адрес:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.legal_address}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Почтовый адрес:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.postal_address}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Номер телефона, факса:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.phone_number}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Электронный адрес:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.email}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Банк эмитента:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.bank_name}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Счет в банке:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.bank_account}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Идентификационный номер:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.id_number}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Размер капитала:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.capital}</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Форма выпуска ценных бумаг:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>в форме записей на счетах</strong></td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Дата заключения договора с регистратором:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}><strong>{EmitentData.contract_date}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h6 style={styles.sectionTitle}>СПИСОК ЭМИССИЙ АКЦИЙ</h6>
        <table style={styles.infoTable}>
          <thead>
            <tr>
              <th style={styles.tableHeader} colSpan="3">Эмиссия акций</th>
              <th style={styles.tableHeader} rowSpan="2">Категория (тип) ценных бумаг</th>
              <th style={styles.tableHeader} rowSpan="2">Начальный номинал акций</th>
              <th style={styles.tableHeader} rowSpan="2">Начальное колич-во акций</th>
              <th style={styles.tableHeader} rowSpan="2">К дробл</th>
              <th style={styles.tableHeader} rowSpan="2">Новое номинал акции</th>
              <th style={styles.tableHeader} rowSpan="2">Новое колич-во акций</th>
              <th style={styles.tableHeader} rowSpan="2">Количество фактически</th>
            </tr>
            <tr>
              <th style={styles.tableHeader}>номер</th>
              <th style={styles.tableHeader}>дата</th>
              <th style={styles.tableHeader}>рег. номер</th>
            </tr>
          </thead>
          {data?.emissions && (
                        <tbody>
                            {data.emissions.map((item, index) => (
                                <tr key={index}>
                                    <td style={styles.tableCell}>{item.id}</td>
                                    <td style={styles.tableCell}>{item.release_date}</td>
                                    <td style={styles.tableCell}>{item.reg_number}</td>
                                    <td style={styles.tableCell}>простые именные</td>
                                    <td style={styles.tableCell}>{Number(item.start_nominal).toFixed(4)}</td>
                                    <td style={styles.tableCell}>{item.start_count}</td>
                                    <td style={styles.tableCell}>{Number(item.splitting).toFixed(2)}</td>
                                    <td style={styles.tableCell}>{Number(item.new_nominal).toFixed(2)}</td>
                                    <td style={styles.tableCell}>{item.new_count}</td>
                                    <td style={styles.tableCell}>{item.new_count}</td>
                                </tr>
                            ))}
                     
     
            {/* <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>06.06.1996</td>
              <td style={styles.tableCell}>KG0101041711</td>
              <td style={styles.tableCell}>простые именные</td>
              <td style={styles.tableCell}>200,0000000</td>
              <td style={styles.tableCell}>5978</td>
              <td style={styles.tableCell}>22.00</td>
              <td style={styles.tableCell}>90.090000</td>
              <td style={styles.tableCell}>131532</td>
              <td style={styles.tableCell}>131532</td>
            </tr> */}
            <tr>
              <td style={{ ...styles.tableCell, ...styles.textRight }} rowSpan="2"><strong>ИТОГО:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.nowrap }} colSpan="7"><strong>простые именные</strong></td>
              <td style={styles.tableCell}>131532</td>
              <td style={styles.tableCell}>131532</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }} colSpan="7"><strong>привилегированные</strong></td>
              <td style={styles.tableCell}>0</td>
              <td style={styles.tableCell}>0</td>
            </tr>
            </tbody>
                    )}
        </table>
      </div>

      <div style={styles.section}>
        <h6 style={styles.sectionTitle}>Ответственные лица эмитента</h6>
        <table style={styles.infoTable}>
          <tbody>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Гл. бухгалтер:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>{EmitentData.accountant}</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Директор предприятия:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>{EmitentData.director_company}</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Директор регистратора:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>{EmitentData.director_registrar}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h6 style={styles.sectionTitle}>Держатель реестра: ОсОО "Реестродержатель Медина"</h6>
        <table style={styles.infoTable}>
          <tbody>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Орган государственной регистрации:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>Чуй-Бишкекское Управление юстиции</td>
            </tr>
            <tr>
              <td style={{ ...styles.tableCell, ...styles.nowrap }}><strong>Регистрационный номер:</strong></td>
              <td style={{ ...styles.tableCell, ...styles.dottedLine }}>133580-3301-ООО от 09.12.2013 год</td>
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
    </div>
        </Box >
    );
});

export default EmitentCard;
