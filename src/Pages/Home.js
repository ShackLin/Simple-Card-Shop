import React, { useState } from 'react'
import style from '../CssModules/HomeContent.module.css'

export default function Home() {
    const [contents, setContents] = useState([])
    const [value, setValue] = useState('')

    const handleInput = (e) => {

        if (e.keyCode === 13) {
            setContents([...contents, value]);
            setValue('')
        }
    }
    const handleSumit = () => {
        setContents([])
        window.alert('Thanks for your options !');
    }
    return (
        <div className={style.wrapper} >
            <div className={style.Container}>
                <span className={style.MainTitle}>Welcome to Card Shop</span>
                <p>We are currently selling photos from Taiwan, Germany, Austria and Japan. If you like them, please add them directly to Shopping Cart.<br />You can find more photos on the Search More subpage.</p>
                <p>Your opinion is very important to us. Please take a few minutes to share your suggestion with us, thank you.</p>
                <h3 className={style.formTitle}>Options Form</h3>
                <input onKeyDown={handleInput} value={value} onChange={(e) => setValue(e.target.value)} className={style.input} placeholder='Press down Enter show your options' />
                <ul className={style.formContent}>
                    {contents.map((content, index) => <li key={index} className={style.formLi}>{content}</li>)}
                </ul>
                <button className={style.cleanUp} onClick={handleSumit}>Submit</button>
            </div>

        </div>
    )
}
