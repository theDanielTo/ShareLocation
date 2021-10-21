import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyApCMsMiH2TBO2pZ6nRiHhCSzycQfEK3m8';
const API_URL_PREFIX = 'https://maps.googleapis.com/maps/api/geocode/json';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number, lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      API_URL_PREFIX + `?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`
    )
    .then(res => {
      const coordinates = res.data.results[0].geometry.location;
    })
    .catch(err => {
      console.log(err);
    });
}

form.addEventListener('submit', searchAddressHandler);
