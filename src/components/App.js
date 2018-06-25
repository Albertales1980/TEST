import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import SportTree from '../data/SportTree';

export default class App extends Component
{
    componentWillMount()
    {
        SportTree.init();
    }

    render() {
        return (
                <div>                
                    <Header/>
                    <Main/>
                </div>
                );
        }
};