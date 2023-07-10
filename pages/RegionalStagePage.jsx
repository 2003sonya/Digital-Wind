import { useState } from 'react'
import React from 'react';
import { Link } from "react-router-dom";
import '../style/RegionalStagePage.css';
import Menu from '../components/Menu';
import BanerRegionalStage from '../components/BanerRegionalStage';
import InfaAboutRegionalStage from '../components/InfaAboutRegionalStage';

function RegionalStagePage(){
    return(
        <>
        <div className="menu2">
          <Menu/>
        </div>

        <div className='banerregionalstage'>
            <BanerRegionalStage />
        </div>

        <div className='infaAboutRegionalStage'>
            <InfaAboutRegionalStage />
        </div>
        </>
    )
}
export default RegionalStagePage