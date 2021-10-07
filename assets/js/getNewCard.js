const createNewTag = ( tag, tagClass, tagSrc, tagHref ) => {
    tag = document.createElement( tag );
    tagClass && tag.classList.add( tagClass );
    tagSrc ? tag.src = tagSrc : undefined;
    tagHref ? tag.href = tagHref : undefined;
    return tag;
}
const createElements = () => ({
    card: createNewTag( "article", "card" ),
    cardContainer: createNewTag( "section", "card-container" ),
    cardImageSection: createNewTag( "section", "card-image-container" ),
    cardInformationSection: createNewTag( "section", "card-information" ),
    cardPlanSection: createNewTag( "section", "card-plan" ),
    cardPlanInfo: createNewTag( "section", "card-plan-info" ),
    cardButtonsSection: createNewTag( "section", "card-buttons" ),
    cardImage: createNewTag( "img", "", "./assets/images/illustration-hero.svg" ),
    cardInformationTitle: createNewTag( "h2" ),
    cardInformationParagraph: createNewTag( "p" ),
    cardPlanIcon: createNewTag( "img", "", "./assets/images/icon-music.svg" ),
    cardPlanSpan: createNewTag( "span" ),
    cardPlanParagraph: createNewTag( "p" ),
    cardPlanLink: createNewTag( "a", "", "", "#Change" ),
    cardButtonPayment: createNewTag( "button", "button-payment" ),
    cardButtonCancel: createNewTag( "button", "button-cancel" ),
});

const createTextNodes = () => ({
    informationTitle: document.createTextNode( "Order Summary" ),
    informationParagraph: document.createTextNode( "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!" ),
    planDetail: document.createTextNode( "Annual Plan" ),
    planPrice: document.createTextNode( "$59.99/year" ),
    planLink: document.createTextNode( "Change" ),
    buttonPayment: document.createTextNode( "Proceed to Payment" ),
    buttonCancel: document.createTextNode( "Cancel Order" ),
});

export const getNewCard = () => {

    const {
        card,
        cardContainer,
        cardImageSection,
        cardInformationSection,
        cardPlanSection,
        cardPlanInfo,
        cardButtonsSection,
        cardImage,
        cardInformationTitle,
        cardInformationParagraph,
        cardPlanIcon,
        cardPlanSpan,
        cardPlanParagraph,
        cardPlanLink,
        cardButtonPayment,
        cardButtonCancel,
    } = createElements();

    const {
        informationTitle,
        informationParagraph,
        planDetail,
        planPrice,
        planLink,
        buttonPayment,
        buttonCancel,
    } = createTextNodes();

    cardInformationTitle.appendChild( informationTitle );
    cardInformationParagraph.appendChild( informationParagraph );
    cardPlanSpan.appendChild( planDetail );
    cardPlanParagraph.appendChild( planPrice );
    cardPlanLink.appendChild( planLink );
    cardButtonPayment.appendChild( buttonPayment );
    cardButtonCancel.appendChild( buttonCancel );


    cardButtonsSection.insertAdjacentElement( "afterbegin", cardButtonPayment );
    cardButtonsSection.insertAdjacentElement( "beforeend", cardButtonCancel );
    
    cardPlanInfo.insertAdjacentElement( "beforeend", cardPlanSpan );
    cardPlanInfo.insertAdjacentElement( "beforeend", cardPlanParagraph );

    cardPlanSection.insertAdjacentElement( "afterbegin", cardPlanIcon );
    
    cardPlanSection.insertAdjacentElement( "beforeend", cardPlanInfo );
    cardPlanSection.insertAdjacentElement( "beforeend", cardPlanLink );

    cardInformationSection.insertAdjacentElement( "beforeend", cardInformationTitle );
    cardInformationSection.insertAdjacentElement( "beforeend", cardInformationParagraph );

    cardImageSection.insertAdjacentElement( "beforeend", cardImage );
    cardContainer.insertAdjacentElement( "beforeend", cardInformationSection );
    cardContainer.insertAdjacentElement( "beforeend", cardPlanSection );
    cardContainer.insertAdjacentElement( "beforeend", cardButtonsSection );

    card.insertAdjacentElement( "beforeend", cardImageSection );
    card.insertAdjacentElement( "beforeend", cardContainer );

    return card;
}
