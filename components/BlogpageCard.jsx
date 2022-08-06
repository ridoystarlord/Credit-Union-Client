import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';

const BlogpageCard = ({ post }) => {
    return (
        <>
            <Paper elevation={2} sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <img src={post?.img} alt="" width={"100%"} height={"100%"} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" component="div" gutterBottom>
                            {post.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="body1">
                            {post?.metadescription}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default BlogpageCard