import React from "react";
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import MainComponents from "../MainComponents";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./Redux"
function MainDisplay() {
    const [products, setProducts] = useState([]);
    const [change, setChange] = useState('false')

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
            });
    }, []);
    const OnChangeTO = () => {
        setChange(true)
    }
    const addTOCart = (productid) => {
        axios.post('https://fakestoreapi.com/carts',
            {
                userId: 5,
                date: new Date(),
                productid: productid,
            })
    }
    return (
        <>
            <div className="product-grid ">
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <div className="d-flex m-4">
                            <div className="circle">
                                <Link to={`/shop/${product.id}`}>
                                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                                </Link>
                            </div>
                            <div className="circle" onClick={() => addTOCart(product.id)}> <FontAwesomeIcon icon={faShoppingBag} />
                            </div>
                        </div>
                        <div >
                            <img src={product?.image} alt={product?.title} className="home-image-style" />
                        </div>
                        <div>    <p className="product-title">{product.title}</p>
                        </div>
                        <div >
                            <p className="product-price">{product.price}</p>
                        </div>

                    </div>
                ))}

                {/* </div> */}
            </div>
        </>
    );
}

export default MainDisplay