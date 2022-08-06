import { Divider, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const contactus = ({ allBlogpost }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <h1 style={{ textAlign: "center", marginTop: "0" }}>Contact Us</h1>
            <p style={{ textAlign: "justify" }}>
              Thanks for reaching with us. We are happy to solve your Queries.
              We try to resolve your Query in 24-48 hours. We are so much Active
              on Email.Our Email is
            </p>
            <p>
              <b>Gmail:</b> creditunion@gmail.com
            </p>
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

export default contactus;
