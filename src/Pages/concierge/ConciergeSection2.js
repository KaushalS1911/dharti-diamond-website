import { Box, Container, Typography } from '@mui/material';
import card1 from '../../assests/images/concierge/card1.png';
import card2 from '../../assests/images/concierge/cardcrop2.png';
import card3 from '../../assests/images/concierge/card3.png';
import React from 'react';
import heroImg from "../../assets/image/AboutImg/heroImgSection3.png";
import heroImg2 from "../../assets/image/AboutImg/heroImg2Section3.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function ConciergeSection2() {
  return (
    <div>
      <Box>
        <Container>
          <Box sx={{margin:"70px 0 0 0"}}>
            {/* =========================================card1============================ */}


              <Box sx={{
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: { lg: "70px", md: "70px", sm: "10px", sm: "10px" },
                  padding: { lg: '0 0 100px 0', md: '20px 0', sm: '20px', xs: '20px 0' }
              }}
              >
                  <Box
                      sx={{
                          position: 'relative',
                          transform: { lg: 'translateX(-20%)', md: 'translateX(0)', sm: 'translateX(0)', xs: 'translateX(0)' },
                          display: { lg: 'start', md: 'flex', sm: 'flex', xs: 'flex' },
                          justifyContent: { lg: 'start', md: 'center', sm: 'center', xs: 'center' }
                      }}
                  >
                      <img
                          src={card1}
                          alt=""
                          style={{ width: '100%', maxWidth: '590px' }}
                      />
                      <Box
                          sx={{
                              position: 'absolute',
                              top: '65%',
                              right: '-30%',
                              textAlign: 'start',
                              display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' },
                              width: '70%'
                          }}
                      >
                          <Box
                              sx={{
                                  backgroundColor: '#2C3440',
                                  color: '#C5D1E4',
                                  padding: "30px 30px 30px 30px"
                              }}
                          >
                              <Typography
                                  sx={{
                                      fontSize: '24px',
                                      fontWeight: '600',
                                  }}
                              >
                                  Transport Roster
                              </Typography>
                              <Typography sx={{ fontSize: "14px", margin: "14px 0 0 0", lineHeight: "25px" }}>    Just type your pick up time and destination, you will have a car waiting for you. Our aim is to organise every trip be it for long or short distance.}
                              </Typography>

                          </Box>
                      </Box>
                  </Box>
              </Box>

              <Box sx={{ display: { lg: "none", md: "flex", sm: "flex", xs: "flex" }, justifyContent: "center" }} mt={1}>
                  <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", width: { lg:"50%",md: "61%", sm: "82%", xs: "97%" } }}>
                      <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px" }}>
                          <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Transport Roster</Typography>
                          <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}>   Just type your pick up time and destination, you will have a car waiting for you. Our aim is to organise every trip be it for long or short distance.}
                          </Typography>
                      </Box>
                  </Box>
              </Box>

            {/* ===========================================================card-2====================================== */}
              <Box
                  sx={{
                      justifyContent: 'center', display: 'flex', alignItems: 'center', padding: { lg: '55px 0', md: '20px 0', sm: '20px', xs: '20px 0' }
                  }}>
                  <Box sx={{ position: 'relative', transform: { lg: 'translateX(10%)' } }}>
                      <img src={card2} alt="" style={{ width: '100%', maxWidth: '590px' }} />
                      <Box
                          sx={{
                              position: 'absolute', top: '65%', right: '90%', display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }
                          }}>
                          <Box sx={{ backgroundColor: '#C5D1E4', color: '#000', padding: "30px 35px 30px 35px ", width: '190%', textAlign: 'start' }} >
                              <Typography
                                  sx={{
                                      fontSize: '25px',
                                      fontWeight: '600',
                                      color: '#000',
                                      marginBottom: '20px'
                                  }}
                              >
                                  Hospitality
                              </Typography>
                              <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}> Just Select your favourite beverage and snack and click order  </Typography>


                          </Box>

                      </Box>
                      <Box sx={{ display: { lg: "none", md: "block", sm: "block", xs: "block" } }} mt={1}>
                          <Box sx={{  width: { md: "100%", sm: "100%", xs: "100%" }}}>
                              <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px" }}>
                                  <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Hospitality</Typography>
                                  <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}>Just Select your favourite beverage and snack and click order </Typography>

                              </Box>
                          </Box>
                      </Box>
                  </Box>
              </Box>
            {/* ===========================================card-3============================================================ */}



              <Box sx={{
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: { lg: "70px", md: "70px", sm: "10px" },
                  padding: { lg: '0 0 100px 0', md: '20px 0', sm: '20px', xs: '20px 0' }
              }}
              >
                  <Box
                      sx={{
                          position: 'relative',
                          transform: { lg: 'translateX(-20%)', md: 'translateX(0)', sm: 'translateX(0)', xs: 'translateX(0)' },
                          display: { lg: 'start', md: 'flex', sm: 'flex', xs: 'flex' },
                          justifyContent: { lg: 'start', md: 'center', sm: 'center', xs: 'center' }
                      }}
                  >
                      <img
                          src={card3}
                          alt=""
                          style={{ width: '100%', maxWidth: '550px' }}
                      />
                      <Box
                          sx={{
                              position: 'absolute',
                              top: '53%',
                              right: '-30%',
                              textAlign: 'start',
                              display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' },
                              width: '75%'
                          }}
                      >
                          <Box
                              sx={{
                                  backgroundColor: '#2C3440',
                                  color: '#C5D1E4',
                                  padding: "30px 30px 30px 30px"
                              }}
                          >
                              <Typography
                                  sx={{
                                      fontSize: '24px',
                                      fontWeight: '600',
                                      whiteSpace:"nowrap"
                                  }}
                              >
                                  Client Relationship Executive
                              </Typography>
                              <Typography sx={{ fontSize: "14px",  margin: "14px 0 0 0", lineHeight: "25px" }}>Client Relationship executive accompanies customers from the car to office. we are trying to provide personalised services for every client that walks into our office </Typography>


                          </Box>
                      </Box>
                  </Box>
              </Box>

              <Box sx={{ display: { lg: "none", md: "flex", sm: "flex", xs: "flex" }, justifyContent: "center" ,margin:{md:"0 0 50px 0",sm:"0 0 50px 0", xs:"0 0 50px 0"}}} mt={1}>
                  <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", width: { md: "56%", sm: "77%", xs: "97%" } }}>
                      <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px" }}>
                          <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}> Client Relationship Executive</Typography>
                          <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}>   Client Relationship executive accompanies customers from the car to office. we are trying to provide personalised services for every client that walks into our office
                          </Typography>
                      </Box>
                  </Box>
              </Box>






          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default ConciergeSection2;
