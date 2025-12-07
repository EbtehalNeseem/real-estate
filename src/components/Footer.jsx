import { Box, Typography, Grid, Button, Avatar } from "@mui/material";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <Box sx={{ background: "#036103", color: "white", padding: "40px 5%" }}>
      <section className='d-flex justify-content-center justify-content-lg-between py-4 '>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="d-flex">
          <a href='' className='me-4 text-[#e2e2c1] text-reset'>
          <FaFacebookF className=" hover:scale-130 transition all duration-400 ease-in-out" />
          </a>
          <a href='' className='me-4 text-[#e2e2c1] text-reset'>
        <FaInstagram className=" hover:scale-130 transition all duration-400 ease-in-out" />
        </a>
        <a href='' className='me-4 text-[#e2e2c1] text-reset'>
        <FaYoutube className=" hover:scale-130 transition all duration-400 ease-in-out"  />
        </a>
        <a href='' className='me-4 text-[#e2e2c1] text-reset'>
        <FaLinkedinIn className=" hover:scale-130 transition all duration-400 ease-in-out" />
        </a>
        <a href='' className='me-4 text-[#e2e2c1] text-reset'>
        <FaTiktok className=" hover:scale-130 transition all duration-400 ease-in-out"  />
        </a>
        </div>
      </section>
      <Grid container spacing={8}>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", width: "50%", justifyContent: "space-between", alignItems: "center" }}>
            <Avatar src="/logo.png" sx={{ width: 50, height: 50 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#e2e2c1" }}>
              UrbanGate
            </Typography>
          </Box>
          <Typography sx={{ mt: 1, fontSize: "16px", color: "#e2e2c1" }}>
            Your trusted partner for buying, selling and renting properties.
          </Typography>
        </Grid>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
          <Typography variant="h6" sx={{ color: "#e2e2c1", mb: 2 }} fontWeight="bold">Quick Links</Typography>
          <Button sx={{
            color: "#e2e2c1",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 10,
              bottom: 5,
              width: "0%",
              height: "2px",
              backgroundColor: "#e2e2c1",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "70%",
            },
          }}
            onClick={() => navigate("/Home")}
          >
            Home
          </Button>

          <Button sx={{
            color: "#e2e2c1",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 5,
              bottom: 5,
              width: "0%",
              height: "1px",
              backgroundColor: "#e2e2c1",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "90%",
            },
          }}
            onClick={() => navigate("/properties")}
          >
            Properties
          </Button>

          <Button sx={{
            color: "#e2e2c1",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 6,
              bottom: 5,
              width: "0%",
              height: "2px",
              backgroundColor: "#e2e2c1",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "80%",
            },
          }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </Box>

        <Grid sx={{ xs: 12, sm: 4 }}>
          <Typography fontWeight="bold" variant="h6" sx={{ mb: 2, color: "#e2e2c1" }}>Contact</Typography>
          <Typography sx={{ mt: 1, color: "#e2e2c1" }}>info@urbangate.com</Typography>
          <Typography sx={{ mt: 1, color: "#e2e2c1" }}>+20 123 456 7890</Typography>
        </Grid>

      </Grid>

      <Typography sx={{ textAlign: "center", mt: 4, color: "#aaa" }}>
        © 2025 UrbanGate. All rights reserved.
      </Typography>
    </Box>
  );
}


// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter className=' bg-[#036103] text-center text-lg-start text-muted'>
//       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
//         <div className='me-5 d-none d-lg-block'>
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href='' className='me-4 text-[#e2e2c1] text-reset'>
//             <MDBIcon fab icon="facebook-f" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="twitter" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="google" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="instagram" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="linkedin" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="github" />
//           </a>
//         </div>
//       </section>

//       <section className=''>
//         <MDBContainer className='text-center text-md-start mt-5'>
//           <MDBRow className='mt-3'>
//             <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
//               <MDBRow className=''>
//                 <img src="/logo.png" alt="" className='w-[20px] ' />
//                 <h6 className='text-uppercase fw-bold mb-4'>
//                   UrbanGate
//                 </h6>
//               </MDBRow>
//               <p>
//                 Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
//                 consectetur adipisicing elit.
//               </p>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Angular
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   React
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Vue
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Laravel
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//                 New York, NY 10012, US
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         © 2021 Copyright:
//         <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }