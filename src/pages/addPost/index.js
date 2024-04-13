import React, { useState } from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Card from "@mui/material/Card";
import SimpleMDE from 'react-simplemde-editor';
import Container from '@mui/material/Container';
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useLocation, NavLink } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MainLayout from "examples/LayoutContainers/MainLayout";

import 'easymde/dist/easymde.min.css';
import { selectIsAuth } from '../../redux/slices/auth';
import axios from '../../axios';

import Swal from 'sweetalert2';
import styles from './AddPost.module.css';


let data = {
  "full_name": "",
  "short_name": "",
  "director_company": "",
  "director_registrar": "",
  "accountant": "",
  "gov_name": "",
  "gov_number": "",
  "legal_address": "",
  "postal_address": "",
  "phone_number": "",
  "email": "",
  "bank_name": "",
  "bank_account": "",
  "id_number": "",
  "capital": "",
  "contract_date": ""
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
    full_name: "",
    short_name: "",
    director_company: "",
    director_registrar: "",
    accountant: "",
    gov_name: "",
    gov_number: "",
    legal_address: "",
    postal_address: "",
    phone_number: "",
    email: "",
    bank_name: "",
    bank_account: "",
    id_number: "",
    capital: "",
    contract_date: ""
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
      console.log(data)
      const response = await axios.post('/emitents', data);

      // Показ оповещения об успешной отправке с помощью SweetAlert2
      await Swal.fire({
        title: 'Успешно!',
        text: 'Данные успешно отправлены',
        icon: 'success',
        confirmButtonText: 'Ок'
      });

      // Перенаправление пользователя на маршрут "/start"
      navigate('/start');
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
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setImageUrl(data.imageUrl);
          setTags(data.tags.join(','));
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
        <Container>
          <Paper style={{ padding: 30 }}>
            <MDTypography variant="h3" fontWeight="medium" lineHeight={1}>
              Добавление эмитента
            </MDTypography>
            <form>
              <MDBox mt={8}>
                <Grid container spacing={2}>
                  {Object.keys(data).map((key) => (
                    <Grid sm={12} md={4} item key={key}>
                      <MDInput
                        fullWidth
                        label={key}
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
              <MDBox mt={8}>
                <MDButton onClick={onSubmit} disabled={loading} variant="gradient" color="info" mx={8}
                >
                  {isEditing ? 'Сохранить' : 'Добавить'}
                </MDButton>
                <MDButton color="error"
                  component={NavLink}
                  to='/start'>Отмена</MDButton>
              </MDBox>
            </form>
          </Paper>
        </Container>
      </>
    );
  };

  return (
    <>
      {isEditing ? <DashboardLayout>{renderForm()}</DashboardLayout> : <MainLayout>{renderForm()}</MainLayout>}
    </>
  );

};

export default AddPost