import React from 'react';
import './cart-dropdown.styles.scss';

import CustomButton from '../custom-buton/custom-buttom.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;