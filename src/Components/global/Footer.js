






import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import f_logo from '../../assets/images/Home/f_logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import {useNavigate} from "react-router-dom";

function Footer() {

  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ backgroundColor: "#1e2229", paddingTop: "80px", paddingBottom: "10px" }}>
        <Container>
          <Grid container spacing={8} sx={{ py: "60px", display: "flex", justifyContent: "center" }}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box >
                <Typography sx={{justifyContent:{xs:"center"},display:{xs:"flex"}}}><img src={f_logo} alt="" style={{ width: "60%", padding: "20px 0"}} /></Typography>

                <Box sx={{ display: "flex", gap: "10px", cursor: "pointer" ,justifyContent: "center", margin:{xs:"0 40px 0 0"},paddingLeft: { xs: "50px", lg: "none", md: "none", xl: "none" } }}>
                  <Typography><FacebookIcon sx={{ color: "#73829a" }} /></Typography>
                  <Typography><InstagramIcon sx={{ color: "#73829a" }} /></Typography>
                  <Typography><XIcon sx={{ color: "#73829a" }} /></Typography>
                  <Typography><LinkedInIcon sx={{ color: "#73829a" }} /></Typography>
                  <Typography><WhatsAppIcon sx={{ color: "#73829a" }} /></Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
              <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' },cursor: "pointer"  }}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "500", paddingBottom: "20px" }}>About</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Our Story</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Our Vision</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Our Mission</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Our values</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Facilities</Typography>
              </Box>
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
              <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' },cursor: "pointer"  }}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "500", paddingBottom: "20px" }}>Useful Links</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Terms & Conditions</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Business Principle</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Policy</Typography>
              </Box>
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
              <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' } ,cursor: "pointer" }}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "500", paddingBottom: "20px" }}>Useful Links</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Book Appointment</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }} onClick={()=>navigate("/concierge")}>Concierges Services</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }} onClick={()=>navigate("/suggestions")}>Suggestions</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Contact Us</Typography>
                <Typography sx={{ color: "#bac6d8", fontSize: "13px", lineHeight: "30px" }}>Registration</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box sx={{ color: "white", textAlign: { sm: 'center', md: 'start', lg: 'start', xl: 'start' },cursor: "pointer"  }}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "500", paddingBottom: "20px" }}>Contact Us</Typography>
                <Box sx={{ display: "flex", gap: "15px", justifyContent: { sm: 'center', md: 'start', lg: 'start', xl: 'start' } }}>
                  <Typography><MailOutlineIcon /></Typography>
                  <Typography sx={{ color: "#bac6d8", fontSize: "13px" }}>dhartiDiamond@gmail.com</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px", whiteSpace: "nowrap", paddingTop: "10px", justifyContent: { sm: 'center', md: 'start', lg: 'start', xl: 'start' } }}>
                  <Typography><CallIcon /></Typography>
                  <Box>
                    <Typography sx={{ color: "#bac6d8", fontSize: "14px" }}>+91 98564 78542</Typography>
                    <Typography sx={{ lineHeight: "26px", color: "#bac6d8", fontSize: "14px" }}>+91 65892 85962</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "15px", paddingTop: "10px", justifyContent: { sm: 'center', md: 'start', lg: 'start', xl: 'start' } }}>
                  <Typography><LocationOnIcon /></Typography>
                  <Typography sx={{ color: "#bac6d8", fontSize: "13px", textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' } }}>plot No.3&8, Ashwini Kumar Rd, opp Parvatibai Leprosy Hospital Patel Colony, Ankur Society, Vishnu Nagar, Surat, Gujarat - 395008</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Typography sx={{ display: "flex", fontSize: "14px", cursor: "pointer" ,alignItems: "center", justifyContent: "center", color: "white", borderTop: "solid 1px #bbc6d8", paddingTop: "20px" }}>
          © 2024 Dharti Diamond Pvt. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
