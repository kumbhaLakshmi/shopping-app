// AnotherComponent.js
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faShoppingBag, faArrowAltCircleLeft, faArrowCircleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MainComponents from '../MainComponents';
import { Rate } from 'rsuite'
import { Button } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import MainDisplay from './Main';


function Shop() {
  // const { product } = props;
  // console.log("prop"
  // ,product);
  const dispatch = useDispatch();
  const [product, setProduct] = useState()
  const [products, setProducts] = useState([])
  const { productId } = useParams();
  var count = useSelector((state) => state.count);
  const totalProducts = useSelector((state) => state.totalProducts)
  // let currentProductId = productId || 1
  let currentProductId = parseInt(productId, 10) || 1;
  // const apiUrl = `https://fakestoreapi.com/products/${currentProductId+count? count : 0}`;
  const apiUrl = `https://fakestoreapi.com/products/${currentProductId}`;
  const rating = 4; // You can get this value dynamically from your data
  const [productcategory, setProductCategory] = useState()
  // console.log("productid", productId);
  const EqualTOZero = () => ({ type: 'EqualTOZero' });
  const getProduct = () => {
    // console.log("currentapi in getMethod", currentProductId);
    // count == 0
    axios.get(apiUrl)
      .then((response) => {
        // Set the product data in the state
        // console.log("ffffffffff", response.data);
        // if (count === 0) {
        //   // setProductCategory(response);
        //   console.log("cccccccccccccccc", count);
        //   setProduct(response.data)
        // }
        setProduct(response.data)
        setProductCategory(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  // const getAllProducts = () => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log("ggggggggggggggggggggg", json);
  //       setProducts(json); // Update the products state <here></here>    
  //       // let x = json?.find(product => productId === json.id)?.category
  //       // setProductCategory(x)
  //     });
  // }
  const getAllProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        const json = response.data;
        // console.log("ggggggggggggggggggggg", json);
        setProducts(json);
        // You can perform additional operations or update state based on the response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };



  useEffect(() => {
    // console.log("this is counting");
    // if (count <= 0) {
    //   currentProductId = currentProductId
    // }
    // else {
    // currentProductId += count
    // getProduct()
    // if(count!==0){
    //   console.log("this is working");
    //   setProduct(products[currentProductId+count])
    // }
    // }
    if (count && products && products.length > 0) {
      console.log("this is working", count);
      setProduct(products[count - 1])
    }
    // console.log("count checking 2", count);
    // getAllProducts()
  }, [count])
  useEffect(() => {
    // Assuming this is part of a React component and count is a prop or state variable
    // if (count !== currentProductId && products.length > 0) {
    //   console.log("this is working currentProductId + count ", currentProductId + count);
    //   setProduct(products[count]);
    // }
    // if(count){
    //   setProduct(count)
    // }
    if (products && products.length > 0) {
      dispatch({ type: 'UPDATE_TOTAL_PRODUCTS', payload: products.length });
      // dispatch({type:'UpdateCount',payload:products.length})
    }

  }, [currentProductId, products, totalProducts]);
  // getAllProducts()


  useEffect(() => {
    // console.log("this is first useeffect of the shop");
    dispatch(EqualTOZero());
    getAllProducts()
    // console.log("ppppppppppppp", productId);
    console.log("countvalue1", count);
    getProduct()
    dispatch({ type: 'UpdateCount', payload: currentProductId })
    console.log("countvalue2", count);

  }, [currentProductId]);


  const changevalue = (e) => {
    console.log("this is to test", e.target.value)
  }
  return (
    <>
      <div>
        <MainComponents />
        <div className='shop '>
          {/* <div> */}
          <div className=' row'>
            <div className='left-content col-4'>
              {product !== null && <div>{product?.title}</div>}
              <div className='product-description'>{product?.description}</div>
              <div className='image-row'>
                {products?.map((product, index) => (
                  product?.key !== productId && index < 3 && product?.category === productcategory && (
                    <img src={product.image} alt={product.title} key={product.key} className='image-style' />
                  )
                ))}

              </div>
            </div>
            <div className='product-middle col-4'>
              <div className='product-detail-middle-container'>
                <div className='product-image-gallery'><img src={product?.image} alt={product?.title} className='image-style' /></div>
              </div>
            </div>
            <div className='right-content col-4'>
              <div className='py-2'><h5>Reviews</h5></div>
              <div className='py-2'><Rate defaultValue={rating} size="xs" />
                <div><h6>Select Colour</h6></div>
                <div className=''>
                  <input type='radio' value={"blue"} className='colors' style={{ 'background': "rgb(213, 213, 212)" }} />
                  <input type='radio' value={""} className='colors' style={{ 'background': "rgb(240, 150, 158)" }} />
                  <input type='radio' value={""} className='colors' style={{ 'background': "rgb(240, 150, 158)" }} />
                  <input type='radio' value={""} className='colors' style={{ 'background': "rgb(240, 150, 158)" }} />

                </div>
                <div className="product-detail-size py-2">
                  <span><h5>Select size</h5> </span>
                  <div className=' row'>
                    <div className=''>
                      <label>
                        <input type="radio" value="41" onClick={(e) => changevalue(e)} />
                        <div className='size-box '>41</div>
                        {/* <Button size='small'>42</Button> */}
                      </label>
                      <label>
                        <input type="radio" value="42" onClick={(e) => changevalue(e)} />
                        <div className='size-box '>42</div>
                      </label>
                      <label>
                        <input type="radio" value="43" onClick={(e) => changevalue(e)} />
                        <div className='size-box '>43</div>
                      </label>
                      <label>
                        <input type="radio" value="44" onClick={(e) => changevalue(e)} />
                        <div className='size-box '>44</div>
                      </label>
                    </div>
                    <div className=''>
                      <label>
                        <input type="radio" value="41" onClick={(e) => changevalue(e)} className='input-radio' />
                        <div className='size-box '>41</div>
                        {/* <Button size='small'>42</Button> */}
                      </label>
                      <label>
                        <input type="radio" value="42" onClick={(e) => changevalue(e)} />
                        <div className='size-box '>42</div>
                      </label>
                      <label>
                        <input type="radio" value="43" onClick={(e) => changevalue(e)} />
                        <div className='size-box '>43</div>
                      </label>
                      <label>
                        <input type="radio" value="44" onClick={(e) => changevalue(e)} />
                        <div className='size-box '>44</div>
                      </label>
                    </div>

                  </div>
                  <button className='button-style' size='large'><h6 style={{ 'color': '#fa8907', 'fontSize': '1rem' }}>Add to card</h6></button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <div className="product-grid mt-5 px-5">
          {products && products.length > 0 && products?.map((product, index) => (
            // Conditionally render the product if product.key is not equal to productId
            product?.key !== productId && (
              <div key={index} className="product">
                <div className="d-flex m-3 ">
                  <div className='circle'>
                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                  </div>
                  <div className='circle'>
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </div>
                </div>
                <div>
                  <img src={product?.image} alt={product?.title} />
                  <p className='product-title'>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            )
          ))}
        </div> */}
      </div>
      <div className='related-product'><h3>Reated Products</h3></div>

      <div className='shop-products-display'>
        <MainDisplay />
      </div>


    </>
  );
}

export default Shop;
