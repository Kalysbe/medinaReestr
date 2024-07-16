import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate, useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Container } from '@mui/material';
import Swal from 'sweetalert2';

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { fetchAddEmitentEmissions } from '../../../../../redux/actions/emitents';
import { fetchEmissionById } from '../../../../../redux/actions/emissions';

const formConfig = [
  { key: "reg_number", label: "Регистрационный номер", type: "text" },
  { key: "release_date", label: "Дата выпуска", type: "number" },
  { key: "type_id", label: "Тип эмиссии", type: "number" },
  { key: "nominal", label: "Номинал", type: "number" },
  { key: "start_count", label: "Количество", type: "number" },
];

const EditEmitent = () => {
  const dispatch = useDispatch();
  const { eid, esid } = useParams();
  const navigate = useNavigate();
  const { emissionDetail } = useSelector(state => state.emissions);
  const isEditing = Boolean(esid);
  console.log(esid, 'esid')
  const [formData, setFormData] = useState(
    formConfig.reduce((acc, { key }) => {
      acc[key] = '';
      return acc;
    }, {})
  );

  useEffect(() => {
    if (isEditing) {
      dispatch(fetchEmissionById(esid));
    } else {
      setFormData(
        formConfig.reduce((acc, { key }) => {
          acc[key] = '';
          return acc;
        }, {})
      );
    }
  }, [dispatch, eid, isEditing]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (isEditing && emissionDetail && emissionDetail.data) {
      const { id, ...emissionData } = emissionDetail.data;
      setFormData(emissionData);
    }
  }, [emissionDetail]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? Number(value) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const emitent_id = Number(eid);
    try {
     const response = await dispatch(fetchAddEmitentEmissions({ emitent_id, ...formData }));

      
      if (response.error) {
        throw new Error(response.error);
    }
    Swal.fire({
      title: 'Успешно!',
      text: 'Данные успешно отправлены',
      icon: 'success',
      confirmButtonText: 'Ок',
  }).then((result) => {
      if (result.isConfirmed) {
          navigate(`/emitent/${eid}/stocks/`) 
      }
  });
} catch (error) {
  console.error('Ошибка при отправке данных:', error);
  Swal.fire({
      title: 'Ошибка!',
      text: 'Произошла ошибка при отправке данных на сервер',
      icon: 'error',
      confirmButtonText: 'Ок',
  });
} finally {
  setLoading(false);
}
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card style={{ padding: 30 }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1} mb={2}>
          <MDBox
            mt={-3}
            py={1}
            px={6}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h5" color="white">
              {isEditing ? 'Редактирование' : 'Добавление'} эмиссии
            </MDTypography>
          </MDBox>
        </MDBox>
        <form>
          <MDBox>
            <Grid container spacing={2}>
              {formConfig.map(({ key, label, type }) => (
                <Grid sm={12} md={4} item key={key}>
                  <MDInput
                    fullWidth
                    label={label}
                    type={type}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
          
                  />
                </Grid>
              ))}
            </Grid>
          </MDBox>
          <MDBox mt={4} display="flex" justifyContent="end">
            <MDButton
              color="error"
              component={NavLink}
              to={isEditing ? `/emitent/personalData/${eid}` : '/emitents'}
              style={{ marginRight: '12px' }}
            >
              Назад
            </MDButton>
            <MDButton
              onClick={handleSubmit}
              disabled={loading}
              variant="gradient"
              color="info"
            >
              {isEditing ? 'Сохранить' : 'Добавить'}
            </MDButton>
          </MDBox>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default EditEmitent;
