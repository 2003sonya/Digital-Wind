import flashLogo2 from '../img/flashLogo2.svg';
import leftdandelion from '../img/blueDandelion1.svg';
import rightdandelion from '../img/blueDandelion2.svg';
import arrowLeft from '../img/arrowLeft.svg';
import arrowRight from '../img/arrowRight.svg';
import arrowLeftActive from '../img/arrowLeftActive.svg';
import arrowRightActive from '../img/arrowRightActive.svg';
import '../style/styleNewsSection.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';



function NewsSection() {

    const [arrowL, arrowLActive] = useState(arrowLeft);
    const [arrowR, arrowRActive] = useState(arrowRight);
    const [news, setNews] = useState([]);
    const [paginationData, setPaginationData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const [numPage, setNumPage] = useState(1);

    let rows = 12;//сколько новостей на одной странице

    useEffect(() => {
        fetch('https://64a95b538b9afaf4844a955e.mockapi.io/news')
        .then(res => res.json())
        .then(data => {
            setNews(data);
            setPaginationData(data.slice(currentPage, rows));

        })
    }, []);



    const clickLeft = () => {


        if (numPage > 1) {
            setCurrentPage(currentPage - 1);
            setNumPage(numPage - 1);
        }

    }

    useEffect(() => {
        setList();
    }, [currentPage])



    const clickRight = () => {

        if (numPage <= Math.floor(news.length / 12)) {
            setCurrentPage(prev => prev + 1);
            setNumPage(numPage + 1);

        }

    }

    const setList = () => {
        const start = currentPage * rows; //12
        const end = start + rows;//24
        setPaginationData(news.slice(start, end));
    }

    return (
        <main>
            <section>

                <div className='containerHaedNs'>
                    <div className='line'></div>
                    <h2 className='heading1'>НОВОСТИ</h2>
                    <img className='flashLogo2' src={flashLogo2} alt="flashLogo" />
                </div>


                <div className='containerNews'>
                    <img className='leftdandelion' src={leftdandelion} />

                    <div className='listAndPagination'>
                        <div className='newsList'>
                            {

                                paginationData.map((n, i) =>
                                    <div className="mainNewsmini" key={i}>
                                        <img className='photoForNewsmini' src={n.photo} />
                                        <h3 className='h3MainNewsmini'>{n.name}</h3>
                                        <p className='textNewsmini'>{n.text}</p>
                                        <div className='botNewsmini'>
                                            <p className='datemini'>{n.date}</p>
                                            <a className='detailmini'>Подробнее</a>
                                        </div>
                                    </div>)
                            }
                        </div>

                        <div className='pagination'>
                            <img className='arrowL' src={arrowL} onMouseOut={() => { arrowLActive(arrowLeft); }} onMouseOver={() => { if (currentPage > 0) arrowLActive(arrowLeftActive) }} onClick={clickLeft} />
                            <p className='page'>{numPage}</p>
                            <img className='arrowR' src={arrowR} onMouseOut={() => { arrowRActive(arrowRight); }} onMouseOver={() => { if (currentPage < Math.floor(news.length / 12)) arrowRActive(arrowRightActive) }} onClick={clickRight} />
                        </div>
                    </div>


                    <div className='groupDandelion'>
                        <img className='rightdandelion1' src={rightdandelion} />
                        <img className='rightdandelion2' src={rightdandelion} />
                    </div>
                </div>
            </section>
        </main>
    );
}
export default NewsSection;