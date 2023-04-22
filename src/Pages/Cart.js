import { useContext } from "react";
import { TotalContext } from "../ContextComponent/TotalContext";
import style from "../CssModules/CartStyle.module.css";

function Cart() {
    const { cart } = useContext(TotalContext);
    const { amount } = useContext(TotalContext);
    const { setCart } = useContext(TotalContext);
    const { setAmount } = useContext(TotalContext);
    const { cards, setCards } = useContext(TotalContext);
    const { totalPrice, setTotalPrice } = useContext(TotalContext)
    const handleRemove = (item) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
            return updatedCart;
        });
        //Remove the original card component
        setCards((prevCards) => prevCards - (amount[item.id] || 0));
        //Click to update the amount in Header.js at the same time
        setTotalPrice((prevPrice) => prevPrice - (item.comments * (amount[item.id] || 0)));
        //Click to update the vlaue of price in Header.js at the same time
        setAmount((prevAmount) => ({ ...prevAmount, [item.id]: 0 }));
        //Click the card amount in the original page at the same time
    }
    const handleAddAmount = (id, price, item) => {
        if (totalPrice >= price && amount[item.id] !== 0) {
            setAmount((prevAmount) => ({
                ...prevAmount,
                [id]: (prevAmount[id] || 0) + 1,
            }));
            setCards(Math.max(cards + 1, 0));
            setTotalPrice((prevPrice) => prevPrice + price);
        } else {
            return ''
        }
        //Restriction When the amount of card components is zero, no more selection is allowed, and you must return to the original page to re-select
    }

    const handleMinusAmount = (id, price, item) => {
        if (totalPrice >= price && amount[item.id] !== 0) {
            setAmount((prevAmount) => ({
                ...prevAmount,
                [id]: Math.max((prevAmount[id] || 0) - 1, 0),
            }));
            setCards(Math.max(cards - 1, 0));
            setTotalPrice(((prevPrice) => {
                const newPrice = prevPrice - price;
                return newPrice >= 0 ? newPrice : 0;
            }))
        } else {
            return ''
        }
        //Restriction When the amount of card components is zero, no more selection is allowed, and you must return to the original page to re-select
    };
    return (
        <div className={style.wrapper}>
            {cart.map((item) => {
                const totalPrice = amount[item.id] ? amount[item.id] * item.comments : 0;
                const price = item.comments
                const Dec = item.tags
                // Define totalPrice as the total of the item and the amount of a specific id
                return (
                    <div className={style.Container} key={item.id}>
                        <div className={style.CardContainer}>
                            <img src={item.largeImageURL} alt="" className={style.image} />
                            <span>Dec: {Dec}</span>
                            <span>Price: ${price}</span>
                            <div className={style.amountControl}>
                                <button onClick={() => handleMinusAmount(item.id, price, item)} className={style.button}>-</button>
                                <span> Amount: {amount[item.id] || 0} </span>
                                <button onClick={() => handleAddAmount(item.id, price, item)} className={style.button}>+</button>
                            </div>
                            <span>Total: ${totalPrice}</span>
                            <button onClick={() => handleRemove(item)} className={style.button2}>Remove</button>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default Cart;

