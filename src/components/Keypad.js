// Code Keypad Component Here
import React from 'react';

const Keypad = () => {

    function manageChange() {
        console.log("Entering password...");

    }
  return (
     <input type="password" onChange={manageChange} />
  );
}

export default Keypad;
