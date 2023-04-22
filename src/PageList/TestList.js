import React, { useState, useContext } from 'react'
import { TotalContext } from '../ContextComponent/TotalContext'
import style from '../CssModules/CardContent.module.css'

export default function TestList({ price, img, items }) {
    const totalPrice = useContext(TotalContext)
    let cart = totalPrice.cart
    let setCart = totalPrice.setCart
    const [amount, setAmout] = useState(0)
    // const [isChecked, setIsChecked] = useState(false)
    const [liked, setLiked] = useState(false);
    const handelAdd = () => {
        setAmout((pre) => pre + 1)
        totalPrice.add(price)
        console.log(items)
        console.log(cart)
        console.log(setCart)
        console.log(cart.includes(items))
    }
    const handelMinus = () => {
        if (amount !== 0) {
            setAmout((pre) => pre - 1)
            totalPrice.minus(price)
        }
    }
    // const handleCheckboxChange = () => {
    //     setIsChecked((prevState) => !prevState)
    //     if (!isChecked) {
    //         totalPrice.addCard()

    //     } else {
    //         totalPrice.minusCard()
    //     }
    // }
    const handleAddCart = () => {
        if (liked) {
            return;
        }
        totalPrice.addCard();
        setLiked(true);

    };
    const handleMinusCart = () => {
        if (!liked) {
            return;
        }
        totalPrice.minusCard();
        setLiked(false);
    };

    return (
        <div className={style.Container}>
            {cart.includes(items) ? "" : (<div className={style.Card} >
                <img src={img} alt="" />
                <div className={style.CardContent}>
                    <span>Price:${price}</span>
                    <div className={style.CardContet1}>
                        <button onClick={handelMinus} > ➖ </button>
                        <span> Amount：{amount} </span>
                        <button onClick={handelAdd}> ➕ </button>
                    </div>
                    <p>Total：{amount * price}</p>
                    <div className={style.CardCheck}>
                        <button className={style.Like} onClick={handleAddCart}>Like It</button>
                        <button className={style.Dislike} onClick={handleMinusCart}>DisLike It</button>
                    </div>
                </div>
            </div>)}
        </div>

    )
}

const porducts = [
    { id: 1, price: 30, src: 'https://picsum.photos/200/200?random=1' },
    { id: 2, price: 40, src: 'https://picsum.photos/200/200?random=2' },
    { id: 3, price: 50, src: 'https://picsum.photos/200/200?random=3' },
    { id: 4, price: 60, src: 'https://picsum.photos/200/200?random=4' },
    { id: 5, price: 70, src: 'https://picsum.photos/200/200?random=5' },
    { id: 6, price: 80, src: 'https://picsum.photos/200/200?random=6' },
]
