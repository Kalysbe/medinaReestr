/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useLocation, NavLink } from "react-router-dom";


// Images


let dataa = [
  {id:1,name:'ЗАО НУР'},
  {id:2,name:'Test'}
]
console.log(dataa)

export default function data() {





  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="h6" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );



  return {
    columns: [
      { Header: "Название", accessor: "author", align: "left" },
      { Header: "Действие", accessor: "action", align: "left" },
    ],

    rows: dataa.map((item, index) => ({
      author: <Author name={item.name} />,
      action: (
        <MDButton
          variant="outlined"
          color="info"
          size="small"
          component={NavLink}
          to={`/emitent/${item.id}`}
        >
          Выбрать
        </MDButton>
      ),
    })),
  };
}
