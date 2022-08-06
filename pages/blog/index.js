import { Grid, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogpageCard from "../../components/BlogpageCard";

const Index = () => {
  const [allBlogpost, setAllBlogpost] = useState([]);
  const getAllBlogpost = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: `/fakedata.json`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      response.data ? setAllBlogpost(response?.data) : setAllBlogpost([]);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    getAllBlogpost();
  }, []);
  return (
    <>
      <Grid container spacing={3}>
        {allBlogpost?.length > 0 &&
          allBlogpost.map((post) => (
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              key={post?._id}
              sx={{ cursor: "pointer" }}
            >
              <BlogpageCard post={post} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Index;
