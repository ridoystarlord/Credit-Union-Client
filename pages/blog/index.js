import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import BlogpageCard from "../../components/BlogpageCard";

const Index = ({ allBlogpost }) => {
  return (
    <>
      <Grid container spacing={3}>
        {allBlogpost?.length > 0 &&
          allBlogpost.map((post) => (
            <Link href={`/${post.slug}`} key={post?._id}>
              <Grid item xs={12} md={4} lg={4} sx={{ cursor: "pointer" }}>
                <BlogpageCard post={post} />
              </Grid>
            </Link>
          ))}
      </Grid>
    </>
  );
};

export default Index;
