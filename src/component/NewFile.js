import { useState } from 'react';
import './NewFile.css'
function NewFile(){
    let digit =0;
    const [NewDigit,setDigit] = useState(digit)
    function decHandler(){
        console.log("dec clicked");
        setDigit(NewDigit-1);
    }
    function incHandler(){
        console.log("inc clicked");
        setDigit(NewDigit+1);
    }
    function reSetHandler(){
        setDigit(0);
    }
    return(
        <div className='newFile'>
            <div>
                <div className='heading'>Increment and Decreament</div>
            </div>
            <div className='Buttond'>
                <div className='buttondiv'>
                    <button className='bt' onClick={decHandler}>-</button>
                    <div  className='bt bt1'>{NewDigit}</div>
                    <button className='bt ' onClick={incHandler}>+</button>
                </div>
            </div>
            <div>
                <button className='btn' onClick={reSetHandler}>Reset</button>
            </div>
        </div>
    );
}
export default NewFile;