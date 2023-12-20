import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import home from'../../assets/home/homhome3e.png'
const CardM =({photo,name,position,qutos})=>{
    return (
          
            <div className="testimonial-item rounded bg-light teams-card">
              <div class="d-flex mb-1">
                {/* <img
                  src={photo}
                  class="img-fluid rounded-circle flex-shrink-0"
                  alt=""
                  style={{width:"55px", height:"auto"}}
                /> */}
                <div
                  class="position-absolute"
                  style={{ top: "15px", right: "20px" }}
                >
                  <i class="fa fa-quote-right fa-2x"></i>
                </div>
                <div class="ps-2 my-auto">
                  <h4 class="mb-0">{name}</h4>
                  <p class="m-0">{position}</p>
                </div>
              </div>
              <div class="testimonial-content">
                {/* <div class="d-flex">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                </div> */}
                <p class="fs-0 m-0 pt-6">
               {qutos}
                </p>
              </div>
            </div>
       
    );
}
export default CardM;