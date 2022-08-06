import {  Grid, Paper, Pagination, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HomepageCard from './HomepageCard';
import Link from 'next/link';

const Homepage = () => {
    const [allBlogpost, setAllBlogpost] = useState([]);
    const [page, setPage] = useState(1);
    const handlePaginationChange = (event, value) => {
        setPage(value);
    };
    const getAllBlogpost = async () => {
        try {
            let response = await axios({
                method: "GET",
                url: `/fakedata.json`,
                headers: {
                    "Content-Type": "application/json"
                },
            })
            response.data ? setAllBlogpost(response?.data) : setAllBlogpost([])
        } catch (error) {
            console.log(error.response.data)
        }
    }
    useEffect(() => {
        getAllBlogpost();
    }, [])
    return (
        <>
            <Paper elevation={2} sx={{ p: 1 }}>
                <Box sx={{ p: 2, height: "70.8vh", overflowY: "scroll" }}>
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
        </>
    )
}

export default Homepage