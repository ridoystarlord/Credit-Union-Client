import { Container } from "@mui/material";
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
        url: `/data.json`,
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
        <Component {...pageProps} allBlogpost={allBlogpost} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
