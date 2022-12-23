import React from 'react';
import "./AppLayout.scss";
import { Input, Menu } from 'antd';
import StoryList from './StoryList';
import SuggestionList from './SuggestionList';
import LogoImage from "assets/instagram_logo.png";

function AppLayout({ children }) {
    return (
        <div className='app'>
            <div className='header'>
                <h1 className='page-title'><img src={LogoImage} alt="logo" style={{width: '40px'}} /> instagram</h1>
                <div className='search'>
                    <Input.Search placeholder='검색어 2'/>
                </div>
                <div className='topnav'>
                    <Menu mode='horizontal'>
                        <Menu.Item>Menu1</Menu.Item>
                        <Menu.Item>Menu2</Menu.Item>
                        <Menu.Item>Menu3</Menu.Item>
                    </Menu>
                </div>
            </div>

            <div className='sidebar'>
                <StoryList style={{ marginBottom: "1rem" }}/>
                <SuggestionList style={{ marginBottom: "1rem" }} />
            </div>
            <div className='contents'>Contents(children){ children }</div>
            <div className='footer'>&copy;won</div>
        </div>
    )
}

export default AppLayout;