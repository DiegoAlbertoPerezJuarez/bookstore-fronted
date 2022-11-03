import '../css/Register.css'

function Label({type,id,text, placeholder, change}) {
    return ( <label className='label'>
                        <span>{text}</span>
                        <input type={type} id={id} placeholder={placeholder} onChange={change}/>
                    </label> );
}

export default Label;