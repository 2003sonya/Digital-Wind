import '../style/styleOtherNews.css';
import { Link } from "react-router-dom";
function OtherNews(){
    return(
        <div className="otherNews">
            <h3 className='h3OtherNews'>Открыт приём работ на международный конкурс компьютерных работ “Цифровой ветер”</h3>
            <p className='textOtherNews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar facilisi adipiscing purus auctor velit, elit aliquet.</p>
            <div className='botOtherNews'>
                <p className='dateOtherNews'>27.01.2022</p>
                <a className='detailOtherNews'>Подробнее</a>
            </div>
        </div>
    );
}

export default OtherNews;