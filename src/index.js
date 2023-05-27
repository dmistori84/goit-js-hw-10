import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const refs = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
}

refs.error.setAttribute('hidden', '');

fetchBreeds()
    .then(cat => {
        const murkup = cat.map(c => `<option value="${c.id}">${c.name}</option>`).join('');     
        refs.select.innerHTML = murkup;      
    })
    .catch(error => {
        refs.error.removeAttribute('hidden', '');
        console.log(error)
    });;
        
refs.select.addEventListener('change', (e) => {
   refs.loader.removeAttribute('hidden', '');
        fetchCatByBreed(e.target.value)
            .then(cat => {             
                refs.catInfo.innerHTML = createMurkup(cat);
                refs.loader.setAttribute('hidden', '');
            })
            .catch(error => {
                refs.error.removeAttribute('hidden', '');
                console.log(error)
            });
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



