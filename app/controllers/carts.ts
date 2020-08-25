import { Response, NextFunction, Request } from 'express';
import { getAllCards, getBasicInfo } from '../services/carts';

export function getCards(_: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getAllCards()
    .then((info: any) => res.send(info))
    .catch(next);
}

export function getBasic(_: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getBasicInfo()
    .then((info: any) => res.send(info))
    .catch(next);
}
