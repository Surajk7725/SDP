import React from 'react';
import Button from './AddProject5';
import "./AddProject4.css";
const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
          <h2 className="app-header">Project Details</h2>
          <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text=     {changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}
export default Header;