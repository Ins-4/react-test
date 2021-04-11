import React from 'react';
import './Footer.css'

const Footer = () => {
  
  return(
    <footer>
    <div class="footer_content container">
        <div class="footer_logo">
            <a href="/">
                <div class="footer_logo_name">
                    Новостник
                </div>
                <p class="footer_logo_text">
                    Single Page Application
                </p>
            </a>

        </div>
        <div class="copyright">
            Дипломный проект
        </div>
        <div class="site_author">
            <p class="author_text">Made by</p>
            <h4 class="author_name">Денис Чорнолоз</h4>
        </div>
    </div>
</footer>
    )
}
export default Footer;