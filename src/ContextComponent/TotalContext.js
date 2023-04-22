import React, { createContext, useState } from "react";

export const TotalContext = createContext(); // export createContext() as const TotalContext

export default function TotalContextProvider({ children }) {
    const [totalPrice, setTotalPrice] = useState(0);
    // Create totalPrice variable state
    const [cards, setCards] = useState(0);
    // Create cards vatiable state to control the selection amount of the shopping cart 
    const [cart, setCart] = useState([]);
    // Create cart vatiable state to send the selected item to the Cart
    const [amount, setAmount] = useState(0)
    // Create cart amount state to record the amount of cards selected

    const add = (price, id,) => {
        setAmount((prevAmount) => ({
            ...prevAmount, [id]: (prevAmount[id] || 0) + 1
        }));
        //new state is an object created by spreading the previous prevAmount object, the value is prevAmount[id]
        setTotalPrice((prevPrice) => prevPrice + price);
        //  updating the state value of totalPrice by adding the current price to the previous total price.
        setCards((pre) => pre + 1);
        // current state value of cards is being incremented by 1 using the pre argument passed to the updater function
    }
    // Mainly control the state changes of setAmount, setTotalPrice and setCards,the variable 'price' and 'id' also as a props in children pages
    const minus = (price, id) => {
        setAmount((prevAmount) => ({
            ...prevAmount,
            [id]: (prevAmount[id] || 0) - 1
        }));
        setTotalPrice((prevPrice) => prevPrice - price);
        setCards(Math.max(cards - 1, 0));
        // ensures that cards never becomes negative
    }
    //  Mainly control the state changes of setAmount, setTotalPrice and setCards,the variable 'price' and 'id' also as a props in children pages
    const addCard = (item) => {
        const itemExists = cart.some((d) => d.id === item.id);
        // checks whether an object with an id property equal to item.id exists in the cart array and assigns true to itemExists
        if (!itemExists) {
            setCart([...cart, item]);
            //new array that is created using the spread operator (...) and contains all the elements of the original cart array plus the new item.
        }
    };

    const minusCard = (item) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
            return updatedCart;
        });
        setAmount((prevAmount) => ({ ...prevAmount, [item.id]: 0 }));
        //setting the value of the item.id key to 0 in the amount object.
    }


    const TotalContextData = {
        totalPrice,
        add,
        minus,
        addCard,
        cards,
        minusCard,
        cart,
        setCart,
        amount,
        setAmount,
        setCards,
        setTotalPrice
    }
    return (
        <TotalContext.Provider value={TotalContextData}>
            {children}
        </TotalContext.Provider>
    );

};
