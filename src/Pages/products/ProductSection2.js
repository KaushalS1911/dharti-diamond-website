import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
    {
      category: 'Non-Certified Round Shape',
      clarity: 'IF to Pique',
      size: '0.005 Carats to 3 Carats',
      color: 'D-H | I-J | K-L',
      certification: 'NA'
    },
    {
      category: 'Non-Certified Fancy Shape',
      clarity: 'VVS to Pique',
      size: '0.005 Carats to 3 Carats',
      color: 'D-H | I-J | K-L',
      certification: 'NA'
    },
    {
      category: 'Certified Round Shape',
      clarity: 'IF to SI2',
      size: '0.30 Carats to 3 Carats',
      color: 'D-M',
      certification: 'GIA/IGI/HRD/NGTC/IDGR'
    },
    {
      category: 'Certified Fancy Shape',
      clarity: 'IF to SI2',
      size: '0.30 Carats to 3 Carats',
      color: 'D-M',
      certification: 'GIA/IGI/HRD/IDGR'
    },
    {
      category: 'Certified Fancy Color',
      clarity: 'IF to I2',
      size: '0.20 Carats to 5 Carats',
      color: 'Fancy',
      certification: 'GIA'
    }
  ];

function ProductSection2() {
  return (
    <div>
     <Box sx={{backgroundColor:"#000", color:"#252B32", marginTop:"30px", py:"40px"}}>
        <Container maxWidth={"md"}>
            <Box>
            <Box sx={{ textAlign: "center", margin: "30px 0 0 0" }}>
            <button class="btns" style={{fontSize:"22px", fontWeight:"600", color:"#FFF"}}>
              Product Profile
                <span class="b1"></span>
                <span class="b2"></span>
                <span class="b3"></span>
                <span class="b4"></span>
            </button>
            </Box>
<Box>
<TableContainer component={Paper} sx={{marginTop:"50px"}}>
      <Table sx={{backgroundColor:"#252B32", border:"1px solid #FFF"}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{border:"none"}}/>
            <TableCell align="center" sx={{ border:"1px solid #FFF"}}>
              <Typography sx={{fontSize:"14px", color:"#C5D1E4"}}>Non-Certified Round Shape</Typography>
            </TableCell>
            <TableCell align="center"  sx={{ border:"1px solid #FFF"}}>
              <Typography sx={{fontSize:"14px", color:"#C5D1E4"}}>Non-Certified Fancy Shape</Typography>
            </TableCell>
            <TableCell align="center"  sx={{ border:"1px solid #FFF"}}>
              <Typography sx={{fontSize:"14px", color:"#C5D1E4"}}>Certified Round Shape</Typography>
            </TableCell>
            <TableCell align="center"  sx={{ border:"1px solid #FFF"}}>
              <Typography sx={{fontSize:"14px", color:"#C5D1E4"}}>Certified Fancy Shape</Typography>
            </TableCell>
            <TableCell align="center"  sx={{ border:"1px solid #FFF"}}>
              <Typography sx={{fontSize:"14px", color:"#C5D1E4"}}>Certified Fancy Color</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{color:"#FFF"}}>
              <Typography variant="subtitle1">Clarity</Typography>
            </TableCell>
            {data.map((row, index) => (
              <TableCell align="center" key={index} sx={{color:"#FFF", border:"1px solid #FFF"}}>
                {row.clarity}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{color:"#FFF"}}>
              <Typography variant="subtitle1">Size</Typography>
            </TableCell>
            {data.map((row, index) => (
              <TableCell align="center" key={index} sx={{color:"#FFF", border:"1px solid #FFF"}}>
                {row.size}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{color:"#FFF"}}>
              <Typography variant="subtitle1">Color</Typography>
            </TableCell>
            {data.map((row, index) => (
              <TableCell align="center" key={index} sx={{color:"#FFF", border:"1px solid #FFF"}}>
                {row.color}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{color:"#FFF"}}>
              <Typography variant="subtitle1">Certification</Typography>
            </TableCell>
            {data.map((row, index) => (
              <TableCell align="center" key={index} sx={{color:"#FFF", border:"1px solid #FFF"}}>
                {row.certification}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
</Box>
            </Box>
        </Container>
     </Box>
    </div>
  )
}

export default ProductSection2
