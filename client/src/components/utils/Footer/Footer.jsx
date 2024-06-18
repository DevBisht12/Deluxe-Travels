import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <Box
      className="footer"
      component="footer"
      style={{ backgroundColor: "black", color: "white" }}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color="white" gutterBottom>
            <strong>Deluxe</strong>Travels
            </Typography>
            <Typography variant="body2" color="white">
              Deluxe Travels provides safe, reliable, and comfortable
              transportation with a diverse fleet of cars. Our experienced
              drivers ensure efficient navigation and great recommendations.
              Enjoy competitive rates and 24/7 service.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" color="white" sx={{ marginBottom: '1rem' }}>
              Deluxe Travels Sec.19-C Chandigarh Main Market, near Verka booth,
              Sector 19 C, Chandigarh, 160019
            </Typography>
            <Typography variant="body2" color="white">
              Branch Office Deluxe Travels  Near Radisson Hotel Mahipalpur
              Delhi, 110037
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact us
            </Typography>
            <Typography variant="body2" color="white" sx={{ marginBottom: '1rem' }}>
              Email: taxidaddy19@gmail.com
            </Typography>
            <Typography variant="body2" color="white" sx={{ marginBottom: '1rem' }}>
              Phone: +91 09876010101,  09988889998
            </Typography>
            
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/deluxetravels19/?igsh=eHRqMDdkbHloZzR3"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link href="/" color="inherit">Deluxe Travels</Link>
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
