import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardImages from '../images/images.png'
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={cardImages}
        title="green iguana"
      />
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Karachi
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Lahore
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Islamabad
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Peshawar
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Rawalpindi
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Multan
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Sailkot
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Gujranwala
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        weatherData.Faisalabad
        </Typography>
      </CardContent>
      <CardActions>
   
      </CardActions>
    </Card>
  );
}