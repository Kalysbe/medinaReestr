import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink , useParams} from "react-router-dom";


import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React Components
import MDInput from "components/MDInput";
import axios from '../../axios';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { fetchPosts, fetchTags } from '../../redux/slices/post';

import { useMediaQuery } from '@mui/material';

function Basic(props) {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [data, setData] = React.useState('');
    const userData = useSelector(state => state.auth.data)
    const { posts, tags } = useSelector(state => state.posts)
    

    const isPostsLoading = posts.status === 'loading'
    const isTagsLoading = tags.status === 'loading'

    // const [initialized, setInitialized] = React.useState(false);

    // React.useEffect(() => {
    //     if (!initialized) {
    //         dispatch(fetchPosts());
    //         dispatch(fetchTags());
    //         setInitialized(true);
    //     }
    // }, [dispatch, initialized]);

    React.useEffect(() => {
        if (id) {
          axios
            .get(`/emitents/${id}`)
            .then(({ data }) => {
                setData(data)
              console.log(data)
            })
            .catch((err) => {
              console.warn(err);
              alert('Ошибка при получении статьи!');
            });
        }
      }, []);
    console.log(posts.items)



    return (

        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mt={8}>
                <Card>
                    <Grid container spacing={2}>
                        {Object.keys(data).map((key) => (
                            <Grid sm={12} md={4} item key={key}>
                                <MDInput fullWidth width={100} label={key} value={data[key]} name={key} />
                            </Grid>
                        ))}
                    </Grid>
                </Card>

            </MDBox>
        </DashboardLayout>
    );
};

export default Basic;