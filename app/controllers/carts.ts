import { Response, NextFunction, Request } from 'express';
import { getAllCards, getBasicInfo } from '../services/carts';

export function getCards(_: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getAllCards()
    .then((a: any) => res.send(a))
    .catch(next);
}

export function getBasic(_: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getBasicInfo()
    .then((a: any) => res.send(a))
    .catch(next);
}
