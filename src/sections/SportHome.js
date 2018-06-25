import React from 'react'
import SportTree from '../data/SportTree'
import { Link } from 'react-router-dom'
import { translate, Trans } from "react-i18next";

class SportHome extends React.Component
{
    render() {
        let p = this.props;
        let events = SportTree.getEvents(p);
        if (events.length > 0)
        {
        return (
            <ul>
              {
                events.map(event => (
                  <li  className="ITEM" key={event.id}>
                    <Link to={`/sports/${p.match.params.sport_id}/event/${event.id}`}>{event.home_team + ' vs ' + event.away_team}</Link>
                  </li>
                ))
              }
            </ul>
            );
        }
        else
            return (<div><Trans>e_no_events</Trans></div>);
    }
};
export default translate("translations")(SportHome)
