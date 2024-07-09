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


import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CardContent, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material';
import { useLocation, useParams, NavLink } from "react-router-dom";


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

import { fetchHolders } from '../../../../redux/actions/holders';
import Swal from 'sweetalert2';
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";



function Tables() {
  const dispatch = useDispatch();
  const { holders } = useSelector(state => state.holders);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchHolders());
  }, []);

  useEffect(() => {
    dispatch(fetchHolders({ page, searchTerm }));
  }, [dispatch, page, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const onDelete = (id) => {
    Swal.fire({
      title: 'Вы правда хотите удалить?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Да, удалить!',
      cancelButtonText: 'Отмена',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(fetchDeleteEmitent(id)).then(() => {
          Swal.fire('Успешно!', 'Запись удалена', 'success');
        })
          .catch((error) => {
            MySwal.fire('Ошибка!', 'Не удалось удалить запись: ' + error.message, 'error');
          });
      }
    });
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
                    Держатели
                  </MDTypography>
                </MDBox>
                <MDBox color="text" px={2}>
                  <MDButton variant="gradient" color="dark" component={NavLink}
                    to="/add-holder">
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    Новый Держатель
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox mx={2} sx={{}}>
                <FormControl sx={{ width: '20%',marginBottom:'10px' }}>
                  {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
                  <Select
                    name="filter"
                    value="0"
                  // onChange={handleChange}
                  >


                    <MenuItem value={0}>
                        Все держатели
                    </MenuItem>
                    <MenuItem value={1}>
                        По фамилии
                    </MenuItem>
                    <MenuItem value={2}>
                      
                    </MenuItem>

                  </Select>
                </FormControl>

                <MDInput
                  fullWidth
                  label="Поиск по держателям"
                  value={searchTerm}
                  onChange={handleSearchChange} />
              </MDBox>
              <MDBox pt={3} mx={2}>
                <Table>
                  <TableHead style={{ display: 'table-header-group' }}>
                    <TableRow>
                      <TableCell>Наименование</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {holders.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            <Link to={`/emitent/${id}/holder/${item.id}`}> {item.name}</Link>
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            component={NavLink}
                            to={`/emitent/${id}/holder/${item.id}`}
                          >
                            Открыть
                          </MDButton>

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



