import { Box, Container, Typography } from '@mui/material'
import star1 from "../../assests/images/global/star 1.png";
import star2 from "../../assests/images/global/star 2.png";
import React from 'react'

function ConciergeSection1() {
  return (
    <div>
    <Box sx={{backgroundColor:"#2C3440",marginTop:"-10px"}}>
        <Container>
            <Box>
            <Box sx={{ textAlign: "center", paddingTop:"50px"}}>
            <button class="btns" style={{fontSize:"22px", fontWeight:"600", color:"#FFF"}}>
              Dharti Concierge Services
                <span class="b1"></span>
                <span class="b2"></span>
                <span class="b3"></span>
                <span class="b4"></span>
            </button>
            </Box>
            <Typography sx={{color:"#8997ae" ,width:"60%", transform:"translateX(33%)", py:"50PX", lineHeight:"30px", fontSize:"15px", fontWeight:"600"}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of
            the word in classical literature, discovered the undoubtable source.
            </Typography>
            </Box>

            <Box 
              sx={{
                textAlign: "start",
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
                transform:"translateY(-60%)"
              }}
            >
              <Typography>
                <img
                  src={star1}
                  alt=""
                  style={{ width: "2.5%", padding: "4px 0 0px 0" }}
                />
              </Typography>
              <Typography>
                <img
                  src={star2}
                  alt=""
                  style={{ width: "3%", margin: "0 0 10px 10px" }}
                />
              </Typography>
            </Box>
        </Container>
    </Box>
    </div>
  )
}

export default ConciergeSection1
