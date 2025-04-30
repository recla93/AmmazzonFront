import {Item} from './Item';

export interface Carrello
{
  id:number,
  items:Item[],
  totale:number
}
