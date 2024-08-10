import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import star1 from "../../assets/image/AboutImg/Star-1.png"
import star2 from "../../assets/image/AboutImg/Star-2.png"
import star3 from "../../assets/image/AboutImg/Star-3.png"
import star4 from "../../assets/image/AboutImg/Star-4.png"

function SuggestionsSection() {
    return (
        <div style={{ backgroundColor: "#F5F4F3", padding: "0 0 20px 0" }}>
            <Container maxWidth={"xl"}>


                <Box sx={{ display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
                    <Box>
                        <img src={star1} alt="" style={{ width: "2%", padding: "4px 0 0px 0", transform: "translateY(850%)" }} />
                    </Box>
                    <Box >
                        <img src={star2} alt="" style={{ width: "3%", margin: "0 0 10px 10px", transform: "translateY(620%)" }} />
                    </Box>
                </Box>

                {/* <Box sx={{ textAlign: "center", padding: "0 0 40px 0" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "26px" }}>Suggestions</Typography>
                </Box> */}
                <Box sx={{ textAlign: "center", padding: {lg:"0 0 50px 0",md:"30px 0 50px 0",sm:"30px 0 50px 0",xs:"30px 0 50px 0"} }}>
                    <button class="border-el-btn" style={{ fontSize: "26px", fontWeight: "600", color: "#000" }}>
                        Suggestions
                        <span class="b1"></span>
                        <span class="b2"></span>
                        <span class="b3"></span>
                        <span class="b4"></span>
                    </button>
                </Box>


                <Box>
                    <Grid item container rowSpacing={1} xs={12} sx={{ justifyContent: "center", display: "flex" }} spacing={2} >
                        <Grid item xs={12} lg={3} md={4} sm={6}>
                            <Box>
                                <input type="text" placeholder='Name' style={{ padding: "13px 90px 13px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3} md={4} sm={6}>
                            <Box>
                                <input type="text" placeholder='Email Adderess' style={{ padding: "11px 90px 11px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item container rowSpacing={1} xs={12} sx={{ justifyContent: "center", display: "flex", padding: "12px 0" }} spacing={2} >
                        <Grid item xs={12} lg={3} md={4} sm={6}>
                            <Box>
                                <input type="text" placeholder='Company Name' style={{ padding: "13px 90px 13px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3} md={4} sm={6}>
                            <Box>
                                <input type="text" placeholder='Mobile' style={{ padding: "11px 90px 11px 10px", width: "100%", borderRadius: "0", outline: "none", border: "none" }} />
                            </Box>
                        </Grid>
                    </Grid>


                    <Grid item container rowSpacing={1} xs={12} sx={{ justifyContent: "center", display: "flex" }} spacing={2} >
                        <Grid item xs={12} lg={6} md={8} sm={12}>
                            <Box>
                                <input type="text" placeholder='Company Name' style={{ padding: "11px 90px 75px 10px", borderRadius: "0", outline: "none", border: "none", width: "99%" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{ justifyContent: "center", display: "flex", padding: "27px 0" }}>
                        <Box sx={{ backgroundColor: "#73829a", width: { lg: "22%", md: "30%", sm: "30%", xs: "50%" }, padding: { lg: "7px 0", md: "7px 0", sm: "7px 0", xs: "7px 0" }, color: "#fff", textAlign: "center" }}>
                            Send Suggestion
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: "end", display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
                        <Typography>
                            <img src={star3} alt="" style={{ width: "1.5%", padding: "4px 0 0px 0" }} />
                        </Typography>
                        <Typography>
                            <img src={star4} alt="" style={{ width: "3.5%", margin: "0 0 10px 10px", transform: "translateY(-25%)" }} />
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default SuggestionsSection;