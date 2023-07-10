import React from 'react';
import '../style/News.css'
import MainNews from './MainNews';
import OtherNews from './OtherNews';

function News() {
    return(
        <>

            <div className='containerHaed'>

                <div className='lineNews'></div>
                <h2 className='headingNews'>НОВОСТИ</h2>
                <div className='lineNews2'></div>

            </div>

            <div className='containerMain'>
                <div className='component1'>
                    <MainNews/>
                </div>

                <div className='containerContent'>

                    <div className='component2'>
                        <OtherNews />
                    </div>
                    <div className='component3'>
                        <OtherNews />
                    </div>

                </div>

            </div>

            <a href='' className='allNews'>Все новости</a>

           

        </>
    )
}
export default News;