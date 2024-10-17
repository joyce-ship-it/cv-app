import {useState} from 'react';
import '../styles/general.css'

function InputInfo({title, placeholder}){
    const [value, setValue] = useState('');
    function handleChange(e){
        setValue(e.target.value);
    }
    return(
        <div>
            <label>{title}</label>
            <input value={value} onChange={handleChange} placeholder={placeholder}/>
        </div>
    )
}
function Button({title, eventHandler, className}){
    return(
        <button className={className} onClick={eventHandler}>{title}</button>
    )
}
function General(){
    const [isDisabled, setDisabled] = useState(false);

    function onSubmit(){
        setDisabled(true);
    }
    function onEdit(){
        setDisabled(false);
    }
    return (
        <div className='generalContainer'>
        <section className='general' 
        style={isDisabled ? {pointerEvents: 'none'} : {}}
        >
            <h1>General Information</h1>
            <InputInfo title = "Name: " placeholder= "John Doe"/>
            <InputInfo title = "Email: " placeholder= "johndoe@gmail.com"/>
            <InputInfo title = "Phone Number: " placeholder= "123456780"/>
            {!isDisabled ? <Button title="Submit" eventHandler={onSubmit} /> :''}
        </section>
        {isDisabled ? <Button className="edit" title="Edit" eventHandler={onEdit} /> : ''}
        </div>
    )
}

export {General}