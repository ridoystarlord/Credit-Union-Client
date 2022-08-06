import { Divider, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const aboutus = ({ allBlogpost }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <h1 style={{ textAlign: "center", marginTop: "0" }}>About Us</h1>
            <p style={{ textAlign: "justify" }}>
              Welcome to Credit Union Blog. In this Blog, I am going to share
              some amazing Credit Union news & facts about some common famous
              credit union banks. So if you are love to know this news then you
              can bookmark my Blog.
            </p>
            <p>Cheers from</p>
            <p>Ridoy</p>
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
  );
};

export default aboutus;
