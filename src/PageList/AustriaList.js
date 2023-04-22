import React, { useContext } from "react";
import { TotalContext } from "../ContextComponent/TotalContext";
import style from "../CssModules/CardContent.module.css";


export default function TaiwanList({ price, img, item, id }) {
      const totalPrice = useContext(TotalContext)
      const { addCard } = useContext(TotalContext)
      const { minusCard } = useContext(TotalContext)
      const { add } = useContext(TotalContext)
      const { minus } = useContext(TotalContext)
      // use variable from TotalContext.js 
      let amount = totalPrice.amount[id] !== undefined ? totalPrice.amount[id] : 0;

      const handleAddCart = () => {
            add(price, id);
            addCard(item);
            console.log(item)
      };

      const handleMinusCart = () => {
            if (totalPrice.totalPrice >= price && amount !== 0) {
                  minus(price, id);
            }
            if (amount === 1) {
                  minusCard(item)
            }
            // correspond to 'setAmount((prevAmount) => ({ ...prevAmount, [item.id]: 0 }));' inside function 'minusCard' from TotalContext.js ' 
      };

      return (
            <div className={style.Container}>
                  <div className={style.Card}>
                        <img src={img} alt="" />
                        <div className={style.CardContent}>
                              <span >Price:${price}</span>
                              <span >Amount: {amount}</span>
                              <p>Total:{Math.max(amount * price, 0)}</p>
                              <div className={style.CardCheck}>
                                    <button className={style.Like} onClick={handleAddCart}>
                                          Add It
                                    </button>
                                    <button className={style.Dislike} onClick={handleMinusCart}>
                                          Remove It
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}