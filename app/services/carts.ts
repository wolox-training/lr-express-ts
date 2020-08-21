import axios from 'axios';
import { BASE_URL_HEARTH_STONE } from '../../config';

const urlBase = axios.create({
  baseURL: BASE_URL_HEARTH_STONE,
  responseType: 'json',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': '54e4ee1fa1msh4b27e6a729eea1ep1a0192jsn3ce69f55d380',
    useQueryString: true
  }
});

const getBasicInfo = async (): Promise<any> => {
  const response = await urlBase.get('/info');
  return response.data;
};

const getAllCards = async (): Promise<any> => {
  const response = await urlBase.get('/cards');
  return response.data;
};

export default {
  getBasicInfo,
  getAllCards
};
