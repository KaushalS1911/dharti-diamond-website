import React from 'react'
import diamondImg from "../../assets/image/AboutImg/diamondImg1.png"
import { Box, Container, Grid, Typography } from '@mui/material';

function AboutSection4() {
    return (
        <div>
            <Box sx={{ backgroundImage: `url(${diamondImg})`,padding:"100px", justifyContent: "center", display: "flex" ,alignItems:"center"}}>
                <Container maxWidth={'xl'}>
                <Grid container rowSpacing={1}  sx={{color:"#fff",textAlign:"center"}}>
                    <Grid item xs={12} lg={4} md={6} sm={12} whiteSpace={{lg:"nowrap",md:"normal",sm:"normal",xs:"nowrap"}}>
                        <Box sx={{fontSize:"30px",fontWeight:"500"}}>40+</Box>
                        <Typography sx={{fontSize:"16px"}} mt={1}>Years of Promise</Typography>
                    </Grid>
                    <Grid item xs={12} lg={4} md={6} sm={12} whiteSpace={{lg:"nowrap",md:"normal",sm:"normal",xs:"nowrap"}}>
                        <Box sx={{fontSize:"30px",fontWeight:"500"}}>3000+</Box>
                        <Typography sx={{fontSize:"16px"}} mt={1}>Active customer</Typography>
                    </Grid>
                    <Grid item xs={12} lg={4} md={12} sm={12} whiteSpace={{lg:"nowrap",md:"normal",sm:"normal",xs:"nowrap"}}>
                        <Box sx={{fontSize:"30px",fontWeight:"500"}}>4500+</Box>
                        <Typography sx={{fontSize:"16px"}} mt={1}>Dedicated Artisan</Typography>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default AboutSection4;