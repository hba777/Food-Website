import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from '/logo.png';
import MobileNav from './MobileNav';

const Header = () => {
    const [hideleft, sethideleft] = useState("-left-[1000px]");
    const menuItems = ["recipes", "resources", "about", "contact"];

    // On Screen
    const onOpen = () => {
        sethideleft("left-0");
    }

    //Off screen 1000px which is greater than mobile screen size
    const onClose = () => {
        sethideleft("-left-[1000px]");
    }
    
    return (
      <>
        <div className='max-[900px]:hidden'>
            <DesktopNav menuItems = {menuItems} Logo={logo}/>
        </div>
        <div className='min-[900px]:hidden'>
            <MobileNav
             menuItems = {menuItems}
             Logo={logo}
             onClose = {onClose}
             hideLeft = {hideleft}
             onOpen = {onOpen}>
                
             </MobileNav>
        </div>
      </>
    )
}

export default Header
