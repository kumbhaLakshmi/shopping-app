import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Cart() {
    const [totalProducts, setTotalProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchTotalProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setTotalProducts(response.data);
            } catch (error) {
                console.error('Error fetching total products:', error);
            }
        };

        fetchTotalProducts();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/carts/user/2');
                const userCartProducts = response.data[0]?.products || [];
                setCartProducts(userCartProducts);

                const filteredCartProducts = totalProducts?.filter((product) =>
                    userCartProducts.some((cartProduct) => cartProduct.productId === product.id)
                );

                setFilteredItems(filteredCartProducts);
            } catch (error) {
                console.error('Error fetching user cart data:', error);
            }
        };

        fetchData();
    }, [totalProducts]);

    const handleIncrement = (productId) => {
        setCartProducts((prevProducts) => {
            return prevProducts.map((item) => {
                if (item?.productId === productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
        });
    };

    const handleDecrement = (productId) => {
        setCartProducts((prevProducts) => {
            return prevProducts.map((item) => {
                if (item?.productId === productId) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
        });
    };

    const handleDelete = (productId) => {
        setFilteredItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    return (
        <div className="cart-style">
            <h5 className="centered-bold-text">Shopping Cart New</h5>
            <div>
                {filteredItems?.length > 0 ? (
                    filteredItems.map((product) => (
                        <div key={product?.id} className="p-5 d-flex">
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: "3rem", height: "3rem" }}
                            />
                            <h6 className="title-style">{product.title}</h6>
                            {cartProducts.length > 0 &&
                                cartProducts.map((item) => {
                                    if (item?.productId === product?.id) {
                                        let count = item.quantity;
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div className="d-flex ms-5">
                                                    <div className="plus-style">
                                                        {count !== 1 ? (
                                                            <FontAwesomeIcon
                                                                icon={faMinus}
                                                                size="lg"
                                                                onClick={() => handleDecrement(item.productId)}
                                                            />
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={faTrashAlt}
                                                                style={{ color: "red" }}
                                                                onClick={() => handleDelete(item.productId)}
                                                            />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <span className="rect-style quantity-label">
                                                            {count}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="plus-style">
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                        size="lg"
                                                        onClick={() => handleIncrement(item.productId)}
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className="price-style">
                                                        ${product.price * count}
                                                    </h5>
                                                </div>
                                            </React.Fragment>
                                        );
                                    }
                                    return null;
                                })}
                        </div>
                    ))
                ) : (
                    // <p>No items in the cart.</p>
                    <></>
                )}
            </div>
            <div className="mt-2">
                <h6 className="centered-bold-text">Total:</h6>
                <h6 className="centered-bold-text">Shipping: Free shipping</h6>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="cart-button-style mb-5" size="large">
                    <h6 style={{ color: "#fa8907", fontSize: "1rem" }}>Proceed to Checkout</h6>
                </button>
            </div>
        </div>
    );
}

export default Cart;
