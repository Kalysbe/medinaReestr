import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExtractReestr } from '../../../redux/actions/prints';
import ReestrData from '../../ReestrData'
import { Box, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@mui/material';
import MDTypography from "components/MDTypography";

const EmitentCard = React.forwardRef((props, ref) => {
    console.log(props)
    const { eid, hid } = props;
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.prints.prints);
    const { emitent, holder, emission } = data


    console.log(emitent, 'emitent')
    console.log(holder, 'holder')
    console.log(emission, 'emission')

    useEffect(() => {
        dispatch(fetchExtractReestr({ eid: eid, hid: hid }));
    }, [dispatch, eid, hid]);

    if (status === 'loading') {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
            </Box>
        );
    }

    if (status === 'failed') {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <MDTypography variant="h6" color="error">
                    Error: {error}
                </MDTypography>
            </Box>
        );
    }

    console.log(data.emitent)

    return (
        <Box ref={ref} p={2}>



            <div style={{ border: "solid" }}>
                <h4 style={{ textAlign: "center" }}>Выписка из реестра</h4>



                <ReestrData />
            </div>
        </Box >
    );
});

export default EmitentCard;
