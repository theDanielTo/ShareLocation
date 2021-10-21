const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyApCMsMiH2TBO2pZ6nRiHhCSzycQfEK3m8';

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);
