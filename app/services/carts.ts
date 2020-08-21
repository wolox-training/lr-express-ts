import axios from 'axios';
import { BASE_URL_HEARTH_STONE } from '../../config';
import { Cards } from './Interfaces/cardsInterface';

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

export interface BasicInfo {
  patch: string;
  classes: [string];
  sets: [string];
  types: [string];
  factions: [string];
  qualities: [string];
  races: [string];
  locales: [string];
}

const getBasicInfo = async (): Promise<BasicInfo> => {
  const response = await urlBase.get<BasicInfo>('/info');
  return response.data;
};

const getAllCards = async (): Promise<Cards> => {
  const response = await urlBase.get<Cards>('/cards');
  return response.data;
};

export default {
  getBasicInfo,
  getAllCards
};
