//
//
//
// import { Box, Typography } from "@mui/material";
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import d1 from "../../assets/images/global/Dimond1.png";
// import d2 from "../../assets/images/global/d2.jpg";
// import d3 from "../../assets/images/global/Diamond3.png";
// import d4 from "../../assets/images/global/Diamond4.png";
// import d5 from "../../assets/images/global/Diamond5.png";
// import d6 from "../../assets/images/global/Diamond6.png";
//
//
// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "none",
//         background: "#5c687b",
//         borderRadius: "50%",
//         width: "20px",
//         height: "20px",
//         textAlign:"center",
//         zIndex: 1,
//         right: "50px",
//         top: "50%",
//         transform: "translateY(-50%)",
//       }}
//       onClick={onClick}
//     />
//   );
// }
//
// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "none",
//         background: "#5c687b",
//         borderRadius: "50%",
//         width: "20px",
//         height: "20px",
//         zIndex: 1,
//         left: "10px",
//         top: "50%",
//         transform: "translateY(-50%)",
//       }}
//       onClick={onClick}
//     />
//   );
// }
//
// function HeroSection() {
//   const slider = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//       autoplay:"true",
//       autoplaySpeed:"2000",
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//
//   const SliderSection = [
//
//     {
//       img: d1,
//       Dimond_Title1: "The Art and",
//       Dimond_Title2: "Brilliance",
//       Dimond_Title3: "of Diamond",
//     },
//     {
//       img: d2,
//       Dimond_Title1: "The Art and",
//       Dimond_Title2: "Brilliance",
//       Dimond_Title3: "of Diamond",
//     },
//     {
//       img: d3,
//       Dimond_Title1: "The Art and",
//       Dimond_Title2: "Brilliance",
//       Dimond_Title3: "of Diamond",
//     },
//     {
//       img: d4,
//       Dimond_Title1: "The Art and",
//       Dimond_Title2: "Brilliance",
//       Dimond_Title3: "of Diamond",
//     },
//     {
//       img: d5,
//       Dimond_Title1: "The Art and",
//       Dimond_Title2: "Brilliance",
//       Dimond_Title3: "of Diamond",
//     },
//
//     {
//       img: d6,
//       Dimond_Title1: "The Art and",
//       Dimond_Title2: "Brilliance",
//       Dimond_Title3: "of Diamond",
//     },
//
//   ];
//
//   return (
//     <Box sx={{ overflow: "hidden" }}>
//       <Slider {...slider}>
//         {SliderSection.map((item, index) => (
//           <Box key={index} sx={{ position: "relative" }}>
//             <img src={item.img} alt="" style={{ width: "100%" }} />
//
//             {/* =================== */}
//
//
//
//             <Box sx={{ position: "absolute", top: "27%", left: "20%", textAlign: "start"}}>
//               <Typography sx={{ color: "white", fontSize:{lg:"35px",md:"35px",sm:"25px",xs:"25px"}}}>{item.Dimond_Title1}</Typography>
//               <Typography sx={{ color: "white", fontSize:{lg:"35px",md:"35px",sm:"25px",xs:"25px"}}}>{item.Dimond_Title2}</Typography>
//               <Typography sx={{ color: "white", fontSize:{lg:"35px",md:"35px",sm:"25px",xs:"25px"} }}>{item.Dimond_Title3}</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// }
//
// export default HeroSection;


// import { Box, Typography } from "@mui/material";
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import d1 from "../../assets/images/global/Dimond1.png";
// import d2 from "../../assets/images/global/d2.jpg";
// import d3 from "../../assets/images/global/Diamond3.png";
// import d4 from "../../assets/images/global/Diamond4.png";
// import d5 from "../../assets/images/global/Diamond5.png";
// import d6 from "../../assets/images/global/Diamond6.png";
//
// function NextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 background: "#5c687b",
//                 borderRadius: "50%",
//                 width: "30px",
//                 height: "30px",
//                 textAlign: "center",
//                 zIndex: 1,
//                 right: "20px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 display: "block",
//             }}
//             onClick={onClick}
//         >
//             <span style={{ color: "#fff", fontSize: "20px" }}>→</span>
//         </div>
//     );
// }
//
// function PrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 background: "#5c687b",
//                 borderRadius: "50%",
//                 width: "30px",
//                 height: "30px",
//                 textAlign: "center",
//                 zIndex: 1,
//                 left: "20px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 display: "block",
//             }}
//             onClick={onClick}
//         >
//             <span style={{ color: "#fff", fontSize: "20px" }}>←</span>
//         </div>
//     );
// }
//
// function HeroSection() {
//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//     };
//
//     const sliderItems = [
//         {
//             img: d1,
//             title1: "The Art and",
//             title2: "Brilliance",
//             title3: "of Diamond",
//         },
//         {
//             img: d2,
//             title1: "The Art and",
//             title2: "Brilliance",
//             title3: "of Diamond",
//         },
//         {
//             img: d3,
//             title1: "The Art and",
//             title2: "Brilliance",
//             title3: "of Diamond",
//         },
//         {
//             img: d4,
//             title1: "The Art and",
//             title2: "Brilliance",
//             title3: "of Diamond",
//         },
//         {
//             img: d5,
//             title1: "The Art and",
//             title2: "Brilliance",
//             title3: "of Diamond",
//         },
//         {
//             img: d6,
//             title1: "The Art and",
//             title2: "Brilliance",
//             title3: "of Diamond",
//         },
//     ];
//
//     return (
//         <Box sx={{ overflow: "hidden" }}>
//             <Slider {...sliderSettings}>
//                 {sliderItems.map((item, index) => (
//                     <Box key={index} sx={{ position: "relative" }}>
//                         <img src={item.img} alt={`Slide ${index}`} style={{ width: "100%" }} />
//                         <Box
//                             sx={{
//                                 position: "absolute",
//                                 top: "30%",
//                                 left: "20%",
//                                 textAlign: "start",
//                                 color: "white",
//                                 padding: "10px",
//                                 borderRadius: "5px",
//                             }}
//                         >
//                             <Typography sx={{ fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "20px" } }}>{item.title1}</Typography>
//                             <Typography sx={{ fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "20px" } }}>{item.title2}</Typography>
//                             <Typography sx={{ fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "20px" } }}>{item.title3}</Typography>
//                         </Box>
//                     </Box>
//                 ))}
//             </Slider>
//         </Box>
//     );
// }
//
// export default HeroSection;


import { Box, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import d1 from "../../assets/images/global/Dimond1.png";
import d2 from "../../assets/images/global/d2.jpg";
import d3 from "../../assets/images/global/Diamond3.png";
import d4 from "../../assets/images/global/Diamond4.png";
import d5 from "../../assets/images/global/Diamond5.png";
import d6 from "../../assets/images/global/Diamond6.png";

function HeroSection() {
    const sliderSettings = {
        dots: false, // Remove dots
        infinite: true, // Disable infinite scrolling
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Disable autoplay
        autoplaySpeed: 3000, // Autoplay speed is not required when autoplay is false
        nextArrow: null, // Remove next arrow
        prevArrow: null, // Remove previous arrow
    };

    const sliderItems = [
        {
            img: d1,
            title1: "The Art and",
            title2: "Brilliance",
            title3: "of Diamond",
        },
        {
            img: d2,
            title1: "The Art and",
            title2: "Brilliance",
            title3: "of Diamond",
        },
        {
            img: d3,
            title1: "The Art and",
            title2: "Brilliance",
            title3: "of Diamond",
        },
        {
            img: d4,
            title1: "The Art and",
            title2: "Brilliance",
            title3: "of Diamond",
        },
        {
            img: d5,
            title1: "The Art and",
            title2: "Brilliance",
            title3: "of Diamond",
        },
        {
            img: d6,
            title1: "The Art and",
            title2: "Brilliance",
            title3: "of Diamond",
        },
    ];

    return (
        <Box sx={{ overflow: "hidden" }}>
            <Slider {...sliderSettings}>
                {sliderItems.map((item, index) => (
                    <Box key={index} sx={{ position: "relative" }}>
                        <img src={item.img} alt={`Slide ${index}`} style={{ width: "100%" }} />
                        <Box
                            sx={{
                                position: "absolute",
                                top: "30%",
                                left: "20%",
                                textAlign: "start",
                                color: "white",
                                padding: "10px",
                                borderRadius: "5px",
                            }}
                        >
                            <Typography sx={{ fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "20px" } }}>{item.title1}</Typography>
                            <Typography sx={{ fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "20px" } }}>{item.title2}</Typography>
                            <Typography sx={{ fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "20px" } }}>{item.title3}</Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default HeroSection;






