import React from 'react'
import styles from '../CssModules/Header.module.css'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { TotalContext } from '../ContextComponent/TotalContext';
import { Link } from 'react-router-dom'


export default function Header() {
    const totalPrice = useContext(TotalContext)

    return (
        <div className={styles.MainHeaderStyle}>
            <Link to='/' className={styles.HeaderTitle} >
                Cards Shop
            </Link>
            <ul className={styles.Nav}>
                <li className={styles.NavItems}>
                    <Link to='/tw' className={styles.Items}>Taiwan</Link>
                </li>
                <li className={styles.NavItems}>
                    <Link to='/de' className={styles.Items}>Germany</Link>
                </li>
                <li className={styles.NavItems}>
                    <Link to='/aus' className={styles.Items}>Austria</Link>
                </li>
                <li className={styles.NavItems} >
                    <Link to='/jp' className={styles.Items}>Japan</Link>
                </li>
                <li className={styles.NavItems} >
                    <Link to='/more' className={styles.Items}>Search More</Link>
                </li>

            </ul>
            <div className={styles.cartIcon}>
                <Link to='/cart'><FaShoppingCart style={{ color: "white" }} /></Link>
                <span style={{ color: "white" }}>:Amount:{Math.max(totalPrice.cards, 0)}</span>
                <span className={styles.totalPrice}>
                    Price:${totalPrice.totalPrice}
                </span>
            </div>
            <div className={styles.SignIn}>
                <Link to='/signup' style={{ textDecoration: "none", color: "white" }}>Sign Up</Link>   / <Link to='/login' style={{ textDecoration: "none", color: "white" }}>Log In
                </Link> </div>
        </div>

    )
}

