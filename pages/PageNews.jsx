import MenuPageNews from '../components/MenuPageNews'
import BannerPageNews from '../components/BannerPageNews'
import NewsSection from '../components/NewsSection'
import TheEnd from '../components/TheEnd'
import '../style/stylePageNews.css'
function PageNews() {
    return (
        <>
            <div className='menuPageNews'>
                <MenuPageNews />
            </div>
            <div className='bannerPageNews'>
                <BannerPageNews />
            </div>
            <NewsSection />
            <footer>
                <TheEnd />
            </footer>
        </>
    );
}

export default PageNews;