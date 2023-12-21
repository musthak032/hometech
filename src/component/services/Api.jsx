import axios from 'axios';

import { baseurl } from "../../utils/clientimg";



export const handlepost = async (urltype,data) => {

  const  baseurlw=baseurl()
    try {

       
      const response = await axios.get(`${baseurlw[0]}${urltype}`, { message: data });
      console.log(response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };



      