import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';

const LocationCard = ({ location }) => {
    return (
        <Grid item xs={12} md={6} lg={6} sx={{ cursor: "pointer" }}>
            <Paper elevation={2} sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" component="div">
                            {location.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="body1">
                            {location?.address}
                        </Typography>
                    </Grid>
                    {
                        location.phonenumber &&
                        <Grid item xs={12} md={12}>
                            <Typography variant="body1">
                                {location?.phonenumber}
                            </Typography>
                        </Grid>
                    }
                </Grid>
            </Paper>
        </Grid>
    )
}

export default LocationCard