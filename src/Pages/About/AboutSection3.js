import { Box, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import heroImg from "../../assets/image/AboutImg/heroImgSection3.png"
import heroImg2 from "../../assets/image/AboutImg/heroImg2Section3.png"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import halfStar from "../../assets/image/AboutImg/Half-Star-5.png"
import star6 from "../../assets/image/AboutImg/Star-6.png"

function AboutSection3() {
    return (
        <div>

            <Box sx={{ backgroundColor: "#2c3440", color: "#fff", paddingBottom: "100px", margin: { lg: "30px 0 0 0", md: "40px 0 0 0 ", sm: "40px 0 0 0", xs: "40px 0 0 0" } }}>

                <Box sx={{ textAlign: "end",transform:"translateY(180px)" ,display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>
                    <img src={halfStar} alt="" style={{ width: "3.5%" }} />
                </Box>

                <Container>
                    <Box sx={{ textAlign: "center", padding: "20px 0 0 0" }}>
                        <button className='borderLine' style={{ fontSize: "23px", fontWeight: "600", color: "#fff" }}>
                            Our Values Define Our Action
                            <span class="b1"></span>
                            <span class="b2"></span>
                            <span class="b3"></span>
                            <span class="b4"></span>
                        </button>
                    </Box>



                    {/* =========================== Box-1 ============================== */}

                    <Box sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: { lg: "70px", md: "70px", sm: "10px" },
                        padding: { lg: '15px 0 100px 0', md: '20px 0', sm: '20px', xs: '20px 0' }
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
                                src={heroImg}
                                alt=""
                                style={{ width: '100%', maxWidth: '550px' }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '-40%',
                                    textAlign: 'start',
                                    display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' },
                                    width: '85%'
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: '#C5D1E4',
                                        color: '#000',
                                        padding: "30px 30px 30px 30px"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: '600',
                                            color: '#000'
                                        }}
                                    >
                                        Our Mission
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", color: "#000", margin: "14px 0 0 0", lineHeight: "25px" }}>Deliver “The Kiran Experience” to our Global Clientele through an unmatched bouquet of products and services of the highest quality, backed by the assurance of our world class manufacturing infrastructure, continuous appraisal and consistent innovation.</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: { lg: "none", md: "flex", sm: "flex", xs: "flex" }, justifyContent: "center" }} mt={1}>
                        <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", width: { md: "56%", sm: "77%", xs: "97%" } }}>
                            <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px" }}>
                                <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Our Mission</Typography>
                                <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}>Deliver “The Kiran Experience” to our Global Clientele through an unmatched bouquet of products and services of the highest quality, backed by the assurance of our world class manufacturing infrastructure, continuous appraisal and consistent innovation.</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* =========================== Box-2 ================================= */}

                    <Box
                        sx={{
                            justifyContent: 'center', display: 'flex', alignItems: 'center', padding: { lg: '55px 0', md: '20px 0', sm: '20px', xs: '20px 0' }
                        }}>
                        <Box sx={{ position: 'relative', transform: { lg: 'translateX(20%)' } }}>
                            <img src={heroImg2} alt="" style={{ width: '100%', maxWidth: '550px' }} />
                            <Box
                                sx={{
                                    position: 'absolute', top: '50%', right: '95%', display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }
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
                                        Our Mission
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ margin: "10px 0 0 0", whiteSpace: "nowrap" }}>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PASSION</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PARTNERSHIP</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PROGRESS</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PERFORMANCE</Typography>
                                            <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PRINCIPLES</Typography>
                                        </Box>
                                        <Box sx={{ margin: "10px 0 0 0" }}>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Enhance Nature’s beauty</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Work together to win</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Move forever forward</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Add value blending skills and technology</Typography>
                                            <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Uphold ethics to exce</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                            <Box sx={{ display: { lg: "none", md: "block", sm: "block", xs: "block" } }} mt={1}>
                                <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", width: { md: "96%", sm: "96%", xs: "100%" } }}>
                                    <Box sx={{ border: "1px solid #c5d1e4", backgroundColor: "#c5d1e4", color: "#000", padding: "20px 20px" }}>
                                        <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: "600" }}>Our Vision</Typography>
                                        <Typography sx={{ fontSize: "15px", color: "#000", margin: "14px 0 0 0" }}>To be the preferred diamantaire to the world by embracing the core values of :</Typography>
                                        <Box sx={{ display: { lg: "flex", md: "flex", sm: "block", xs: "block" }, justifyContent: "space-between" }}>
                                            <Box sx={{ margin: "10px 0 0 0" }}>
                                                <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PASSION</Typography>
                                                <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PARTNERSHIP</Typography>
                                                <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PROGRESS</Typography>
                                                <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PERFORMANCE</Typography>
                                                <Typography sx={{ fontSize: "12px", lineHeight: "24px" }}><FiberManualRecordIcon sx={{ fontSize: "8px", marginRight: "5px" }}></FiberManualRecordIcon>PRINCIPLES</Typography>
                                            </Box>
                                            <Box sx={{ margin: "10px 0 0 0" }}>
                                                <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Enhance Nature’s beauty</Typography>
                                                <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Work together to win</Typography>
                                                <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Move forever forward</Typography>
                                                <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Add value blending skills and technology</Typography>
                                                <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>Uphold ethics to exce</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </div>
    )
}

export default AboutSection3;