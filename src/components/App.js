import React, { useState } from 'react'
import '../styles/App.css';
import Button from './Button';

const App = () => {

    const data = ["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "1", "2", "3", "=", "0", ".", ""]
    let [exp, setExp] = useState("");
    
    function handleClick(id) {
        if (id === "=") {
            try {
                console.log(eval(exp));
                if (eval(exp)!="undefined") {
                    setExp(eval(exp))
                }
            }catch (error) {
                setExp("Error");
              }
           
           
        } else if (id=="C") {
            setExp("");
        } else {
            setExp(() => exp + id);
        }    
    }

    console.log(exp);
    return (
        <div className='container Calculator'>
            <div className='expression' id="calci">{exp}</div>
            <div className="button-container">
                {data.map((key) => (
                    <Button key={key} id={key}  handleClick={handleClick}></Button>
                ))}
            </div>
        </div>


    )
}


export default App;
