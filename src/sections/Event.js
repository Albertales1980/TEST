import React from 'react'
import SportTree from '../data/SportTree'
import { Link } from 'react-router-dom';
import { translate, Trans } from "react-i18next";

class Event extends React.Component
{
    render() 
        {
            const p = this.props;
            let ev = SportTree.getEvent(p);
            if (!ev)
                return (<div><Trans>e_no_event</Trans></div>);
            
            return (            
                    <div>                
                        <div className='EVENT'>{ev.title}</div>                
                        <ul>
                            {
                                ev.outcomes.map(outcome => (
                                <li className="ITEM" key={outcome.id}>
                                        <div>{outcome.description}</div>
                                        <div class="OUTCOME">{outcome.price}</div>
                                </li>
                                ))
                            }
                        </ul>

                        <div>
                            <Link to={`/sports/${p.match.params.sport_id}`} className='LINK'><Trans>m_back</Trans></Link>
                        </div>
                        <div>
                            <Link to={`/sports/`} className='LINK'><Trans>m_back_home</Trans></Link>
                        </div>
                    </div>
                    );
        };
};

export default translate("translations")(Event)
