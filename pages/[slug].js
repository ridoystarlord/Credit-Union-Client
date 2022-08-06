import { useRouter } from "next/router";
import {
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

import React from "react";
import LocationCard from "../components/LocationCard";
import Image from "next/image";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  function createMarkup(content) {
    return { __html: content };
  }
  return (
    <>
      <Paper elevation={2} sx={{ p: 2 }}>
        {/* <h1>{post?.title}</h1> */}
        <h1>post title</h1>
        <Image
          src="data:image/jpeg;base64,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"
          alt=""
          layout="responsive"
          width={"100%"}
          height={"50vh"}
        />
        {/* <div dangerouslySetInnerHTML={createMarkup(post?.body)}></div> */}
        <div dangerouslySetInnerHTML={createMarkup(<p>post?.body</p>)}></div>
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
              {/* {post?.officehours?.map((singleday) => (
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
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
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
              {/* {post?.driveruphours?.map((singleday) => (
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
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
        <h2>Service Center Locations</h2>
        <Grid container spacing={2}>
          {/* {post?.locations?.servicecenter?.map((location) => (
            <LocationCard key={location.name} location={location} />
          ))} */}
        </Grid>
        <h2>ATM Locations</h2>
        <Grid container spacing={2}>
          {/* {post?.locations?.atm?.map((location) => (
            <LocationCard key={location.name} location={location} />
          ))} */}
        </Grid>
      </Paper>
    </>
  );
};

export default Slug;
