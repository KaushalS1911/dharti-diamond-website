import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';

function AboutSection7() {
    return (
        <div>
            <Container maxWidth={"xl"}>

                <Box sx={{ textAlign: "center", margin: "80px 0 0 0" }}>
                    {/* <Typography sx={{ fontWeight: "600", fontSize: "26px" }}>Facilities</Typography> */}
                    <Box sx={{ textAlign: "center", padding: "30px 0 40px 0" }}>
                    <button class="border-el-btn" style={{ fontSize: "26px", fontWeight: "600" }}>
                    Facilities
                        <span class="b1"></span>
                        <span class="b2"></span>
                        <span class="b3"></span>
                        <span class="b4"></span>
                    </button>
                </Box>
                    <Typography sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "15px" }} mt={1}>It's All About SIZE, SCALE And SKILLS</Typography>
                </Box>

                <Box sx={{ justifyContent: "center", display: "flex" }}>
                    <Box sx={{ width: "64%", textAlign: "center", margin: "24px 0 0 0" }}>
                        <Box sx={{ fontSize: "16px", color: "#7b8aa0" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.</Box>
                        <Box sx={{ fontSize: "16px", color: "#7b8aa0", margin: "20px 0 0 0" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and the like)</Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default AboutSection7;