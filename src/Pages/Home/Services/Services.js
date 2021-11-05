import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../Resources/images/fluoride.png';
import whitening from '../../../Resources/images/whitening.png';
import cavity from '../../../Resources/images/cavity.png';
import Service from '../Service/Service';



const services = [
  {
      name: 'Fluoride Treatment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: fluoride
  },
  {
      name: 'Cavity Filling',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: cavity
  },
  {
      name: 'Teeth Whitening',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: whitening
  }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
    <Container>

    <Typography sx={{fontWeight:'bold', color:'info.main', m: 5}} variant="h5" component="div">
          Our Services
        </Typography>
    <Typography sx={{m: 3}} variant="h6" component="div">
          Services We Provide
        </Typography>

    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
         services.map(service=> <Service
         key={service.name}
         service={service}
         ></Service>)
       }
      </Grid>
    </Container>
    </Box>
    );
};

export default Services;