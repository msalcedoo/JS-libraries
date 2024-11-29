const data = {
    "portfolio": [
        {
            "title": "Ivy Queen",
            "image": "https://images.genius.com/fad6d0c0e57176465228b3b12f8fb14a.1000x977x1.png",
            "description": "Dubbed the Queen of Reggaeton, Ivy Queen is one of the early pioneers of the genre.",
            "category": "2003"
        },
        {
            "title": "Daddy Yankee",
            "image": "https://images.genius.com/255488fb866f2f350a5be3b31070c196.1000x1000x1.jpg",
            "description": "Considered the golden age of reggaeton, Daddy Yankee was at the center of this era.",
            "category": "2004"
        },
        {
            "title": "J Balvin",
            "image": "https://images.genius.com/6abc4eb894457dabcbaf396bb32660e1.1000x1000x1.jpg",
            "description": "Around the mid 2010s was when modern reggaeton entered the mainstream, with J Balvin being one of the leaders of the charge.",
            "category": "2016"
        },
        {
            "title": "Bad Bunny",
            "image": "https://images.genius.com/e2b73e835523b914ec692c1f35ef330e.1000x1000x1.png",
            "description": "Arguably the biggest reggaeton artist right now, Bad Bunny has greatly contributed to the growth of the genre.",
            "category": "2024"
        }
    ]
};

const container = document.querySelector('.swiper-wrapper');

// Populate slides
data.portfolio.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
        <div class="item">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="category">${item.category}</span>
        </div>
    `;
    container.appendChild(div);
});

// Initialize Swiper
window.addEventListener('load', () => {
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});
