import { useState } from "react";
import '../styles/work.css'

function InputInfo(){
    const [value, setValue] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    function onSubmit(){
        setDisabled(true);
    }
    function onEdit(){
        setDisabled(false);
    }

    function handleChange(e){
        setValue(e.target.value);
    }
    return(
        <>
        <div className="card" style={isDisabled ? {pointerEvents: 'none'} : {}}>
        <div>
            <label>Company</label>
            <input type="text" placeholder="Microsoft" onChange={handleChange}/>
        </div>
        <div>
            <label>Position</label>
            <input type="text" placeholder="Software Engineer" onChange={handleChange}/>
        </div>
        <div>
            <label>Responsibilities</label>
            <textarea placeholder="Writing code" rows={4} cols={40}></textarea>
        </div>
        <div className="start">
            <span>Start</span>
            <input type="date" />
        </div>
        <div className="end">
            <span>End</span>
            <input type="date" />
        </div>
        <button className="submit" onClick={onSubmit}>Submit</button>
        </ div>
        <button className="edit-1" onClick={onEdit}>Edit</button>
        </>
    )
}

function WorkExperience(){
    const [counter, setCounter] = useState([]);
    
    function onAdd(){
        setCounter([...counter, 1]);
        console.log(counter)
    }
    return (
        <section className="work">
            <h1>Work Experience</h1>
            {counter.map((item, index) => <InputInfo key={index}/>)}
            <button onClick={onAdd}>Add</button>
        </section>
    )
}

export {WorkExperience}