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

const formConfig = [
  { key: "full_name", label: "Наименование эмитента", type: "text" },
  { key: "short_name", label: "Номер гос. регистрации", type: "text" },
  { key: "gov_name", label: "Орган осуществ-ший регистр", type: "text" },
  { key: "gov_number", label: "Орган регистрации выпуска ценных бумаг", type: "text" },
  { key: "legal_address", label: "Адрес", type: "text" },
  { key: "postal_address", label: "Почтовый адрес", type: "text" },
  { key: "phone_number", label: "Номер телефона", type: "text" },
  { key: "email", label: "Электронный адрес", type: "text" },
  { key: "bank_name", label: "Наименование банка эмитента", type: "text" },
  { key: "bank_account", label: "Счет в банке", type: "text" },
  { key: "id_number", label: "Идентификационный номер", type: "text" },
  { key: "contract_date", label: "Дата заключения договора", type: "date" },
  { key: "capital", label: "Размер уставного капитала", type: "text" },
  { key: "director_registrar", label: 'Ф.И.О директора "Медина"', type: "text" },
  { key: "accountant", label: "Ф.И.О гл. бухгалтера АО", type: "text" },
  { key: "director_company", label: "Ф.И.О руководителя АО", type: "text" }
];

const EditEmitent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const emitent = useSelector(state => state.emitents.emitent);
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState(
    formConfig.reduce((acc, { key }) => {
      acc[key] = '';
      return acc;
    }, {})
  );

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (isEditing && emitent && emitent.data) {
      const { id, ...emitentData } = emitent.data;
      setFormData(emitentData);
    }
  }, [emitent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
        await dispatch(fetchAddEmitentEmissions(formData));

      Swal.fire({
        title: 'Успешно!',
        text: 'Данные успешно отправлены',
        icon: 'success',
        confirmButtonText: 'Ок',
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
              {isEditing ? 'Редактирование' : 'Добавление'} эмитента
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
              to={isEditing ? `/emitent/personalData/${id}` : '/emitents'}
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
