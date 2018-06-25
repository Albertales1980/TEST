import React from 'react'
import SportTree from '../data/SportTree'
import { Link } from 'react-router-dom'
import { translate, Trans } from "react-i18next";

class Home extends React.Component
{
    render()
    {
        return (
            <ul>
              {
                SportTree.allSports().map(sport => (
                  <li key={sport.id} className="ITEM">
                    <Link to={`/sports/${sport.id}`} data-sport={sport.name}><Trans>{'s_' + sport.id}</Trans></Link>
                  </li>
                ))
              }
            </ul>
            )
    }
};

export default translate("translations")(Home)