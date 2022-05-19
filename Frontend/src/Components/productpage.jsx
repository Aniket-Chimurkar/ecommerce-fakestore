import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
// import Skeleton from "react-loading-skeleton"
import {  useDispatch } from "react-redux"
import { addCart } from "../Redux/action/index"
// import { delCart } from "../Redux/action/index"
const Productpage=()=>{
    
    const {id} = useParams()
    const [product , setproduct] = useState([])
    const[loading , setLoading] = useState(false)

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product))
    }

    useEffect(() => {
        getProduct();
      }, []);
    
      const getProduct = () => {
        setLoading(true);
        axios.get(`https://e-commerce-aniket.herokuapp.com/products/${id}`).then((res) => {
          setproduct(res.data.product);
          setLoading(false);
        });
      };
      console.log(product)


      const Loading =()=>{
          return(
              <>
          <div class="d-flex justify-content-center bg-success p-2 text-dark bg-opacity-10">
              <h1>Loading...</h1>
  <div class="spinner-border bg-success p-2 text-dark bg-opacity-10" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
              </>
          )
      }

      const ShowProduct=()=>{
          return(
              <>
              <div className="col-md-6 bg-success p-2 text-dark bg-opacity-10">
                  <img src={product.image} height="400px" width="400px"></img>
              </div>
              <div className="col-md-6">
                  <h4 className="text-uppercase text-black-50">
                      {product.category}
                  </h4>
                  <h1 className="display-5">{product.title}</h1>
                  <p className="lead fw-bolder">Rating : {product.rating  && product.rating.rate}
                  <i className="fa fa-star"></i>
                  </p>
                  <h3 className="display-6 fw-bold text-dark my-4"> $ {product.price}</h3>
                  <p className="lead">{product.description}</p>
                  <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>Add to cart</button>
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">Go to cart</NavLink>
                 
              </div>
              </>
          )
      }
       
    return (
        <>
        <div>
            <div className="containe bg-success p-2 text-dark bg-opacity-10">
                <div className="row">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Productpage