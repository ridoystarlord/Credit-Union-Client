import { useRouter } from "next/router";
import {
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import LocationCard from "../components/LocationCard";
import Image from "next/image";
import Link from "next/link";

const Slug = ({ allBlogpost }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const [singlePost, setSinglePost] = useState(null);

  function createMarkup(content) {
    return { __html: content };
  }
  // const getAllBlogpost = async () => {
  //   try {
  //     let response = await axios({
  //       method: "GET",
  //       url: `/fakedata.json`,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(response.data);
  //     response.data
  //       ? setSinglePost(response?.data?.find((post) => post.slug === slug))
  //       : setSinglePost(null);
  //   } catch (error) {
  //     console.log(error?.response?.data);
  //   }
  // };
  useEffect(() => {
    setSinglePost(allBlogpost.find((post) => post.slug === slug));
  }, [slug]);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <h1>{singlePost?.title}</h1>
            <Image
              src={singlePost?.img}
              alt=""
              layout="responsive"
              width={"100%"}
              height={"50vh"}
            />
            <div dangerouslySetInnerHTML={createMarkup(singlePost?.body)}></div>
            <h2>{`${singlePost?.title} Office Hours`}</h2>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead style={{ background: "#1976D2" }}>
                  <TableRow>
                    <TableCell style={{ color: "#FFFFFF" }}>Day</TableCell>
                    <TableCell style={{ color: "#FFFFFF" }} align="left">
                      Hours
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {singlePost?.officehours?.map((singleday) => (
                    <TableRow
                      hover
                      key={singleday.day}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {singleday?.day}
                      </TableCell>
                      <TableCell data-testid="view-name" align="left">
                        {singleday?.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <h2>{`${singlePost?.title} Driver Up Hours`}</h2>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table size="small" aria-label="a dense table">
                <TableHead style={{ background: "#1976D2" }}>
                  <TableRow>
                    <TableCell style={{ color: "#FFFFFF" }}>Day</TableCell>
                    <TableCell style={{ color: "#FFFFFF" }} align="left">
                      Hours
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {singlePost?.driveruphours?.map((singleday) => (
                    <TableRow
                      hover
                      key={singleday.day}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {singleday?.day}
                      </TableCell>
                      <TableCell data-testid="view-name" align="left">
                        {singleday?.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <h2>{`${singlePost?.title} Service Center Locations`}</h2>
            <Grid container spacing={2}>
              {singlePost?.locations?.servicecenter?.map((location) => (
                <LocationCard key={location.name} location={location} />
              ))}
            </Grid>
            <h2>{`${singlePost?.title} ATM Locations`}</h2>
            <Grid container spacing={2}>
              {singlePost?.locations?.atm?.map((location) => (
                <LocationCard key={location.name} location={location} />
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
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

export default Slug;
