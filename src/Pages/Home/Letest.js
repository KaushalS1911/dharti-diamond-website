import React from 'react'
import  { Box, Container, Grid, Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import letest1 from "../../assets/images/Home/letest_diam1.png"
import latest2 from "../../assets/images/Home/latest.png"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import star14 from '../../assets/images/Home/Star 14 .png'
import star15 from '../../assets/images/Home/Star 15 .png'
function Letest() {

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                style={{ position: "absolute", top: "50%", right: "30px", transform: "translateX(300%)" }}
                onClick={onClick}
            >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#fff", backgroundColor: "#8e99ad", borderRadius: "50%", fontSize: "25px", padding: "4px",display:{xs:"none"} }} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                style={{ position: "absolute", top: "50%", left: "0px", transform: "translateX(-195%)" }}
                onClick={onClick}
            >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#fff", backgroundColor: "#8e99ad", borderRadius: "50%", fontSize: "25px", padding: "4px" ,display:{xs:"none"} }} />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


  return (
    <div>
    <Box sx={{backgroundColor:"#2c3440",paddingTop:"40px"}}>
    <Container maxWidth={"lg"} sx={{ border: "none" ,paddingBottom:"100px"}}>
           
                <Box sx={{ textAlign: "center", margin: "30px 0 0 0" }}>
            <button class="buttonBorder" style={{fontSize:"22px", fontWeight:"600",color:"white"}}>
            Latest New Diamond
                <span class="b1" ></span>
                <span class="b2"></span>
                <span class="b3"></span>
                <span class="b4"></span>
            </button>
            </Box>
                <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                        <Box sx={{ width: "100%", marginTop: "50px" }}>
                            <Grid item xs={12}>
                                <Slider {...settings} style={{columnGap: "100px"}}>
                                    <Box sx={{border:"solid 10px #2c3440"}}>
                                        <img src={letest1} alt="lisa"  style={{width:"100%",}} />
                                    </Box>
                                    <Box sx={{border:"solid 10px #2c3440"}}>
                                        <img src={latest2} alt="alex"  style={{width:"100%"}}/>
                                    </Box>
                                </Slider>
                            </Grid>
                            
                        </Box>

                    </Box>
                </Box>
            </Container>
           <Typography sx={{textAlign:"staRT"}}>
           <img src={star14} alt=""  style={{width:"10%"}}/>
            <img src={star15} alt="" style={{width:"2.5%"}}/>
           </Typography>
    </Box>
      
    </div>
  )
}

export default Letest
