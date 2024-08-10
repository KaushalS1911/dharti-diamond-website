import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import star1 from "../../assets/image/AboutImg/Star-1.png"
import star2 from "../../assets/image/AboutImg/Star-2.png"
import star3 from "../../assets/image/AboutImg/Star-3.png"
import star4 from "../../assets/image/AboutImg/Star-4.png"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

function ContactSection() {
  return (
    <div style={{ backgroundColor: "#F9F9F9",}}>

      <Box sx={{ display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
        <Box>
          <img src={star1} alt="" style={{ width: "2%", padding: "4px 0 0px 0", transform: "translateY(850%)" }} />
        </Box>
        <Box >
          <img src={star2} alt="" style={{ width: "3%", margin: "0 0 10px 10px", transform: "translateY(620%)" }} />
        </Box>
      </Box>

      <Container>

        {/* <Box sx={{ textAlign: "center", padding: "0 0 40px 0" }}>
          <Typography sx={{ fontWeight: "600", fontSize: "26px" }}>Get in Touch</Typography>
        </Box> */}
        <Box sx={{ textAlign: "center", padding: {lg:"0 0 70px 0",md:"30px 0 50px 0",sm:"30px 0 40px 0",xs:"30px 0 40px 0"}}}>
          <button class="border-el-btn" style={{ fontSize: "26px", fontWeight: "600", color: "#000" }}>
            Get in Touch
            <span class="b1"></span>
            <span class="b2"></span>
            <span class="b3"></span>
            <span class="b4"></span>
          </button>
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={2} sx={{ display: "flex", justifyContent: "center" }}>

          <Grid item xs={12} lg={6} md={6} sm={12}>

            <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "space-between" }}>
              <Box sx={{ padding: { lg: "0 0", md: "0 0", sm: "12px 0", xs: "12px 0" } }}>
                <input type="text" placeholder='Name' style={{ padding: "13px 122px 13px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
              </Box>
              <Box>
                <input type="text" placeholder='Email Adderess' style={{ padding: "13px 122px 13px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
              </Box>
            </Box>

            <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "space-between", padding: { lg: "12px 0", md: "12px 0", sm: "12px 0" } }}>
              <Box sx={{ padding: { lg: "0 0", md: "0 0", sm: "12px 0", xs: "12px 0" } }}>
                <input type="text" placeholder='Company Name' style={{ padding: "13px 122px 13px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
              </Box>
              <Box>
                <input type="text" placeholder='Mobile' style={{ padding: "13px 122px 13px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
              </Box>
            </Box>

            <Box>
              <input type="text" placeholder='Message' style={{ padding: "11px 90px 75px 10px", borderRadius: "0", outline: "none", border: "none", width: "99%" }} />
            </Box>

            <Box sx={{ justifyContent: "center", display: "flex", padding: "27px 0" }}>
              <Box sx={{ backgroundColor: "#73829a", width: { lg: "40%", md: "45%", sm: "45%", xs: "60%" }, padding: "7px 0", color: "#fff", textAlign: "center" }}>
                Lets Connect
              </Box>
            </Box>

          </Grid>

          <Grid item xs={12} lg={5} md={6} sm={12}>

            <Box sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" }, padding: "12px 14px", alignItems: "center", backgroundColor: "#fff" }}>
              <Typography sx={{ backgroundColor: "#F9F9F9" }}><EmailOutlinedIcon sx={{ fontSize: "25px", marginLeft: "10px" }}></EmailOutlinedIcon></Typography>
              <Box sx={{ fontFamily: "Poppins" }}>
                <Typography sx={{ marginLeft: "10px", fontWeight: "700" }}>Mail Here</Typography>
                <Typography sx={{ color: "#646464", marginLeft: "10px", fontSize: "16px" }}>dhartidiamonds@gmail.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" }, padding: "12px 14px", alignItems: "center", backgroundColor: "#fff" }} mt={1}>
              <Typography sx={{ backgroundColor: "#F9F9F9" }}><LocationOnOutlinedIcon sx={{ fontSize: "27px", marginLeft: "10px" }}></LocationOnOutlinedIcon></Typography>
              <Box sx={{ fontFamily: "Poppins" }}>
                <Typography sx={{ marginLeft: "10px", fontWeight: "700" }}>Visit Us</Typography>
                <Typography sx={{ color: "#646464", marginLeft: "10px", fontSize: "14px" }}>PLOT NO.3&5, Ashwini Kumar Rd, opp. PARVATIBAI LEPROSY HOSPITAL PATEL COLONY, Ankur Society, Vishnu Nagar, Kodiyar Nagar, Surat, Gujarat 395008</Typography>
              </Box>
            </Box>
            <Box sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" }, padding: "12px 14px", alignItems: "center", backgroundColor: "#fff" }} mt={1}>
              <Typography sx={{ backgroundColor: "#F9F9F9" }}><CallOutlinedIcon sx={{ fontSize: "25px", marginLeft: "10px" }}></CallOutlinedIcon></Typography>
              <Box sx={{ fontFamily: "Poppins" }}>
                <Typography sx={{ marginLeft: "10px", fontWeight: "700" }}>Call Here</Typography>
                <Typography sx={{ color: "#646464", marginLeft: "10px", fontSize: "16px" }}>+91 58962 58412</Typography>
              </Box>
            </Box>

          </Grid>

        </Grid>

      </Container>

      <Box sx={{ textAlign: "end", display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
        <Typography>
          <img src={star3} alt="" style={{ width: "1.5%", padding: "4px 0 0px 0" }} />
        </Typography>
        <Typography>
          <img src={star4} alt="" style={{ width: "3.5%", margin: "0 0 10px 10px", transform: "translateY(-25%)" }} />
        </Typography>
      </Box>

    </div>
  )
}

export default ContactSection;