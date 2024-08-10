import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import star1 from "../../assets/image/AboutImg/Star-1.png"
import star2 from "../../assets/image/AboutImg/Star-2.png"
import star3 from "../../assets/image/AboutImg/Star-3.png"
import star4 from "../../assets/image/AboutImg/Star-4.png"
// import rightLine from "../../assets/image/AboutImg/right-line-1.png"

function AboutSection2() {
    return (
        <div>
            <Container maxWidth={"xl"}>


                <Box sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" },padding:"35px 0 0 0" }}>
                    <Box>
                        <img src={star1} alt="" style={{ width: "2.5%", padding: "4px 0 0px 0" }} />
                    </Box>
                    <Box >
                        <img src={star2} alt="" style={{ width: "3%", margin: "0 0 10px 10px" }} />
                    </Box>
                </Box>

                {/* <Box sx={{ textAlign: "center", margin: "70px 0 0 0" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "26px" }}>Faith. Honesty. Transparency.</Typography>
                </Box> */}
                <Box sx={{ textAlign: "center", margin: "30px 0 20px 0" }}>
                    <button class="border-el-btn" style={{ fontSize: "22px", fontWeight: "600" }}>
                        Faith. Honesty. Transparency.
                        <span class="b1"></span>
                        <span class="b2"></span>
                        <span class="b3"></span>
                        <span class="b4"></span>
                    </button>
                </Box>

                <Box sx={{ justifyContent: "center", display: "flex" }}>
                    <Box sx={{ width: "64%", textAlign: "center", margin: "24px 0 0 0" }}>
                        <Box sx={{ fontSize: "16px", color: "#7b8aa0" }}>Built on the legacy of trust, ethics and more than 4 decades of excellence, DDPL is synonymous to competence and innovation in diamond manufacturing, catering customers worldwide with finest
                            quality diamonds and simultaneously elevating the norms of paramount business values.</Box>
                        <Box sx={{ fontSize: "16px", color: "#7b8aa0", margin: "20px 0 0 0" }}>The firm takes pride in ensuring our clients to have a rich and fruitful buying experience through our bespoke list of services curated for brand owners and distributors. Our commitment to business relationships is what gives us a competitive edge over others.</Box>
                    </Box>
                </Box>

                <Box sx={{ textAlign: "end", display: { lg: "block", md: "block", sm: "none", xs: "none" } }}>
                    <Typography>
                        <img src={star3} alt="" style={{ width: "2%", padding: "4px 0 0px 0" }} />
                    </Typography>
                    <Typography>
                        <img src={star4} alt="" style={{ width: "3.5%", margin: "0 0 10px 10px" }} />
                    </Typography>
                </Box>

            </Container>
        </div>
    )
}

export default AboutSection2;