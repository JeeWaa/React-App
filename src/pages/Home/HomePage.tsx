import * as React from 'react';
import { Button, Card, Grid, ImageList } from '@mui/material'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './styles.css';

export default function HomePage() {
  return (
    <>
        <Stack direction="row" spacing={2} className='button_group'>
            <Grid className='button'>
                <Typography className='item'>Save</Typography>
            </Grid>
            <Grid className='button'>
                <Typography className='item'>Share</Typography>
            </Grid>
            <Grid className='button_end'>
                <Typography className='item_end'>Move to DAT</Typography>
            </Grid>
        </Stack>
        <Stack direction="row" spacing={4} className='main_page'>
            <Box>
                <Typography variant="h4" gutterBottom className='main_name'>
                    Dear, Mr Eshan 👋
                </Typography>
                <Typography variant="h2" gutterBottom className='main-hedder'>
                    Now you have a better understanding of your financil requiremnts of your feture
                </Typography>
                <Stack direction="row" spacing={3}>
                    <Box>
                        <Typography variant="body2" gutterBottom className='text'>
                            Name
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Eshan De Silva
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" gutterBottom className='text'>
                            Date of Birth
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            2005-08-04
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" gutterBottom className='text'>
                            Income
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Rs. xxxx
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <CardMedia 
                component="img"
                className='main_image'
                image='https://img.freepik.com/free-photo/joyful-family-camping-park_1098-1846.jpg?w=740&t=st=1668791876~exp=1668792476~hmac=4c5fc32e7e47941d979071e7741396840895a3f2f709e60a9c9ced0e50627faa'
            />
        </Stack>
        <Stack >
            <Grid className='scroll_button'>
                Scroll down
            </Grid>
        </Stack>
        </>
  )
}
