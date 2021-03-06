import { getTop } from "./services.js";
import { getPopular } from "./services.js";
import renderCard from "./renderCard.js";

const title = document.querySelector(".other-films__title");
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');
console.log('getNav', getNav);

const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', event => {

            const target = event.target.closest('.get-nav__link');// если кликанье мима таргета (..get-nav__link') получаешь null, при кликанье на ссылку получаешь эту ссылку.,  
            if (target) {
                event.preventDefault();
                filmWeek.style.display = 'none';
                title.textContent = target.textContent;

                if (target.classList.contains('get-nav__link_popular-movies')) {
                    getPopular("movie")
                        .then(data => renderCard(data.results))
                }

                if (target.classList.contains('get-nav__link_top-tv')) {
                    getPopular("tv")
                        .then(data => renderCard(data.results))

                }
            }
    })
})
}

export default menuLink;
// renderCards();
// getPopular();
// getTop();