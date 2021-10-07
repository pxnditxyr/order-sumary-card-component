import { getNewCard } from './getNewCard.js';
export const addNewCard = ( gallery ) => gallery.insertAdjacentElement( "beforeend", getNewCard() );
