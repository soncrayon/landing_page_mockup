import React from 'react';
import MenuItem from './menu_item'
import PageButton from './page_button';
import Search from '@material-ui/icons/Search';

const HeaderMenu = () => {
    const menuOptions = [
        'Solutions',
        'Pricing',
        'Partners',
        'Resources',
        'Company'
    ];

    return (
        <div id="header_menu">
            <div id="page_title">
                <h1>RelClone</h1>
            </div>
            <ul id='header_menu_names'>
                {menuOptions.map((option, index) => {
                    return <li key = {index} className="menu_item"><MenuItem name = {option} /></li>
                })}
            </ul>
            <div id="search_icon">
                <Search />
            </div>
            <PageButton label={'Talk to Sales'}/>
        </div>
    );
};

export default HeaderMenu; 