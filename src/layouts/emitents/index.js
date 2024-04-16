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

import { fetchPosts, fetchTags } from '../../redux/slices/emitents';
import { fetchDeleteEmitent } from '../../redux/slices/emitents';
import Swal from 'sweetalert2';
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";



function Tables() {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector(state => state.posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  useEffect(() => {
    dispatch(fetchPosts({ page, searchTerm }));
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

  console.log(posts)

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
                    Эмитенты
                  </MDTypography>
                </MDBox>
                <MDBox color="text" px={2}>
                  <MDButton variant="gradient" color="dark" component={NavLink}
                    to="/add-emitent">
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    Новый Эмитент
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox mx={2}>
                <MDInput label="Поиск по эмитентам"
                  value={searchTerm}
                  onChange={handleSearchChange} fullWidth />
              </MDBox>
              <MDBox pt={3} mx={2} >
                {/* <TableContainer>авы */}
                  <Table>
                    <TableHead style={{ display: 'table-header-group' }}>
                      <TableRow>
                        <TableCell>Наименование</TableCell>
                        <TableCell>Действие</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {posts.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <MDTypography variant="h6" color="dark">
                              {item.full_name}
                            </MDTypography>
                          </TableCell>
                          <TableCell>

                            <MDButton
                              variant="outlined"
                              color="info"
                              size="small"
                              component={NavLink}
                              to={`/emitent/${item.id}`}
                            >
                              Выбрать
                            </MDButton>


                            <MDButton variant="outlined" color="error" size="small" style={{ marginLeft: '8px' }} onClick={() => onDelete(item.id)}>
                              Удалить
                            </MDButton>

                          </TableCell>

                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                {/* </TableContainer> */}

                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
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



