import React from "react";
import backdiamond from "../../assets/images/global/backdiamond.png";
import { Box, Typography, Grid ,Container} from "@mui/material";
import diam_1 from "../../assets/images/Home/diam-1.png";
import diam_2 from "../../assets/images/Home/diam_1.png";
import diam_3 from "../../assets/images/Home/diam_3.png";
import diam_4 from "../../assets/images/Home/diam_4.png";
import star1 from "../../assets/images/Home/Star 1 .png";
import star2 from "../../assets/images/Home/Star 2.png";

function Manufature() {
  return (
    <div>
      <Box>
      <Container maxWidth={"xl"} >
      <Box sx={{ marginTop: "20px", paddingBottom:"60px"}}>
        <Box
          sx={{
            backgroundImage: `url(${backdiamond})`,
            backgroundSize: "cover",
        
            backgroundPosition: "center",
          }}
        >
          <Box>
            <Typography>
              <img
                src={star1}
                alt=""
                style={{
                  width: "2.5%",
                  padding: "4px 0 0px 0",
                  display: "flex",
                  alignContent: "start",
                }}
              />
            </Typography>
            <Typography>
              <img
                src={star2}
                alt=""
                style={{
                  width: "3%",
                  margin: "0 0 10px 10px",
                  display: "flex",
                  alignContent: "end",
                }}
              />
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center",marginBottom:"70px"}}>
            <button class="border-el-btn" style={{fontSize:"22px", fontWeight:"600"}}>
Manufature & Explore
                <span class="b1"></span>
                <span class="b2"></span>
                <span class="b3"></span>
                <span class="b4"></span>
            </button>
            </Box>

          <Box sx={{ width: "100%" }}>
            <Typography sx={{ color: "#73829a",textAlign:"center" }} fontSize={"12px"}>
              Dharti Diamonds is a multifaceted organisation for diamond and
              jewellery
            </Typography>
            <Typography sx={{ color: "#73829a" ,textAlign:"center"}} fontSize={"12px"}>
              {" "}
              manufacturing, exporting, wholesaling, and retailing.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center", gap: "30px" }}
            >
              <Grid
                item
                xl={1.5}
                lg={1.5}
                md={4}
                sm={5}
                xs={12}
                sx={{ margin: { lg: "0 ", xs: "0 70px", sm: "0", md: "0" } }}
              >
                <Box>
                  <img src={diam_1} alt="" style={{ width: "100%" }} />
                  <Typography sx={{ fontSize: "13px", fontWeight: "600",textAlign:{xs:"center"} }}>
                    Diamond Manufacturer &{" "}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", fontWeight: "600",textAlign:{xs:"center"} }}>
                    Exporter
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xl={1.5}
                lg={1.5}
                md={4}
                sm={5}
                xs={12}
                sx={{ margin: { lg: "0 ", xs: "0 70px", sm: "0", md: "0" } }}
              >
                <Box>
                  <img src={diam_2} alt="" style={{ width: "100%" }} />
                  <Typography sx={{ fontSize: "13px", fontWeight: "600",textAlign:{xs:"center"} }}>
                    Diamond Manufacturer &{" "}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", fontWeight: "600" ,textAlign:{xs:"center"}}}>
                    Exporter
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xl={1.5}
                lg={1.5}
                md={4}
                sm={5}
                xs={12}
                sx={{ margin: { lg: "0 ", xs: "0 70px", sm: "0", md: "0" } }}
              >
                <Box>
                  <img src={diam_3} alt="" style={{ width: "100%" }} />
                  <Typography sx={{ fontSize: "13px", fontWeight: "600",textAlign:{xs:"center"} }}>
                    Diamond Manufacturer &{" "}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", fontWeight: "600",textAlign:{xs:"center"} }}>
                    Exporter
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xl={1.5}
                lg={1.5}
                md={4}
                sm={5}
                xs={12}
                sx={{ margin: { lg: "0 ", xs: "0 70px", sm: "0", md: "0" } }}
              >
                <Box>
                  <img src={diam_4} alt="" style={{ width: "100%" }} />
                  <Typography sx={{ fontSize: "13px", fontWeight: "600",textAlign:{xs:"center"} }}>
                    Diamond Manufacturer &{" "}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", fontWeight: "600",textAlign:{xs:"center"} }}>
                    Exporter
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{textAlign:"end"}}>
              <Typography>
                <img
                  src={star1}
                  alt=""
                  style={{
                    width: "2.5%",
                    padding: "4px 0 0px 0",
             
                  }}
                />
              </Typography>
              <Typography>
                <img
                  src={star2}
                  alt=""
                  style={{
                    width: "3%",
                    margin: "0 0 10px 10px",
                  
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      </Container>
      </Box>
    </div>
  );
}

export default Manufature;
