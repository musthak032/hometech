import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';

import {background,food} from '../../utils/clientimg'

const Cardc =({servicename})=>{

    const backgroundimg=background();
    const foodimg =food();
    return (
        <>
         
                    <div style={{width:"300px"}} data-aos="zoom-out"  className="col-lg-3 col-md-6 col-sm-12 ">
                        <div  className="bg-light rounded service-item card-shodow">
                            <div  className=" service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                               

                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="250"
                                        image={backgroundimg[12]}
                                    />
                                   

                                    <h4 className="mb-3">{servicename}</h4>
                                    <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                    <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
              
                
          
        </>
      );
}
export default Cardc;