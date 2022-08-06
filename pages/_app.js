import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
      <Navbar />
      <Container sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Component {...pageProps} />
          </Grid>
          <Grid item xs={12} md={4}>
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
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
