// Background color script

const bgSelection = document.querySelector("#background");
const displayBackground = document.querySelector (".background-image");

bgSelection.onchange = () => {
    displayBackground.src = bgSelection.options[bgSelection.selectedIndex].value;
}

// Facebook color script

const facebookSelection = document.querySelector("#facebook");
const displayFacebook = document.querySelector (".facebook-image");

facebookSelection.onchange = () => {
    displayFacebook.src = facebookSelection.options[facebookSelection.selectedIndex].value;
}

//Whatsapp color script

const whatsappSelection = document.querySelector("#whatsapp");
const displayWhatsapp = document.querySelector(".whatsapp-image")

whatsappSelection.onchange = () => {
    displayWhatsapp.src = whatsappSelection.options[whatsappSelection.selectedIndex].value;
}

//Twitter color script

const twitterSelection = document.querySelector("#twitter");
const displayTwitter = document.querySelector(".twitter-image");

twitterSelection.onchange = () => {
    displayTwitter.src = twitterSelection.options[twitterSelection.selectedIndex].value;
}

//Instagram color script

const instagramSelection = document.querySelector("#instagram");
const displayInstagram = document .querySelector(".ig-image");

instagramSelection.onchange = () => {
    displayInstagram.src = instagramSelection.options[instagramSelection.selectedIndex].value;
}


