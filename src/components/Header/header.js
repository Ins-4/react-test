import React from 'react';
import './Header.css'
import {withRouter, NavLink} from 'react-router-dom';

const Header = () => {
  
  return(
      <div className = "header_content container">
          <div className="header_logo">
            <NavLink to="/" exact>Новостник</NavLink>
          </div>
          <nav className = "header_menu">
              <ul className = "menu_items">
                <li className = "menu_item">
                  <NavLink to="/" 
                  exact>
                    Главная
                    </NavLink>
                </li>
                <li className = "menu_item">
                  <NavLink to='/news'
                  exact>
                    Новости
                    </NavLink>
                </li>
                <li className = "menu_item">
                  <NavLink to="/contacts" 
                  exact>  
                    Контакты
                    </NavLink>
                </li>
            </ul>
          </nav>
      </div> 
    )
}
export default withRouter(Header);