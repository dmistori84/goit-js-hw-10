import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
//const API_key = 'live_fOxgLowEMvVzv83NVOkuO9MdqpbmCuvrfvPFk27zYDau65gVme3460SYk4qBg6tH';
const refs = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
}

fetchBreeds()
        .then(cat => {
            refs.loader.removeAttribute('hidden', '');
            const murkup = cat.map(c => `<option value="${c.id}">${c.name}</option>`).join('');     
            refs.select.innerHTML = murkup;      
    });
        
refs.select.addEventListener('change', (e) => {
   
            fetchCatByBreed(e.target.value)
                .then(cat => {
                    refs.catInfo.innerHTML = createMurkup(cat);
                })
                .catch(error => {
                    refs.error.removeAttribute('hidden', '');
                    console.log(error)
                });
         
    refs.loader.setAttribute('hidden', '');
});

function createMurkup(cat) { 
    const murkup = cat.map(c =>
        `   <img class="cat-img" src="${c.url}" width="340"/>
                <div class="cat-description">
                <h2>${c.breeds[0].name}</h2>
                <p>${c.breeds[0].description}</p>
                <p><h3>Temperament:</h3> ${c.breeds[0].temperament}</p>
            </div>                        
        `).join(''); 
    return murkup;
}    



