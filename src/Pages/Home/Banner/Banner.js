import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../Resources/images/chair.png";
import bg from "../../../Resources/images/bg.png";
import { Button, Container, Typography } from "@mui/material";


const bannerBg = {
    background: `url(${bg})`,
  
}
const verticalCenter = {
    display: 'flex',
    alignItems:'center',
    height: 450
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid style={ verticalCenter} container spacing={2}>
        <Grid item style={{textAlign:'left'}} xs={12} md={7}>
          <Typography variant="h3">
            Your New Smile <br />
            Starts Here
          </Typography>
          <Typography variant="h6" sx={{fontSize: 12, my:'15px', color:'gray'}}>
            lorem49 lorem49 lorem49 lorem49 lorem49 lorem49 lorem49 lorem49
            lorem49 lorem49 lorem49 lorem49 lorem49 lorem49
          </Typography>
          <Button variant='contained' style={{backgroundColor: '#5CE7ED'}} >Get Appointment</Button>
        </Grid>

        <Grid style={verticalCenter} item xs={12} md={5}>
          <img  style={{width: '450px'}}  src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
