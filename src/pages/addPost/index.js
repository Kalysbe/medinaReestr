import React from 'react';
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

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import 'easymde/dist/easymde.min.css';
import { selectIsAuth } from '../../redux/slices/auth';
import axios from '../../axios';
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

function AddPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const inputFileRef = React.useRef(null);

  const isEditing = Boolean(id);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла!');
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setLoading(true);

      const fields = {
        title,
        imageUrl,
        tags,
        text,
      };

      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, fields)
        : await axios.post('/posts', fields);

      const _id = isEditing ? id : data._id;

      navigate(`/posts/${_id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании статьи!');
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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container>
        <Paper style={{ padding: 30 }}>


        <MDBox mt={8}>
           
                    <Grid container spacing={2}>
                        {Object.keys(data).map((key) => (

                            <Grid sm={12} md={4} item key={key}>
                                <MDInput fullWidth width={100} label={key} value={data[key]} name={key} />
                            </Grid>
                        ))}
                    </Grid>
        

            </MDBox>

            <MDBox mt={8}>
            <MDButton onClick={onSubmit} variant="gradient" color="info">
              {isEditing ? 'Сохранить' : 'Добавить'}
            </MDButton>
              <MDButton color="error">Отмена</MDButton>
          </MDBox>
        </Paper>
      </Container>
    </DashboardLayout>
  );
};

export default AddPost