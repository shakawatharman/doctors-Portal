import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../Resources/images/doctor.png';
import bg from '../../../Resources/images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 180
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
          style={{width: 400, marginTop: '-115px'}} src={doctor} alt="" />
        </Grid>
        <Grid xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start', textAlign:'left', alignItems: 'center'}}>
           <Box>
           <Typography variant='h6' style={{color: '#5CE7ED', fontWeight: 500, marginBottom: '15px'}}>
                Appointment
            </Typography>
            <Typography variant='h4' style={{color: 'white', fontWeight: 900, marginBottom: '15px'}}>
               Make An Appointment
            </Typography>
            <Typography variant='h6' style={{color: 'white', fontSize: 12, fontWeight:300,  marginBottom: '15px'}}>
            It is a long established fact that a reader will be distractedly the readable content of a page when looking at its
            </Typography>
            <Button variant='contained' style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
           </Box>
        </Grid>
       
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;