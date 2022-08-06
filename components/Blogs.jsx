import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleBlogpostCard from './SingleBlogpostCard';

const Blogs = () => {
    const [allBlogpost, setAllBlogpost] = useState([]);
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
            <Grid container spacing={2}>
                {
                    allBlogpost.length > 0 &&
                    allBlogpost?.map(post =>
                        <SingleBlogpostCard key={post?.title} post={post} />
                    )
                }
            </Grid>
        </>
    )
}

export default Blogs