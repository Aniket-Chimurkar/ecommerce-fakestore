import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { delCart } from "../Redux/action"

const MainCart =()=>{
    const state = useSelector((state)=>state.handleCart)
      const dispatch = useDispatch()
  
      const handleclose=(item)=>{
         dispatch(delCart(item))
      }
      
       
      const cartItems = (cartItem)=>{
  
      
  
          return(
              <div className="px4 my-5 bg-light rounded-3" key={cartItem.id}>
                   <div className="container py-4">
                       <button className="btn-close float-end" aria-label="close" onClick={()=>handleclose(cartItem)}></button>
                           <div className="row">
                               <div className="col-md-4">
                                   <img src={cartItem.image} height="150px" width="150px" alt={cartItem.title} />
                               </div>
                                <div className="col-md-4">
                                    <h4>{cartItem.title}</h4>
                                    <p className="lead fw-bold"> ${cartItem.price}</p>
                                </div>
                           </div>
                   </div>
              </div>
          )
      }
  
      const emptyCart=()=>{
        return(
          <div className="px4 my-5 bg-light rounded-3">
          <div className="container py-4">
             <h1>Your Cart Is Empty...</h1>
          </div>
     </div>
        )
      }
  
      const button=()=>{
        return(
          <div className="container">
            <div className="row">
              <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
            </div>
          </div>
        )
      }
  
      return (
          <>
        {state.length !== 0  && state.map(cartItems)}
        {state.length !== 0  && button()}
         {state.length === 0  && emptyCart()}
        </>
      )
  }
  export default MainCart