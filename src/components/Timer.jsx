import React, { useState, useEffect, useContext } from "react";
import { ContextApi } from "./Context/ContextApi";
import "./task.css";

const Timer = () => {
  const {
    time,
    setTime,
    savedTimes,
    setSavedTimes,
    task,
    setTask,
    modal,
    setModal,
    formData, setFormData,
    title,setTitle,disc,setDisc
  } = useContext(ContextApi);
  const [isRunning, setIsRunning] = useState(false);
  const[btndisable,setbtnDisable]=useState(true)

  const[inputValue,setinputValue]=useState()

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setbtnDisable(!btndisable)
  };

  const handleStop = () => {
    setIsRunning(false);
    setbtnDisable(!btndisable)

  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);


  };

  const handleSave = () => {
    setSavedTimes(formatTime(time));
    setModal(true);
    setbtnDisable(!false)

  };


  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };
  useEffect(() => {
   
    setTask([...task, { task: "study", time: savedTimes }]);
  }, [savedTimes]);


  const setT=(e)=>{
    setTitle(e.target.value)
  }
  let setC=(e)=>{
    setDisc(e.target.value)
  }
  
  const submitHandler=(e)=>{

      e.preventDefault();
      // setinputValue(e.target.value)
      setFormData([
          ...formData,
          {
          title: title,
          description: disc,
          time:formatTime(time)}
      ])
 
    setTime(0);
    setinputValue('')

    // console.log(e.target);
    setModal(false)

    
 setC=(e)=>{
  e.target.value=''

    }


    }



  return (
    <div className=" flex flex-col font-Josefin_Sans">
   

      <div>
        <p className="bg-slate-300 font-PT_Sans_Narrow  text-[14vw] md:text-[6vw]">
          {formatTime(time)}
        </p>
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="md:px-6 text-lg px-2 py-1 rounded-lg md:py-2 m-3 bg-green-400 shadow-md shadow-green-500/20 disabled:opacity-50 disabled:shadow-none"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={btndisable}
          className="md:px-6 text-lg px-2 py-1 rounded-lg md:py-2 m-3 bg-orange-400 shadow-md shadow-orange-500/20 disabled:opacity-50 disabled:shadow-none"
        >
          Stop
        </button>
        <button
          onClick={handleReset}

          className="md:px-6 text-lg px-2 py-1 rounded-lg md:py-2 m-3 bg-teal-400 shadow-md shadow-teal-500/20 disabled:opacity-50 disabled:shadow-none"
        >
          Reset
        </button>
        <button
          onClick={handleSave}

          className="md:px-6 text-lg px-2 py-1 rounded-lg md:py-2 m-3 bg-[#2588ec] disabled:opacity-50 disabled:shadow-none"
        >
          Save
        </button>

        <div
          className="p-10 bg-slate-500/25 rounded-xl w-[98vw] mx-auto text-xl relative"
          id={modal == true ? "showmodal" : "hidemodal"}
        >
          <form action="" onSubmit={submitHandler}>
            <div className="absolute top-5 right-10"
            onClick={()=>setModal(false)}
            >X</div>
            <div>
              <div>
                <h1 className="text-blue-600 font-extrabold">
                  {" "}
                  Time Taken: {formatTime(time)}
                </h1>
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="mb-3 block text-xl font-medium text-[#07074D] "
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="Title"
                    value={inputValue}
                    onChange={(e)=>setT(e)}
                    placeholder="Title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-xl font-medium text-[#07074D]"
                >
                  Description
                </label>
                <textarea
                  rows="3"
                  name="Description"
                  value={inputValue}

                  onChange={(e)=>setC(e)}
                  id="Description"
                  placeholder="Type Description"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <button className="md:px-6 text-lg px-2 py-1 rounded-lg md:py-2 m-3 bg-[#2588ec] disabled:opacity-50 disabled:shadow-none">
                Submit
              </button>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default Timer;
