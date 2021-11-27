import React, { useState } from "react";
import generationContext from "./generationContext";

const GenerationState = (props) => {
  // Navigation

  const [hamOpen, setHamOpen] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const ulDisplay = () => {
    return hamOpen ? {} : { display: "none" };
  };

  //DISPLAY CLOSE ICON
  const DisplayCloseIcon = () => {
    return closeIcon ? { display: "block" } : { display: "none" };
  };

  //DISPLAY OPEN ICON
  const DisplayOpenIcon = () => {
    return openIcon ? { display: "none" } : { display: "block" };
  };

  //MENU STYLE
  const displayMenu = () => {
    setHamOpen(true);
    setCloseIcon(true);
    setOpenIcon(true);
  };

  const closeMenu = () => {
    setHamOpen(false);
    setCloseIcon(false);
    setOpenIcon(false);
  };

  //LOADING
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Submitform = () => {
    setIsSubmitted(true);
  }

  const [signuptrue, setSignuptrue] = useState(false);

  function SubmitSignUp() {
    setSignuptrue(true);
  }


  //RETURN
  return (
    <generationContext.Provider
      value={{
        DisplayOpenIcon,
        DisplayCloseIcon,
        ulDisplay,
        closeMenu,
        displayMenu,
        isSubmitted,
        Submitform,
        hamOpen,
        signuptrue,
        SubmitSignUp,
      }}
    >
      {props.children}
    </generationContext.Provider>
  );
};

export default GenerationState;
