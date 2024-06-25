/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useLocation, NavLink, useParams } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";



import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material';
// Data
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const nav = [
    {
        name: 'Эмитент',
        to: '/base',
        items: [
            {
                name: 'Анкетные данные',
                to: 'personalData',
            },
            {
                name: 'Ценные бумаги',
                to: 'stocks',
            }
        ],
    },
    {
        name: 'Журналы',
        to: '/buttons',
        items: [
            {
                name: 'Журнал операций с акциями',
                to: 'log/stockTransaction'
            },
            {
                name: 'Журнал выдачи выписок',
                to: '/buttons/button-groups',
                 disabled:true
            },
            {
                name: 'Журнал входящих документов',
                to: '/buttons/dropdowns',
                 disabled:true
            },
            {
                name: 'Журнал изменения реестра',
                to: '/buttons/dropdowns',
                 disabled:true
            },
        ],
    },
    {
        name: 'Реестр',
        items: [
            {
                name: 'Держатели',
                to: 'holders',
            }
        ],
    },
    {
        name: 'Операции',
        items: [
            {
                name: 'Передача',
                to: 'operation/transfer',
            },
            {
                name: 'Залог',
                to: '/icons/flags',
                 disabled:true
            },
            {
                name: 'Высвобождение из залога',
                to: '/icons/flags',
                 disabled:true
            },
            {
                name: 'Конвертация',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: 'Одноместная операция',
                to: 'operation/single',
                 disabled:false
            },
            {

                name: 'Изменение в залоге',
                to: '/icons/brands',
                 disabled:true
            },
            {

                name: 'Анулировать пакет акции',
                to: '/icons/brands',
                 disabled:true
            },
            {

                name: 'Блокировать акции одного акционера',
                to: '/icons/brands',
                 disabled:true
            },
            {

                name: 'Отмена блокировки акций одного акционера',
                to: '/icons/brands',
                 disabled:true
            },
            {

                name: 'Блокировать весь реестр',
                to: '/icons/brands',
                 disabled:true
            },
            {

                name: 'Отмена блокировки всего реестра',
                to: '/icons/brands',
                 disabled:true
            },
            {

                name: 'Перевод реестра на эмиссионный счет',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: 'Конвертация ОАО "Международный аэропорт МАНАС"',
                to: '/icons/brands',
                 disabled:true
            },
        ],
    },
    {
        name: 'Печать',
        items: [
            {
                name: '01 Реестр адресов на дивиденды',
                to: '/icons/coreui-icons',
                 disabled:true
            },
            {
                name: '02 Реестр адресов для других целей',
                to: '/icons/flags',
                 disabled:true
            },
            {
                name: '03 Реестр по % кол-ву',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '04 Печать реестра',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '05 Сводная по % кол-ву',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '06 Без паспорта или адреса',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '07 Печать реестра на собрание',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '08 Полный реестр',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '09 Явочный лист',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '10 Возврат почтовых уведомлений',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '11 Полный реестр с учетом выпуска',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '12 Список реестра акционеров',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '13 Полный реестр по регионам',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '14 Реестр с залоговыми операциями',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '15 Список операций купли-продажи',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '16 Сведений об акционерах для банка Кыргызстан',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
            {
                name: '03 ',
                to: '/icons/brands',
                 disabled:true
            },
        ],
    },
    {
        name: 'Дивиденды',
        items: [
            {
                name: 'Расчет',
                to: '/notifications/alerts',
                 disabled:true
            },
            {
                name: 'Ведомость расчета',
                to: '/notifications/badges',
                 disabled:true
            },
            {
                name: 'Платежная ведомость',
                to: '/notifications/modals',
                 disabled:true
            },
            {
                name: 'Сводная ведомость',
                to: '/notifications/toasts',
                 disabled:true
            },
        ],
    },
    {
        name: 'Сервис',
        items: [
            {
                name: 'Alerts',
                to: '/notifications/alerts',
                 disabled:true
            },
            {
                name: 'Badges',
                to: '/notifications/badges',
                 disabled:true
            },
            {
                name: 'Modal',
                to: '/notifications/modals',
                 disabled:true
            },
            {
                name: 'Toasts',
                to: '/notifications/toasts',
                disabled:true
            },
        ],
    },
    {
        name: 'Справочники',
        items: [
            {
                name: 'Alerts',
                to: '/notifications/alerts',
                disabled:true
            },
            {
                name: 'Badges',
                to: '/notifications/badges',
                disabled:true
            },
            {
                name: 'Modal',
                to: '/notifications/modals',
                disabled:true
            },
            {
                name: 'Toasts',
                to: '/notifications/toasts',
                disabled:true
            },
        ],
    },

]

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <MDBox sx={{ p: 2 }}>
                    <MDTypography>{children}</MDTypography>
                </MDBox>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Tables() {
    const { id } = useParams();


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };






    // const { columns: pColumns, rows: pRows } = projectsTableData();

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    Эмитент: ЗАО НУР
                                </MDTypography>
                            </MDBox>
                            <MDBox px={2} py={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    {nav.map((item, index) => (
                                        <Tab label={item.name} {...a11yProps(index)} />
                                    ))}
                                </Tabs>
                            </MDBox>
                            {nav.map((item, index) => (
                                <CustomTabPanel value={value} index={index}>
                                    <Table style={{ width: 'inherit' }}>
                                        <TableHead style={{ display: 'table-header-group' }}>
                                            <TableRow>
                                                <TableCell>Наименование</TableCell>
                                                <TableCell>Действие</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {item.items.map((subItem, key) => (
                                                <TableRow key={key}>
                                                    <TableCell>
                                                        <MDTypography variant="h6" color="dark">
                                                            {subItem.name}
                                                        </MDTypography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <MDButton
                                                            disabled={subItem.disabled}
                                                            variant="outlined"
                                                            color="info"
                                                            size="small"
                                                            component={NavLink}
                                                            to={`${subItem.to}/`}
                                                        >
                                                            Выбрать
                                                        </MDButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CustomTabPanel>
                            ))}
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Tables;