import { addNewCard } from './addNewCard.js';

const addButton = document.querySelector( "#add-card-button" );
const gallery = document.querySelector( "#gallery" );

addButton.addEventListener( "click", () => addNewCard( gallery ), false );
