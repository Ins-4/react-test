import React from 'react';
import './Contacts.css'
const Contacts = ()=>{

    return (
        <div className='contacts'>
            <div class="contacts_content container">
                <div class="contacts_description">
                <h1><a href="tel:+79991234576" class="contacts_phone">+7 (999) 123 45 76</a></h1>
                <h2 class="contacts_name">Денис Чорнолоз</h2>
                <div class="contacts_email contacts_desc_text">
                    <a href="mailto:mail@domain.com">mail@domain.com</a>
                </div>
                <div class="contacts_work contacts_desc_text">
                    Front-enf розрробник
                </div>
                <div class="contacts_skill contacts_desc_text">
                    HTML5, CSS3, ES5, ES6, <span class="new_skill">React</span>
                </div>
            </div>
            <div class="contacts_img">
                <img src="../Img/Denus.jpg" alt=""/>
            </div>
            </div>
            
        </div>
    )
}

 
export default Contacts;