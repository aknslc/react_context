import React from 'react';
import { Money, useContext } from '../context/MoneyContext';

export default function Header() {

    const {
        money,
        setMoney
    } = useContext(Money);

    return (
        <>
            <div className='bg-success sticky-top p-2'>
                <h4 className='text-center fs-2 text-white '>You have <span className='fw-bold'> ${Math.round(money * 100) / 100} </span> to spend</h4>
                <p className='text-center p-2 moneyButton'>
                    <button onClick={()=>setMoney(1000)} className='btn btn-light'>Click to earn money</button>
                </p>
            </div>

        </>
    )
}
