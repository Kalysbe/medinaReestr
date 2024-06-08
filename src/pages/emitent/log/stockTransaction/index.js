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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { CardContent, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material';
import { useLocation, NavLink } from "react-router-dom";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { fetchTransactions  } from '../../../../redux/actions/transactions';
import Swal from 'sweetalert2';
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";



function Tables() {
  const dispatch = useDispatch();
  const { items ,status } = useSelector(state => state.transactions.transactions);

  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };



  // const { columns, rows } = authorsTableData();


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
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
                  Журнал операций с акциями
                  </MDTypography>
                </MDBox>
              </MDBox>
              <MDBox mx={2}>
                <MDInput label="Поиск по операциям"
                  value={searchTerm}
                  onChange={handleSearchChange} fullWidth />
              </MDBox>
              <MDBox pt={3} mx={2} >
                {/* <TableContainer>авы */}
                  <Table>
                    <TableHead style={{ display: 'table-header-group' }}>
                      <TableRow>
                        <TableCell>Тип</TableCell>
                        <TableCell>Сумма сделки</TableCell>
                        <TableCell>Дата сделки</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <MDTypography variant="h6" color="dark">
                            <Link to={`${item.id}`}>{item.operation.name}</Link>
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="h6" color="dark">
                              {item.amount}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="h6" color="dark">
                              {item.contract_date}
                            </MDTypography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
     
              </MDBox>
            </Card>
          </Grid>

        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;



