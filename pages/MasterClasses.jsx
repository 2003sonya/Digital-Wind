import TheEnd from '../components/TheEnd';
import Menu from '../components/Menu';
import MainBanner from '../components/MainBanner';
import '../style/MasterClasses.css'

function MasterClasses(){
    return(
        <>
             
            <div className="menu">
                    <Menu/>
            </div>

            <div className='mainbanner'>
                <MainBanner/>
            </div>

            <div className='nul' ></div>

            <div className='theEnd'>
                <TheEnd/>
            </div>

       </> 
        
    )
}
export default MasterClasses;