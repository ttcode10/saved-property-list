/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getData;
