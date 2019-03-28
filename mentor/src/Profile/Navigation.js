import React from 'react';
import { NavBar, NavItem, UncontrolledDropdown, DropdownToggle, DropDownMenu, DropDownItem } from 'react-strap';

const Navigation = props => {
    return (
      <NavBar>
        <NavItem>
         <a href='#'>
          <span class="glyphicon glyphicon-home"></span>
         </a>
        </NavItem>
       <UncontrolledDropdown nav inNavBar>
         <DropdownToggle nav caret>
           <span class="glyphicon glyphicon-align-justify"></span>
         </DropdownToggle>
         <DropDownMenu right>
            <DropDownItem>
             <a href='#'>Questions</a>
            </DropDownItem>
            <DropDownItem>
              <a href='#'>Users</a>  
            </DropDownItem> 
         </DropDownMenu>
        </UncontrolledDropdown>
      </NavBar>
    );
  };
  
  export default Navigation;