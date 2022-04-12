import React, { useEffect } from 'react'
import { Productss, useContext } from '../context/ProductsContext';

export default function Products() {

    const {
        money,
        setMoney,
        products,
        setProducts,
        
    } = useContext(Productss);



    return (
        <>
            <div className='container p-2'>
                <div className='row'>
                    {products.map(product => {

                        const BuyProduct = () => {

                            if (product.price <= money) {
                                setMoney(money - product.price)
                            }
                            else if (product.price > money) {
                                alert("We are unable to process your transaction because you do not have enough funds.")
                               
                            }



                        }


                        return (

                            <div className="card col-3 p-4 m-2 text-center" style={{ width: "300px" }} key={product.id}>
                                <img src={product.image} height="250px" className="card-img-top" alt="cartsds" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.substring(0, 10)}</h5>
                                    <p className="card-text fw-bold">${product.price}</p>
                                    <div className='buttons text-center'>
                                        <button onClick={BuyProduct} className="btn btn-success px-5 ">Buy</button>

                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>

            </div>
        </>
    )
}
