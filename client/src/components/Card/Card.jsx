import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import './card.css'

export default function OfferCard({ imgSrc }) {
  return (
    <>
      {/* <Card sx={{ width: "22.98vw" }}>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img src={imgSrc} loading="lazy" alt="" />
        </AspectRatio>
        <Typography level="title-lg">Yosemite National Park</Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            aria-label="Explore Bahamas Islands"
            sx={{
              ml: "auto",
              alignSelf: "center",
              fontWeight: 600,
              backgroundColor: "black",
              color: "white",
            }}
          >
            Explore
          </Button>
        </CardContent>
      </Card> */}
      <div className="card">
        <div className="img_Section">
          <img src={imgSrc} loading="lazy" alt="" />
        </div>
        <div className="info_section">
           <Typography level="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5vw' }, mt: 2 }}>
         Yosemite National Park
       </Typography>
       <Typography level="body2" sx={{ fontSize: { xs: '0.875rem', sm: '1.2vw' }, mb: 2 }}>
         April 24 to May 02, 2021
       </Typography>
       <CardContent
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Typography level="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
            Total price:
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.483vw' }, fontWeight: 'bold' }}>
            $2,900
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          aria-label="Explore Yosemite National Park"
          sx={{
            mt: { xs: 2, sm: 0 },
            ml: { sm: 'auto' },
            fontWeight: 600,
            backgroundColor:'black',
            color:'white',
            fontSize:'1.038vw'
          }}
        >
          Explore
        </Button>
      </CardContent>
        </div>
      </div>
    </>
  );
}
