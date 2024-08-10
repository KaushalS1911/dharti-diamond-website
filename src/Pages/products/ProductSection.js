import React from 'react'
import star1 from "../../assests/images/global/star 1.png";
import star2 from "../../assests/images/global/star 2.png";
import { Box, Container, Grid, Typography } from '@mui/material';
import card1 from "../../assests/images/products/card1.png";
import bg from '../../assests/images/global/background-image.png'

function ProductSection() {
  return (
    <div>
       <Container maxWidth={"xl"}>


            <Box
              sx={{
                textAlign: "start",
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
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
       {/* =========================================cardsection===================== */}
       <Box>
        <Container>

            <Box>
            <Grid
            container
            spacing={5}
            sx={{display: "flex", justifyContent: "center", marginTop:"20px"}}
          >
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{order:{lg:"1",md:"1",sm:"1",xs:"1"}}}>
              <Box sx={{ padding: "10px", textAlign:"start",backgroundImage:`url(${bg})`, backgroundPosition:"center", backgroundSize:"cover"}}>

                <div class="border-el-btn buttonBorderBlack" style={{color:"#000"}}>
                  <div style={{paddingTop:"13px", fontWeight:"600", fontSize:"22px"}}>
                    Product

                    <span class="b1"></span>
                    <span class="b2"></span>
                    <Typography sx={{fontSize:"15px", fontWeight:"600"}}>We Offer BREADTH, BEAUTY And BRILLIANCE</Typography>
                  </div>
                  </div>

                <Typography sx={{padding:"15px", fontSize:"12px", color:"#9EA8B9", lineHeight:"20px"}}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                </Typography>
                <Typography sx={{padding:"15px", fontSize:"12px", color:"#9EA8B9", lineHeight:"21px", display:{lg:"block", md:"none", sm:"none", xs:"none"}}}>
                This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et  Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}  sx={{order:{lg:"2",md:"2",sm:"2",xs:"2"}}}>
              <Box>
                <img
                  src={card1}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
            </Box>
          
        </Container>
       </Box>
    </div>
  )
}

export default ProductSection
