import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import images1 from "../../assets/image/AboutImg/Section9-Img1.png"
import images2 from "../../assets/image/AboutImg/Section9-Img2.png"
import images3 from "../../assets/image/AboutImg/Section9-Img3.png"
import images4 from "../../assets/image/AboutImg/Section9-Img4.png"
import images5 from "../../assets/image/AboutImg/Section9-Img5.png"
import images6 from "../../assets/image/AboutImg/Section9-Img6.png"
import images7 from "../../assets/image/AboutImg/Section9-Img7.png"
import images8 from "../../assets/image/AboutImg/Section9-Img8.png"
import images9 from "../../assets/image/AboutImg/Section9-Img9.png"
import images10 from "../../assets/image/AboutImg/Section9-Img10.png"
import images11 from "../../assets/image/AboutImg/Section9-Img11.png"
import images12 from "../../assets/image/AboutImg/Section9-Img12.png"
import images13 from "../../assets/image/AboutImg/Section9-Img13.png"
import images14 from "../../assets/image/AboutImg/Section9-Img14.png"
import images15 from "../../assets/image/AboutImg/Section9-Img15.png"
import images16 from "../../assets/image/AboutImg/Section9-Img16.png"
import images17 from "../../assets/image/AboutImg/Section9-Img17.png"
import images18 from "../../assets/image/AboutImg/Section9-Img18.png"
import halfStar2 from "../../assets/image/AboutImg/section9-halfStar.png"


function AboutSection9() {

    const data = [
        {
            img: images1,
            title1: "8,000+",
            title2: "Skilled Assets"
        },
        {
            img: images2,
            title1: "44,000",
            title2: "Square feet Head Office"
        },
        {
            img: images3,
            title1: "79+",
            title2: "Dedicated & Energetic Team of Sales Rep."
        },
        {
            img: images4,
            title1: "Fastest",
            title2: "Buying Application"
        }
    ]
    const data2 = [
        {
            img1: images5,
            title3: "4 Mines",
            title4: "Direct Rough Diamond Source"
        },
        {
            img1: images6,
            title3: "10+",
            title4: "Innovative Products"
        },
        {
            img1: images7,
            title3: "Wide Range",
            title4: " of Non Certified Diamonds"
        },
    ]
    const data3 = [
        {
            img1: images8,
            title1: "Customers",
            title2: "We Treat Customers as Family Members"
        },
        {
            img1: images9,
            title1: "50,000+",
            title2: "Certified Stones"
        },
        {
            img1: images10,
            title1: "9+",
            title2: "Shapes"
        },
        {
            img1: images11,
            title1: "Fair & Fixed",
            title2: "Price Policy"
        },
    ]
    const data4 = [
        {
            img1: images12,
            title1: "24 x 7",
            title2: "Sales Service"
        },
        {
            img1: images13,
            title1: "5 Countries",
            title2: "Distribution"
        },
        {
            img1: images14,
            title1: "Blockchain",
            title2: "Process"
        }
    ]
    const data5 = [
        {
            img1: images15,
            title1: "1 Step",
            title2: "Solution for Polish Diamond to Branded Jewellery"
        },
        {
            img1: images16,
            title1: "22 Awards",
            title2: "in 18 Consecutive Years by GJEPC"
        },
        {
            img1: images17,
            title1: "Fastest",
            title2: "Growing Company"
        },
        {
            img1: images18,
            title1: "45 Acres",
            title2: "State-of-the-art Mfg. Unit"
        }
    ]
    return (
        <div>
            <Container sx={{ padding: "85px 0 0 0" }}>
                {/* <Box sx={{ textAlign: "center", padding: "40px 0 40px 0" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "26px" }}>Dharti Pillars of Strength</Typography>
                </Box> */}
                <Box sx={{ textAlign: "center", padding: "60px 0 80px 0" }}>
                    <button class="border-el-btn" style={{ fontSize: "26px", fontWeight: "600" }}>
                        Dharti Pillars of Strength
                        <span class="b1"></span>
                        <span class="b2"></span>
                        <span class="b3"></span>
                        <span class="b4"></span>
                    </button>
                </Box>

                <Grid container item xs={12}>
                    {
                        data.map((item) => {
                            return (
                                <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ border: "1px solid #adb4bf4f", textAlign: "center", width: "225px", height: "195px", padding: "22px 0", marginBottom: "20px" }}>
                                        <Box>
                                            <img src={item.img} alt="" style={{ width: "30%", textAlign: "center" }} />
                                        </Box>
                                        <Box sx={{ width: "100%", textAlign: "center" }}>
                                            <Typography sx={{ fontSize: "19px", fontWeight: "600", padding: "14px 0 7px 0" }}>{item.title1}</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#73829A" }}>{item.title2}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <Grid container item xs={12} padding={"30px 0"} justifyContent={"center"} display={"flex"}>
                    {
                        data2.map((item) => {
                            return (
                                <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ border: "1px solid #adb4bf4f", textAlign: "center", width: "225px", height: "195px", padding: "22px 0", marginBottom: "20px " }}>
                                        <Box>
                                            <img src={item.img1} alt="" style={{ width: "30%", textAlign: "center" }} />
                                        </Box>
                                        <Box sx={{ width: "100%", textAlign: "center" }}>
                                            <Typography sx={{ fontSize: "19px", fontWeight: "600", padding: "14px 0 7px 0" }}>{item.title3}</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#73829A" }}>{item.title4}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <Grid container item xs={12}>
                    {
                        data3.map((item) => {
                            return (
                                <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ border: "1px solid #adb4bf4f", textAlign: "center", width: "225px", height: "195px", padding: "22px 0", marginBottom: "20px" }}>
                                        <Box>
                                            <img src={item.img1} alt="" style={{ width: "30%", textAlign: "center" }} />
                                        </Box>
                                        <Box sx={{ width: "100%", textAlign: "center" }}>
                                            <Typography sx={{ fontSize: "19px", fontWeight: "600", padding: "14px 0 7px 0" }}>{item.title1}</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#73829A" }}>{item.title2}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <Grid container item xs={12} padding={"30px 0"} justifyContent={"center"} display={"flex"}>
                    {
                        data4.map((item) => {
                            return (
                                <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ border: "1px solid #adb4bf4f", textAlign: "center", width: "225px", height: "195px", padding: "22px 0", marginBottom: "20px" }}>
                                        <Box>
                                            <img src={item.img1} alt="" style={{ width: "30%", textAlign: "center" }} />
                                        </Box>
                                        <Box sx={{ width: "100%", textAlign: "center" }}>
                                            <Typography sx={{ fontSize: "19px", fontWeight: "600", padding: "14px 0 7px 0" }}>{item.title1}</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#73829A" }}>{item.title2}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                            )

                        })

                    }
                </Grid>

                <Grid container item xs={12} justifyContent={"center"} display={"flex"}>
                    {
                        data5.map((item) => {
                            return (
                                <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ border: "1px solid #adb4bf4f", textAlign: "center", width: "225px", height: "195px", padding: "22px 0", marginBottom: "20px" }}>
                                        <Box>
                                            <img src={item.img1} alt="" style={{ width: "30%", textAlign: "center" }} />
                                        </Box>
                                        <Box sx={{ width: "100%", textAlign: "center" }}>
                                            <Typography sx={{ fontSize: "19px", fontWeight: "600", padding: "14px 0 7px 0" }}>{item.title1}</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#73829A" }}>{item.title2}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

            </Container>
            <Box sx={{ textAlign: "end", transform: "translateY(-350%)" }}>
                <img src={halfStar2} alt="" style={{ width: "6%", color: "#fff" }} />
            </Box>
        </div>
    )
}

export default AboutSection9;