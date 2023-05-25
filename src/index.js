const refs = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
}

const API_key = 'live_fOxgLowEMvVzv83NVOkuO9MdqpbmCuvrfvPFk27zYDau65gVme3460SYk4qBg6tH';

fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(cat => {
        refs.error.setAttribute('hidden', '');
        refs.loader.setAttribute('hidden', '');
        const murkup = cat.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
        
        refs.select.innerHTML = murkup;
        refs.select.addEventListener('change', (e) => {
            const findCat = cat.find(c => c.id === e.target.value);
            //console.log(findCat.name);
            fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${findCat.id}&api_key=${API_key}`)
                .then(data => data.json())
                .then(cat => {
                    const murkup = cat.map(c =>
                        `   <img class="cat-img" src="${c.url}" width="340"/>
                            <div class="cat-description">
                                <h2>${c.breeds[0].name}</h2>
                                <p>${c.breeds[0].description}</p>
                                <p><h3>Temperament:</h3> ${c.breeds[0].temperament}</p>
                            </div>                        
                        `).join('');                    
                    refs.catInfo.innerHTML = murkup;
                })
                .catch(error => {
                    refs.error.removeAttribute('hidden', '');
                    console.log(error)
                });
        })
    })
    .catch(error => {
        refs.error.removeAttribute('hidden', '');
        console.log(error)
    });
    
refs.loader.removeAttribute('hidden', '')
