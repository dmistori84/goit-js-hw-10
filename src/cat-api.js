const API_key = 'live_fOxgLowEMvVzv83NVOkuO9MdqpbmCuvrfvPFk27zYDau65gVme3460SYk4qBg6tH';

function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json());
}

function fetchCatByBreed(breedId){
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}&api_key=${API_key}`)
        .then(data => data.json());
}

export { fetchBreeds, fetchCatByBreed };