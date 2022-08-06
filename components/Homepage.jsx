import { Grid, Paper, Pagination, Box, Typography, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HomepageCard from './HomepageCard';
import Link from 'next/link';

const Homepage = ({ allBlogpost }) => {
    const [page, setPage] = useState(1);
    const handlePaginationChange = (event, value) => {
        setPage(value);
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={8}>
                    <Paper elevation={2} sx={{ p: 1 }}>
                        <Box sx={{ p: 1, maxHeight: "70.8vh", overflowY: "scroll" }}>
                            <Grid container spacing={3}>
                                {
                                    allBlogpost.length > 0 &&
                                    allBlogpost?.map(post =>
                                        <Link href={`/${post.slug}`} key={post?._id}>
                                            <Grid item xs={12} md={12} lg={12} sx={{ cursor: "pointer" }}>
                                                <HomepageCard post={post} />
                                            </Grid>
                                        </Link>
                                    )
                                }
                            </Grid>
                        </Box>
                        <Pagination sx={{ mt: 2, px: 1 }} count={Math.ceil(allBlogpost.length / 10)} variant="outlined" shape="rounded" page={page} onChange={handlePaginationChange} />
                    </Paper>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                        <Typography
                            variant="h5"
                            component="div"
                            gutterBottom
                            sx={{ textAlign: "center", fontWeight: 700 }}
                        >
                            Recent Posts
                        </Typography>
                        <Divider fullWidth sx={{ mb: 2 }} />
                        {allBlogpost.length > 0 &&
                            allBlogpost?.slice(0, 10)?.map((post) => (
                                <Link href={`/${post?.slug}`} key={post?._id}>
                                    <a>
                                        <Typography variant="body1" component="div" gutterBottom>
                                            {post?.title}
                                        </Typography>
                                    </a>
                                </Link>
                            ))}
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Homepage