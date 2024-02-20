import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
const CartBtn = () => {
    const state = useSelector((state) => state.addItem)
    return (
        <>
            <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
                <MdShoppingCart /> Cart({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn