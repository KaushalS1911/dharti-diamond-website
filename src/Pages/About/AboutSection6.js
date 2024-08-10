import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import togetherness from "../../assets/image/AboutImg/togetherness.png"
import hardwork from "../../assets/image/AboutImg/hardwork.png"
import faith from "../../assets/image/AboutImg/faith.png"
import aptitude from "../../assets/image/AboutImg/aptitude.png"
import innovation from "../../assets/image/AboutImg/innovation.png"
import halfStar1 from "../../assets/image/AboutImg/Half-Star-5.png"


function AboutSection6() {
    return (
        <div>
            <Box sx={{ backgroundColor: "#2c3440", padding: "70px 0 0 0" }}>
                <Container maxWidth={'lg'}>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Box sx={{ width: "45%", paddingBottom: "60px" }}>
                            {/* <Box sx={{ textAlign: "center", margin: "70px 0 0 0" }}>
                                <Typography sx={{ fontWeight: "600", fontSize: "26px", color: "#fff" }}>Our Values</Typography>
                            </Box> */}
                            <Box sx={{ textAlign: "center", padding: "60px 0 30px 0" }}>
                                <button className='borderLine' style={{ fontSize: "26px", fontWeight: "600", color: "#fff" }}>
                                    Our Values
                                    <span class="b1"></span>
                                    <span class="b2"></span>
                                    <span class="b3"></span>
                                    <span class="b4"></span>
                                </button>
                            </Box>
                            <Box sx={{ textAlign: "center" }} mt={2}>
                                <Typography sx={{ color: "#fff", fontSize: "14px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Typography>
                            </Box>
                        </Box>
                    </Box>


                    <Grid item xs={12} container Spacing={1} sx={{ justifyContent: "center", display: "flex" }} >

                        <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "center", padding: "15px 0 20px 0" }}>
                            <Grid item xs={12} lg={4} md={5} sm={12}>
                                <Box sx={{ width: "100%" }} >
                                    <img src={togetherness} alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={5} md={4} sm={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: "0 0 0 20px" }}>
                                <Box sx={{ color: "#fff", fontSize: "15px", lineHeight: "35px", paddingBottom: "21px" }}>Across all levels and functions, we will always strive to work in an environment of togetherness and equality. We take pride in creating an environment where everyone is part of a family; not just employees but their families form a part of this integrated culture. We’re driven as a family with one common purpose to achieve the highest standards of offerings, service and commitment.</Box>
                            </Grid>
                        </Box>

                        <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "center", padding: "15px 0 20px 0" }}>
                            <Grid item xs={12} lg={5} md={4} sm={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: "0 0 0 20px" }}>
                                <Box sx={{ color: "#fff", fontSize: "15px", lineHeight: "35px", paddingBottom: "21px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </Box>
                            </Grid>
                            <Grid item xs={12} lg={4} md={5} sm={12}>
                                <Box sx={{ width: "100%" }} >
                                    <img src={hardwork} alt="" />
                                </Box>
                            </Grid>
                        </Box>

                        <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "center", padding: "15px 0 20px 0" }}>
                            <Grid item xs={12} lg={4} md={5} sm={12}>
                                <Box sx={{ width: "100%" }} >
                                    <img src={faith} alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={5} md={4} sm={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: "0 0 0 20px" }}>
                                <Box sx={{ color: "#fff", fontSize: "15px", lineHeight: "37px", paddingBottom: "21px" }}>Across all levels and functions, we will always strive to work in an environment of togetherness and equality. We take pride in creating an environment where everyone is part of a family; not just employees but their families form a part of this integrated culture. We’re driven as a family with one common purpose to achieve the highest standards of offerings, service and commitment.</Box>
                            </Grid>
                        </Box>

                        <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "center", padding: "15px 0 20px 0" }}>
                            <Grid item xs={12} lg={5} md={4} sm={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: "0 0 0 20px" }}>
                                <Box sx={{ color: "#fff", fontSize: "15px", lineHeight: "35px", paddingBottom: "21px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </Box>
                            </Grid>
                            <Grid item xs={12} lg={4} md={5} sm={12}>
                                <Box sx={{ width: "100%" }} >
                                    <img src={aptitude} alt="" />
                                </Box>
                            </Grid>
                        </Box>

                        <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "center", padding: "15px 0 0 0" }}>
                            <Grid item xs={12} lg={4} md={5} sm={12}>
                                <Box sx={{ width: "100%" }} >
                                    <img src={innovation} alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={5} md={4} sm={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center", padding: "0 0 0 20px" }}>
                                <Box sx={{ color: "#fff", fontSize: "15px", lineHeight: "37px", paddingBottom: "21px" }}>Across all levels and functions, we will always strive to work in an environment of togetherness and equality. We take pride in creating an environment where everyone is part of a family; not just employees but their families form a part of this integrated culture. We’re driven as a family with one common purpose to achieve the highest standards of offerings, service and commitment.</Box>
                            </Grid>
                        </Box>


                    </Grid>
                </Container>
                <Box sx={{ textAlign: "end", transform: "translateY(-130%)" }}>
                    <img src={halfStar1} alt="" style={{ width: "7%", color: "#fff" }} />
                </Box>
            </Box>
        </div>
    )
}

export default AboutSection6;