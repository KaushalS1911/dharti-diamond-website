
import { Box, Typography, Container } from '@mui/material';
import React from 'react';
import Round_diam from '../../assets/images/Home/RoundDiamond.png';

function Round_diamond() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#2F9F9F9" ,marginTop:"100px",marginBottom:"220px"}}>
        <Container maxWidth="xl">
          <Box sx={{position: "relative", display: "flex", justifyContent: "center", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
            <Box sx={{ width: { xs: "100%", md: "60%" ,lg:"50%"}, mb: { xs: 2, md: 0 } }}>
              <img src={Round_diam} alt="Round Diamond" style={{ width: "90%" }} />
            </Box>
            <Box sx={{width: { xs: "90%", md: "40%",lg:"35%" }, textAlign: "start", boxShadow: "0px 0px 1px black", position: { xs: "relative", md: "absolute" }, top: { md: "45%" }, left: { md: "50%" }, transform: { md: "translateY(20%)" }, backgroundColor: "white", p: 4 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 23 }}>
                Round diamond
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 23 }}>
                manufacturers of repute
              </Typography>
              <Typography sx={{ fontSize: 13, pt: 1, fontWeight: 500 }}>
                In a world of averages, we are Specialists in manufacturing Round Belgium Cut Diamonds.
              </Typography>
              <Typography sx={{ fontSize: 13, pt: 1, fontWeight: 500 }}>
                We deliver 99% accuracy and no variations. Precision and perfection are engrained in our culture.
              </Typography>
              <Typography sx={{ fontSize: 13, pt: 1, fontWeight: 500 }}>
                We have been manufacturing Round Belgium Cut diamonds for the last 42 years with two generations of skilled artisans.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Round_diamond;
