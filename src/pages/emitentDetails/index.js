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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useLocation, NavLink ,useParams} from "react-router-dom";

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
            },
            {
                name: 'Печать',
                to: '/base/cards',
            },
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
                name: 'Form Control',
                to: '/forms/form-control',
            },
            {
                name: 'Select',
                to: '/forms/select',
            },
            {
                name: 'Checks & Radios',
                to: '/forms/checks-radios',
            },
            {
                name: 'Range',
                to: '/forms/range',
            },
            {
                name: 'Input Group',
                to: '/forms/input-group',
            },
            {
                name: 'Floating Labels',
                to: '/forms/floating-labels',
            },
            {
                name: 'Layout',
                to: '/forms/layout',
            },
            {
                name: 'Validation',
                to: '/forms/validation',
            },
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



function Tables() {
    const { id } = useParams();
    const { columns, rows } = authorsTableData();
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
                            <MDBox pt={3} w={10}>
                                {nav.map((item, index) => (
                                    <Accordion key={index}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`panel${index}-content`}
                                            id={`panel${index}-header`}
                                        >
                                            <MDTypography variant="h5" color="dark">
                                                {item.name}
                                            </MDTypography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                <Table style={{width:'inherit'}}>
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
                                                                    <MDButton
                                                                        variant="outlined"
                                                                        color="warning"
                                                                        style={{marginLeft:'12px'}}
                                                                        size="small"
                                                                        component={NavLink}
                                                                        to={`/emitent/${id}/edit`}
                                                                    >
                                                                        Изменить
                                                                    </MDButton>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Tables;