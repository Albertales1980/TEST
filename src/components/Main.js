import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../sections/Home'
import Event from '../sections/Event'
import SportHome from '../sections/SportHome'

class Main extends React.Component
{
    render()
    {
        let store = this.props;
        return(
                <main>
                    <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/sports' component={Home}/>
                      <Route exact path='/sports/:sport_id' component={SportHome}/>
                      <Route path='/sports/:sport_id/event/:event_id' component={Event}/>
                    </Switch>
                  </main>);
    }
};
 

export default Main;