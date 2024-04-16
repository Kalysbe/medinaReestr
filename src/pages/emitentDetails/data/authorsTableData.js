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
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useLocation, NavLink } from "react-router-dom";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const { id } = useParams();
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

    rows: [
      {
        author: <Author name="Анкетные данные" />,
        action: (
          <MDButton variant="outlined" color="info" size="small"
            component={NavLink}
            to={`/emitent/personalData/${id}`}
          >
            Открыть
          </MDButton>
        ),
      },
      {
        author: <Author name="Ценные бумаги" />,
        action: (
          <MDButton variant="outlined" color="info" size="small">
            Открыть
          </MDButton>
        ),
      },
      {
        author: <Author name="Печать" />,
        action: (
          <MDButton variant="outlined" color="info" size="small"
            component={NavLink}
            to="/">
            Открыть
          </MDButton>
        ),
      },
    ],
  };
}