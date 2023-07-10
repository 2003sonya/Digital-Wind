import photoForNews from '../img/photoForNews.png'
import '../style/styleMainNews.css';
import { Link } from "react-router-dom";

function MainNews(){
    return(
<div className="mainNews">
    <img src={photoForNews} className='photoForNews'/>
    <h3 className='h3MainNews'>Открыт приём работ на международный конкурс компьютерных работ "Цифровой ветер"</h3>
    <p className='textNews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar facilisi adipiscing purus auctor velit, elit aliquet.</p>
    <div className='botNews'>
        <p className='date'>27.01.2022</p>
        <a className='detail'>Подробнее</a>
    </div>
</div>
    );
}

export default MainNews;