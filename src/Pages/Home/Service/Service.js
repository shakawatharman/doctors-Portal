import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {

    const {img,name,description} = service;
    return (
        <Grid item xs={4} sm={4} md={4}>

<Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>


<CardMedia
        style={{width:'auto', height:'90px', margin:'0 auto'}}
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
     
        <Typography  variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        
      </CardContent>
       
    </Card>

        </Grid>
    );
};

export default Service;