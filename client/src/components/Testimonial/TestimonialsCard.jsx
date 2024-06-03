import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import './TestimonialSlider.css';

export default function TestimonialCard() {
  return (
    <>
    <Card
      className="card"
      sx={{
        // width: '20.756rem',
        maxWidth: '100%',
        boxShadow: 'lg',
        margin: '1rem',
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src="/static/images/avatar/1.jpg" className="avatar" sx={{ '--Avatar-size': '4rem' }} />
        <Typography level="title-lg" className="title" sx={{ fontSize: '1.8vw' }}>
          Josephine Blanton
        </Typography>
        <Typography level="body-sm" className="bio" sx={{ fontSize: '1.2vw' }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}
