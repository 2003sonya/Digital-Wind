import banner2 from '../img/banner2.png';
import '../style/styleBannerPageNews.css'
function BannerPageNews() {
    return (
        <>
            <aside className='otherBanner'>
                <img className='bannerBPN' src={banner2} alt="banner" />
                <p className='text'>МЕЖДУНАРОДНЫЙ КОНКУРС КОМПЬЮТЕРНЫХ РАБОТ ДЛЯ ДЕТЕЙ, ЮНОШЕСТВА И СТУДЕНЧЕСКОЙ МОЛОДЕЖИ "ЦИФРОВОЙ ВЕТЕР"</p>
                <button className='becomeParticipantBPN'>СТАТЬ УЧАСТНИКОМ</button>
            </aside>
        </>
    );
}

export default BannerPageNews;