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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { useLocation, NavLink } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import Container from '@mui/material/Container';
// import SearchBar from "material-ui-search-bar";

// Material Dashboard 2 React example components
import MainLayout from "examples/LayoutContainers/MainLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { fetchPosts, fetchTags } from '../../redux/slices/post';
// Data
import authorsTableData from "layouts/start/data/authorsTableData";
import { TableRowsOutlined } from '@mui/icons-material';




function Tables() {
  const dispatch = useDispatch()
  const { posts, tags } = useSelector(state => state.posts)

  const [initialized, setInitialized] = React.useState(false);
  React.useEffect(() => {
    if (!initialized) {
      dispatch(fetchPosts());
      dispatch(fetchTags());
      setInitialized(true);
    }
  }, []); // Передаем пустой массив зависимостей

  console.log(posts)

  const { columns, rows } = authorsTableData()
  return (
    <MainLayout>
      <DashboardNavbar />

      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
            <Container>
              <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1}>
                <MDBox>
                  <MDTypography variant="h3" gutterBottom>
                    Выберите эмитента
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
              <MDBox >
              <MDInput label="Поиск по эмитентам" fullWidth/>
              </MDBox>
              <MDBox mt={8}>
                <Grid container spacing={2}>
                  {posts.items.map((item, key) => (

                    <Grid sm={12} md={3} item key={key}>
                      <MDBox
                        component="li"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        bgColor={"grey-100"}
                        py={1}
                        pr={1}
                      >
                     
                          <MDTypography display="block" variant="button" fontWeight="medium">
                            {item.full_name}
                          </MDTypography>
                          <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            component={NavLink}
                            to={`/emitent/${item.id}`}
                          >
                            Выбрать
                          </MDButton>
                

                      </MDBox>
                    </Grid>
                  ))}
                </Grid>
              </MDBox>
              </Container>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

    </MainLayout>
  );
}

export default Tables;
