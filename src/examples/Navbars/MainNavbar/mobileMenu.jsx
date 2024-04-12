import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, useState } from 'react-redux';
import { logout, selectIsAuth } from '../../../redux/slices/auth';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Accordion from '@mui/material/Accordion';
import Drawer from '@mui/material/Drawer';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function DropdownMenu() {

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const onClickLogout = () => {
        if (window.confirm('Вы правда хотите выйти?')) {
            dispatch(logout());
            window.localStorage.removeItem('token')
        }
    };


    const list = (anchor) => (
        <div>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
            

            </Box>
       



            <div className="vs-menu-area text-center">

                <div className="mobile-logo"> <Link to='/'><img src="../images/logo.png" alt="logo5" /></Link></div>
                <div className="vs-mobile-menu">
                    <ul id="menu-mobile-menu">
                        <li id="menu-item-131" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131">
                            <Link to='/'>Главная</Link>
                        </li>
                      
                        <li id="menu-item-136" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-136">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                   <a >Расчет налога</a>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className="sub-menu">
                                        <li id="menu-item-8925" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-8925">
                                            <Link to='taxhome'>Жилое здание, сооружение и помещение</Link>
                                        </li>
                                        <li id="menu-item-8923" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8923">
                                            <Link to="taxnohome">Нежилое здание, сооружение и помещение</Link>
                                        </li>
                                        <li id="menu-item-8921" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8921">
                                            <Link to="taxplace">Земли насел. пунктов и несельхоз назнач.</Link>
                                        </li>
                                        <li id="menu-item-8922" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8922">
                                            <Link to={'taxcar'}>Транспортное средство</Link>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>


                        </li>
                        <li id="menu-item-135" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135">
                        <Link to='blog'>Новости</Link>
                        </li>
                      
                        <li id="menu-item-161" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161">
                            <Link to='contacts'>Контакты</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    );

    return (
        <>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button onClick={toggleDrawer(anchor, true)} className="vs-menu-toggle d-inline-block d-lg-none"><i className="far fa-bars" /></button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}

        </>
    );
}

export default DropdownMenu;
