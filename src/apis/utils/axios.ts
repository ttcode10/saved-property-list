import axios from 'axios';

const getData: (url: string) => Promise<any> = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getData;
