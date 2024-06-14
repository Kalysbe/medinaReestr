import React, { useState } from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SimpleMDE from 'react-simplemde-editor';
import Container from '@mui/material/Container';
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useLocation, NavLink } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import 'easymde/dist/easymde.min.css';
import { selectIsAuth } from '../../../redux/slices/auth';
import axios from '../../../axios';

import Swal from 'sweetalert2';
import styles from './EditEmitent.css';


const formData = {
  name: 'Наименование держателя',
  actual_address: 'Фактический адрес',
  legal_address: 'Юридический адрес',
  email: 'Электронная почта',
  phone_number: 'Номер телефона',
  passport_type: 'Тип паспорта',
  passport_number: 'Номер паспорта',
  passport_agency: 'Орган выдачи',
  inn: 'ИНН'
}


function AddPost(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  // const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const inputFileRef = React.useRef(null);

  const [data, setData] = useState({
    name: '',
    actual_address: '',
    legal_address: '',
    email: '',
    phone_number: '',
    passport_type: '',
    passport_number: '',
    passport_agency: '',
    inn: ''
  });

  const isEditing = Boolean(id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
     
      const response = isEditing
        ? await axios.put(`/holders/${id}`, data)
        : await axios.post('/holders', data)

      await Swal.fire({
        title: 'Успешно!',
        text: 'Данные успешно отправлены',
        icon: 'success',
        confirmButtonText: 'Ок'
      });
      navigate(`/emitent/${id}`);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      alert('Произошла ошибка при отправке данных на сервер');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) {
      axios
        .get(`/holders/${id}`)
        .then(({ data }) => {
          const { id, ...Emitentdata } = data
          setData(Emitentdata)
        })
        .catch((err) => {
          console.warn(err);
          alert('Ошибка при получении статьи!');
        });
    }
  }, []);


  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />;
  }


  const renderForm = () => {
    return (
      <>
        <DashboardNavbar />
        {/* <Container> */}
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
                  {isEditing ? 'Редактирование' : 'Добавление'} держателя
                  </MDTypography>
                </MDBox>
              </MDBox>
        
            <form>
              <MDBox>
                <Grid container spacing={2}>
                  {Object.keys(data).map((key) => (
                    <Grid sm={12} md={4} item key={key}>
                      <MDInput
                        fullWidth
                        label={formData[key]}
                        key={key}
                        type="text"
                        name={key}
                        value={data[key]}
                        onChange={handleChange}
                      />
                    </Grid>
                  ))}
                </Grid>
              </MDBox>
              <MDBox mt={4} display="flex" justifyContent="end">
              <MDButton color="error"
                  component={NavLink}
                  to='/emitents'
                  style={{ marginRight: '12px' }}>
                    Отмена
                  </MDButton>
                <MDButton onClick={onSubmit} disabled={loading} variant="gradient" color="info"  >
                  {isEditing ? 'Сохранить' : 'Добавить'}
                </MDButton>
              </MDBox>
            </form>
          </Card>
        {/* </Container> */}
      </>
    );
  };

  return (
    <>
      {isEditing ? <DashboardLayout>{renderForm()}</DashboardLayout> : <DashboardLayout>{renderForm()}</DashboardLayout>}
    </>
  );

};

export default AddPost