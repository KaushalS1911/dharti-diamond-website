import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import star6 from "../../assets/images/Home/Star 6.png";
import exploration from "../../assets/images/Home/exploration.png";
import mining from '../../assets/images/Home/mainning.png'
import start8 from '../../assets/images/Home/Star 8.png'
import sorting from '../../assets/images/Home/sorting.png'
import cutting from '../../assets/images/Home/cutting.png'
import jewellery from '../../assets/images/Home/jewellary.png'

function Exploration() {
  return (
    <div>
      <Box sx={{ marginTop: "-60px", backgroundColor: "#2c3440",padding:"0 0 150px 0"}}>
          <Typography sx={{textAlign:"end",transform:"translateY(100%)"}}>
              <img src={star6} alt=""  style={{width:"5%"}}/>
          </Typography>
        <Container maxWidth={"xl"}>
          <Box sx={{ paddingTop: "60px" }}>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Grid item xs={9}>
                <Box sx={{ color: "white" }}>
                 

                  <Box sx={{ textAlign: "center",marginBottom:"20px"}}>
            <button class="border-btn" style={{fontSize:"22px", fontWeight:"600"}}>
            <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    An Epic Adventure Of a Diamond
                <Typography
                    sx={{

                        fontWeight: "500",
                        fontSize: "20px",
                        textAlign:{xs:"center"}
                    }}
                >
                    Rought to Retail
                </Typography>

                  </Typography>

                <span class="b1"></span>
                <span class="b2"></span>
                <span class="b3"></span>
                <span class="b4"></span>
            </button>
            </Box>

                  {/*<Typography*/}
                  {/*  sx={{*/}

                  {/*    fontWeight: "500",*/}
                  {/*    fontSize: "15px",*/}
                  {/*      textAlign:{xs:"center"}*/}
                  {/*  }}*/}
                  {/*>*/}
                  {/*  Rought to Retail*/}
                  {/*</Typography>*/}
                </Box>
              </Grid>
              <Grid item xs={1.5}>

              </Grid>
            </Grid>
          </Box>

          {/* ==========main exploration=========== */}

          <Box>
            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Grid
                item
                lg={5}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  order: { lg: "1", md: "1", sm: "1", xs: "1" },
                  padding: "",
                }}
              >
                <Box sx={{ padding: "30px", textAlign: "start" }}>
                  <div class="border-el-btn buttonBorder">
                    <div
                      style={{
                        paddingTop: "13px",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                     
                        Exploration
                     
                      <span class="b1"></span>
                      <span class="b2"></span>
                    </div>
                  </div>
                  <Typography
                    sx={{
                      padding: "17px",
                      fontSize: "13px",
                      lineHeight: {
                        lg: "30px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                        color: "white",
                      },
                    }}
                  >
                    Natural diamonds are special because they come from nature
                    itself. Formed layers beneath the surface of Earth, diamonds
                    are not found everywhere. In the Exploration process,
                    usually Kimberlite and Lamproite pipes (which are openings
                    in the Earth's surface caused by volcanic activity) are
                    explored to assess the possibility of diamond existence and
                    potential for mining.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{ order: { lg: "2", md: "2", sm: "2", xs: "2" } }}
              >
                <Box>
                  <img src={exploration} alt="" style={{ width: "100%" }} />
                </Box>
              </Grid>
            </Grid>


            {/* ==========mining========== */}

            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
       
              }}
            >
              
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{ order: { lg: "1", md: "1", sm: "2", xs: "2" } }}
              >
                <Box>
                  <img src={mining} alt="" style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  order: { lg: "2", md: "2", sm: "1", xs: "1" },
                  padding: "",
                }}
              >
                <Box sx={{  textAlign: "start" ,padding:{lg:"70px 0 0 50px ",xs:"none"}}}>
                  <div class="border-el-btn buttonBorder">
                    <div
                      style={{
                        paddingTop: "13px",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                     
                        Mining
                     
                      <span class="b1"></span>
                      <span class="b2"></span>
                    </div>
                  </div>
                  <Typography
                    sx={{
                      padding: "20px",
                      fontSize: "13px",
                      lineHeight: {
                        lg: "30px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                        color: "white",
                       width:"80%"
                    
                      },
                    }}
                  >
                    Upon finding the best location and authorised mine, where high-quality diamonds are in abundance, mining is done. These mining activities are conducted with a strong emphasis on ethical and responsible practices. Various techniques are used to mine diamonds, but we source our diamonds only from companies that share our ethics around employee welfare and sustainability. As part of the sight-holder system, diamond companies can purchase the best-quality diamonds.
                  </Typography>

                </Box>
              </Grid>
            </Grid>



            {/* ================sorting=============== */}


            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
       
              }}
            >
              
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{ order: { lg: "2", md: "2", sm: "2", xs: "2" } }}
              >
                <Box>
                  <img src={sorting} alt="" style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  order: { lg: "1", md: "1", sm: "1", xs: "1" },
                  padding: "",
                }}
              >
                <Box sx={{ textAlign: "start" ,padding:"60px"}}>
                  <div class="border-el-btn buttonBorder"
                  >
                    <div
                      style={{
                        paddingTop: "13px",
                        fontWeight: "600",
                        fontSize: "20px",
                        
                      }}
                    >
                     sorting
                     
                      <span class="b1"></span>
                      <span class="b2"></span>
                    </div>
                  </div>
                  <Typography
                    sx={{
                      padding: "20px",
                      fontSize: "13px",
                      lineHeight: {
                        lg: "30px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                        color: "white",
                       width:"80%",
                    
                      },
                    }}
                  >
                    UAfter receiving the rough diamonds in our facilities, they are sorted. They are separated into categories based on their colour, shape, size, and quality. Then starts the planning for the process of diamond manufacturing, which will turn the rough gemstone
                    into a shining diamond.
                  </Typography>
       
                </Box>
              </Grid>
            </Grid>


            {/* ===========cutting and polishing=========== */}

            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
       
              }}
            >
              
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{ order: { lg: "1", md: "1", sm: "2", xs: "2" }}}
              >
                <Box>
                  <img src={cutting} alt="" style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  order: { lg: "2", md: "2", sm: "1", xs: "1" },
                  padding: "",
                }}
              >
                <Box sx={{ textAlign: "start" ,padding:{lg:"90px",xs:"none"}}}>
                  <div class="border-el-btn buttonBorder"
                  >
                    <div
                      style={{
                        paddingTop: "13px",
                        fontWeight: "600",
                        fontSize: "20px",
                        
                      }}
                    >
                     Cutting & Polishing
                     
                      <span class="b1"></span>
                      <span class="b2"></span>
                    </div>
                  </div>
                  <Typography
                    sx={{
                      padding: "20px",
                      fontSize: "13px",
                      lineHeight: {
                        lg: "30px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                        color: "white",
                       width:"80%",
                    
                      },
                    }}
                  >
                   It involves planning, cleaving, bruting, polishing, and the final inspection. At Dharti Diamonds, we have created a process called one person one diamond to ensure that every diamond is subject to the same level of care and attention.
                  </Typography>
       
                </Box>
              </Grid>
            </Grid>


            {/* =================jewellery========== */}

            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
       
              }}
            >
              
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{ order: { lg: "2", md: "2", sm: "2", xs: "2" } }}
              >
                <Box>
                  <img src={jewellery} alt="" style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  order: { lg: "1", md: "1", sm: "1", xs: "1" },
                  padding: "",
                }}
              >
                <Box sx={{ textAlign: "start" ,padding:{lg:"100px",xs:"none"}}}>
                  <div class="border-el-btn buttonBorder"
                  >
                    <div
                      style={{
                        paddingTop: "13px",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                 Jewellery Manufacturing
                     
                      <span class="b1"></span>
                      <span class="b2"></span>
                    </div>
                  </div>
                  <Typography
                    sx={{
                      padding: "20px",
                      fontSize: "13px",
                      lineHeight: {
                        lg: "30px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                        color: "white",
                       width:"80%",
                    
                      },
                    }}
                  >
                  The sparkling Dharti diamonds are now ready to be designed as beautiful jewellery pieces. The loose diamonds are set in jewellery such as rings, earrings, pendants, necklaces, and bracelets. This process is known as jewellery manufacturing. Our team of skilled artists innovates with their designs which are always at par with the latest trends while maintaining a timeless charm.
                  </Typography>
       
                </Box>
              </Grid>
            </Grid>

            {/* ==============retaillingt============= */}
            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
       
              }}
            >
              
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{ order: { lg: "1", md: "1", sm: "2", xs: "2" } }}
              >
                <Box>
                  <img src={jewellery} alt="" style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  order: { lg: "2", md: "2", sm: "1", xs: "1" },
                  padding: "",
                }}
              >
                <Box sx={{ textAlign: "start" ,padding:{lg:"100px",xs:"none"}}}>
                  <div class="border-el-btn buttonBorder"
                  >
                    <div
                      style={{
                        paddingTop: "13px",
                        fontWeight: "600",
                        fontSize: "20px",
                        
                      }}
                    >
                 Retailing
                     
                      <span class="b1"></span>
                      <span class="b2"></span>
                    </div>
                  </div>
                  <Typography
                    sx={{
                      padding: "20px",
                      fontSize: "13px",
                      lineHeight: {
                        lg: "30px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                        color: "white",
                       width:"80%",
                    
                      },
                    }}
                  >
                 The jewellery is ready to be displayed in retail stores for the end consumer to purchase. Customers are spoilt for choices when it comes to design options made with the highest-quality diamonds. Dharti has a widespread presence in India and overseas with Aura Jewels - our retail brand. Founded in 2007, it is one of the biggest names in the
                 Indian jewellery industry.
                  </Typography>
       
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Exploration;
