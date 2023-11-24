import React, { createContext, useEffect, useState } from "react";

const ContextApi = createContext();

const AppProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [savedTimes, setSavedTimes] = useState();
  const[task,setTask]=useState([])
  const[modal,setModal]=useState(false)
  const[title,setTitle]=useState('')
  const[disc,setDisc]=useState('')

  const [formData, setFormData] = useState([
  
  ]);



  return (
    <ContextApi.Provider value={{time,setTime,savedTimes,setSavedTimes,task,setTask,modal,setModal,formData, setFormData, title,setTitle,disc,setDisc}}>
      {children}
    </ContextApi.Provider>
  );
};

export {AppProvider , ContextApi  };

