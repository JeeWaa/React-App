import { Grid, Stack, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import React from 'react'
import './styles.css';

export default function FamilyPage() {
  return (
      <>
      <Stack className='main'>
        <Typography variant="h4" gutterBottom className='main_name'>
          2020
        </Typography>
        <Typography variant="h2" gutterBottom>
          Helth & Wellbeing of Our Family
        </Typography>
        <Stack direction="row" spacing={26} className='main_body'>
          <Stack>
          <Typography variant="subtitle1" gutterBottom>
            A successful life is one that's lived to the fullest, and if there are obstacles in
            the form of illnesses, be prepared to afford the best care you deserve. Find out
            how much you'll need to look after your and support Dilu, Ruwan and
            Ruwanthi even in critical condition.
          </Typography>
          <Stack direction="row" spacing={24}>
            <Box>
              <Typography variant="body2" gutterBottom className='data_text'>
                Total need
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                Rs. 19,200,000
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" gutterBottom className='data_text'>
                I have
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                Rs. 3,000,000
              </Typography>
            </Box>
          </Stack>
          <Grid className='price_box'>
            <Stack>
              <Typography variant="subtitle2" gutterBottom className='box_text'>
                Identify Need Gap
              </Typography>
              <Typography variant="body1" gutterBottom className='box_price'>
                Rs. 16,200,000  
              </Typography>
            </Stack>
            <Stack>
             <Grid className='ptc'>
              <Typography variant="body1" gutterBottom className='pv'>
                15%  
              </Typography>
             </Grid>
            </Stack>
          </Grid>

          <Stack className='cmt_sec'>
          <Typography variant="body1" gutterBottom>
            Factoring an inflation rate of 4.5%
          </Typography>
          <Typography variant="body2" gutterBottom className='text_cmt'>
            Inflation rate is considered as at janury 2020 
            according to Central bank of Sri lanka
          </Typography>
          </Stack>

          <Typography variant="body1" gutterBottom className='text_cmt'>
            Recommanded Products
          </Typography>

          </Stack>

          <CardMedia 
            component="img"
            className='family_image'
            image='https://img.freepik.com/free-photo/joyful-family-camping-park_1098-1846.jpg?w=740&t=st=1668791876~exp=1668792476~hmac=4c5fc32e7e47941d979071e7741396840895a3f2f709e60a9c9ced0e50627faa'
            />
        </Stack>
      </Stack>

      <Grid className='plane_box'>
        <Grid className='plane_box_left'>
          <CardMedia 
            component="img"
            className='plane_box_left'
            image=''
          />
        </Grid>
        <Grid className='plane_box_cente'>
          <Typography variant="h5" gutterBottom className='plane_box_hedder'>
            Smart Life Health Plan
          </Typography>
          <Typography variant="body2" gutterBottom>
            Secure your child's higher education needs with regular
            invesments to achieve their dreams with additional
            benefits per your need
          </Typography>
          <Grid className='plane_box_pay'>
            <Typography variant="subtitle1" gutterBottom className='plane_box_pay_text'>
              5 years pay
            </Typography>
          </Grid>
          <Typography variant="subtitle1" gutterBottom className=''>
            Selected protection Add-ons
          </Typography>
          <Typography variant="subtitle2" gutterBottom className=''>
            Health 360
          </Typography>
          <Typography variant="subtitle2" gutterBottom className=''>
            Waiver of premium
          </Typography>
          <Typography variant="subtitle2" gutterBottom className=''>
            Suwamaga Benifit
          </Typography>
        </Grid>
        <Grid className='plane_box_right'>
          <Grid className='plane_box_edit'>
            <Typography variant="subtitle1" gutterBottom className='plane_box_edit_text'>
              Edit in DAT
            </Typography>
          </Grid>
          <Typography variant="body2" gutterBottom className='plane_box_im'>
            Illustrater Matuarity at 10%
          </Typography>
          <Typography variant="h4" gutterBottom className='plane_box_imp'>
            Rs. 5,000,000
          </Typography>

          <Typography variant="body2" gutterBottom className='plane_box_ta'>
            Total approx. Premium
          </Typography>
          <Typography variant="h4" gutterBottom className='plane_box_tap'>
            Rs. 122,000
          </Typography>
        </Grid>
      </Grid>
      </>
  )
}
