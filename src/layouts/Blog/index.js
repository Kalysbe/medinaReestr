import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink } from "react-router-dom";


import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Post } from 'components/Post';
import { fetchPosts, fetchTags } from '../../redux/slices/post';

import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import DataTable from "examples/Tables/DataTable";
function Basic(props) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.data)
    const { posts, tags } = useSelector(state => state.posts)

    const isPostsLoading = posts.status === 'loading'
    const isTagsLoading = tags.status === 'loading'

    const [initialized, setInitialized] = React.useState(false);

    React.useEffect(() => {
        if (!initialized) {
            dispatch(fetchPosts());
            dispatch(fetchTags());
            setInitialized(true);
        }
    }, [dispatch, initialized]);


    console.log(userData)



    return (

        <DashboardLayout>
            <DashboardNavbar  />
            <MDBox mt={8}>
                <Card>
                    <MDBox
                        mx={2}
                        mt={-3}
                        py={3}
                        px={2}
                        variant="gradient"
                        bgColor="info"
                        borderRadius="lg"
                        coloredShadow="info"
                        display="flex" 
                        justifyContent="space-between" 
                        alignItems="center"
                    >
                        <MDTypography variant="h6" color="white">
                            Все посты
                        </MDTypography>
                        <MDButton variant="gradient" color="dark"
                          component={NavLink} 
                          to="/add-post">
                            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                           Новый пост
                        </MDButton>
                    </MDBox>
                    <MDBox mb={3}>
                        <Container>
                            <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>

                            </Typography>
                            <Grid container spacing={2}>
                                {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
                                    isPostsLoading ? (
                                        <Grid sx={{ pl: 0 }} xs={12} item key={index}>
                                            <Post key={index} isLoading={true} />
                                        </Grid>
                                    ) : (
                                        <Grid sm={12} md={4} item key={index}>
                                            <Post

                                                _id={obj._id}
                                                title={obj.title}
                                                imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
                                                user={obj.user}
                                                createdAt={obj.createdAt}
                                                viewsCount={obj.viewsCount}
                                                commentsCount={3}
                                                tags={obj.tags}
                                                isEditable={2}
                                                first={index == 0 ? true : false}
                                            />
                                        </Grid>
                                    ))}
                            </Grid>

                        </Container>
                    </MDBox>
                </Card>
            </MDBox>
        </DashboardLayout>
    );
};

export default Basic;