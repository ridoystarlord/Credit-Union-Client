import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const aboutus = () => {
  return (
    <>
      <Paper elevation={2} sx={{ p: 2 }}>
        <h1 style={{ textAlign: "center", marginTop: "0" }}>About Us</h1>
        <p style={{ textAlign: "justify" }}>
          Welcome to Credit Union Blog. In this Blog, I am going to share some
          amazing Credit Union news & facts about some common famous credit
          union banks. So if you are love to know this news then you can
          bookmark my Blog.
        </p>
        <p>Cheers from</p>
        <p>Ridoy</p>
      </Paper>
    </>
  );
};

export default aboutus;
