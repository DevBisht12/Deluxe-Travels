import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import './card.css'

export default function OfferCard({ imgSrc, cardTitle, subTitle }) {
  return (
    <>
      <div className="card">
        <div className="img_Section">
          <img src={imgSrc} loading="lazy" alt="main img" />
        </div>
        <div className="info_section">
           <Typography level="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' }, mt: 2 }}>
         {cardTitle}
       </Typography>
       <Typography level="body2" sx={{ fontSize: { xs: '0.875rem', sm: '1.2rem' }, mb: 2 }}>
         {subTitle}
       </Typography>
       <CardContent
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1rem' }, fontWeight: 'bold' }}>
          Explore Plan
          </Typography>
          <Typography level="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
            more info
          </Typography>
        </div>
        <Link to='/contact'><Button
          variant="solid"
          size="md"
          aria-label="Explore Yosemite National Park"
          sx={{
            mt: { xs: 2, sm: 0 },
            ml: { sm: 'auto' },
            fontWeight: 600,
            backgroundColor:'black',
            color:'white',
            fontSize:'1rem'
          }}
        >
          Book Now
        </Button></Link>
        
      </CardContent>
        </div>
      </div>
    </>
  );
}
