import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from "react-i18next";

class Header extends Component
{
    render()
    {
        const {i18n} = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
        return (                
                <div>                    
                    <h2><Trans>m_welcome</Trans></h2>
                    <button onClick={() => changeLanguage("en")}>English</button>
                    <button onClick={() => changeLanguage("es")}>Español</button>
                
                    <header>
                        <nav>
                            <ul>
                            <li><Link to='/'><Trans>m_home</Trans></Link></li>          
                            </ul>
                        </nav>
                    </header>
                </div>                
                );
    }
};

export default translate("translations")(Header);
