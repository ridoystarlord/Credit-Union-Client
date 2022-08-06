import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';

const LocationCard = ({ location }) => {
    return (
        <Grid item xs={12} md={6} lg={6} sx={{ cursor: "pointer" }}>
            <Paper elevation={2} sx={{ p: 2 }}>
                <h3 style={{ marginTop: 0 }}>{location.name}</h3>
                <p>
                    {location?.address}
                </p>
                {
                    location.phonenumber &&
                    <p>
                        {location?.phonenumber}
                    </p>
                }
            </Paper>
        </Grid>
    )
}

export default LocationCard