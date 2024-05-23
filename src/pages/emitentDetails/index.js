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
import DataTable from "examples/Tables/DataTable";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardContent, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material';
// Data
import authorsTableData from "pages/emitentDetails/data/authorsTableData";
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
                to: '/issuer/securities',
            }
        ],
    },
    {
        name: 'Журналы',
        to: '/buttons',
        items: [
            {
                name: 'Журнал операций с акциями',
                to: '/buttons/buttons',
            },
            {
                name: 'Журнал выдачи выписок',
                to: '/buttons/button-groups',
            },
            {
                name: 'Журнал входящих документов',
                to: '/buttons/dropdowns',
            },
            {
                name: 'Журнал изменения реестра',
                to: '/buttons/dropdowns',
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
                to: '/icons/coreui-icons',
            },
            {
                name: 'Высвобождение из залога',
                to: '/icons/flags',
            },
            {
                name: 'Конвертация',
                to: '/icons/brands',
            },
            {
                name: 'Одноместная операция',
                to: '/icons/brands',
            },
            {

                name: 'Изменение в залоге',
                to: '/icons/brands',
            },
            {

                name: 'Анулировать пакет акции',
                to: '/icons/brands',
            },
            {

                name: 'Блокировать акции одного акционера',
                to: '/icons/brands',
            },
            {

                name: 'Отмена блокировки акций одного акционера',
                to: '/icons/brands',
            },
            {

                name: 'Блокировать весь реестр',
                to: '/icons/brands',
            },
            {

                name: 'Отмена блокировки всего реестра',
                to: '/icons/brands',
            },
            {

                name: 'Перевод реестра на эмиссионный счет',
                to: '/icons/brands',
            },
            {
                name: 'Конвертация ОАО "Международный аэропорт МАНАС"',
                to: '/icons/brands',
            },
        ],
    },
    {
        name: 'Печать',
        items: [
            {
                name: '01 Реестр адресов на дивиденды',
                to: '/icons/coreui-icons',
            },
            {
                name: '02 Реестр адресов для других целей',
                to: '/icons/flags',
            },
            {
                name: '03 Реестр по % кол-ву',
                to: '/icons/brands',
            },
            {
                name: '04 Печать реестра',
                to: '/icons/brands',
            },
            {
                name: '05 Сводная по % кол-ву',
                to: '/icons/brands',
            },
            {
                name: '06 Без паспорта или адреса',
                to: '/icons/brands',
            },
            {
                name: '07 Печать реестра на собрание',
                to: '/icons/brands',
            },
            {
                name: '08 Полный реестр',
                to: '/icons/brands',
            },
            {
                name: '09 Явочный лист',
                to: '/icons/brands',
            },
            {
                name: '10 Возврат почтовых уведомлений',
                to: '/icons/brands',
            },
            {
                name: '11 Полный реестр с учетом выпуска',
                to: '/icons/brands',
            },
            {
                name: '12 Список реестра акционеров',
                to: '/icons/brands',
            },
            {
                name: '13 Полный реестр по регионам',
                to: '/icons/brands',
            },
            {
                name: '14 Реестр с залоговыми операциями',
                to: '/icons/brands',
            },
            {
                name: '15 Список операций купли-продажи',
                to: '/icons/brands',
            },
            {
                name: '16 Сведений об акционерах для банка Кыргызстан',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
            {
                name: '03 ',
                to: '/icons/brands',
            },
        ],
    },
    {
        name: 'Дивиденды',
        items: [
            {
                name: 'Расчет',
                to: '/notifications/alerts',
            },
            {
                name: 'Ведомость расчета',
                to: '/notifications/badges',
            },
            {
                name: 'Платежная ведомость',
                to: '/notifications/modals',
            },
            {
                name: 'Сводная ведомость',
                to: '/notifications/toasts',
            },
        ],
    },
    {
        name: 'Сервис',
        items: [
            {
                name: 'Alerts',
                to: '/notifications/alerts',
            },
            {
                name: 'Badges',
                to: '/notifications/badges',
            },
            {
                name: 'Modal',
                to: '/notifications/modals',
            },
            {
                name: 'Toasts',
                to: '/notifications/toasts',
            },
        ],
    },
    {
        name: 'Справочники',
        items: [
            {
                name: 'Alerts',
                to: '/notifications/alerts',
            },
            {
                name: 'Badges',
                to: '/notifications/badges',
            },
            {
                name: 'Modal',
                to: '/notifications/modals',
            },
            {
                name: 'Toasts',
                to: '/notifications/toasts',
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
    const { columns, rows } = authorsTableData();

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
                                                            variant="outlined"
                                                            color="info"
                                                            size="small"
                                                            component={NavLink}
                                                            to={`/emitent/${subItem.to}/${id}`}
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