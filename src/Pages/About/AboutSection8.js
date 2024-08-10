import React from 'react'
import imgs1 from "../../assets/image/AboutImg/section7-Img1.png"
import imgs2 from "../../assets/image/AboutImg/section7-Img2.png"
import imgs3 from "../../assets/image/AboutImg/section7-Img3.png"
import { Box, Container, Grid } from '@mui/material'
import star1 from "../../assets/image/AboutImg/section7-star1.png"
import star2 from "../../assets/image/AboutImg/section7-star2.png"

function AboutSection8() {
    return (
        <div>
            <Box sx={{ padding:"60px 0 0 0", display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
                <Box sx={{ width: "2%", transform: "translateX(55px)" }}><img src={star2} alt="" /></Box>
                <Box sx={{ width: "5%", transform: "translateY(-15px)" }}><img src={star1} alt="" /></Box>
            </Box>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent: {lg:"center",md:"center",sm:"center",xs:"center"}, display:{ld:"flex",md:"flex",sm:"flex",xs:"flex"},margin:{lg:"0 0 0 0",md:"100px 0 0 0",sm:"100px 0 0 0",xs:"100px 0 0 0"} }}>
                    <Grid item xs={12} lg={3} md={3} sm={3}>
                        <Box>
                            <img src={imgs1} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3} md={3} sm={3}>
                        <Box>
                            <img src={imgs2} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3} md={3} sm={3}>
                        <Box>
                            <img src={imgs3} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutSection8;