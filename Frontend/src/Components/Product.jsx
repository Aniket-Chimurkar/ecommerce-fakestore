import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
const Product = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [Count, setCount] = useState(1);

  useEffect(() => {
    getData(Count);
  }, [Count]);

  const getData = (Count) => {
    setLoading(true);
    axios
      .get(` https://e-commerce-aniket.herokuapp.com/products`)
      .then((res) => {
        setdata(res.data.product);
        setfilter(res.data.product);
        setLoading(false);
      });
  };
  console.log(Count);

  const Loading = () => {
    return (
      <>
      <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </>
    );
  };

  const filterproduct = (cat) => {
    const updatedlist = data.filter((x) => x.category === cat);
    setfilter(updatedlist);
  };

  const handleChange = () => {
    if (Count >= 1 ) {
      setCount(Count + 1);
    }
  };
  const handleChange1 = () => {
    if (Count > 1 ) {
      setCount(Count - 1);
    }
  };

  const handleSort=(sortBy, type)=>{
        
      
            
     
    if(sortBy==="price" && type===1) setfilter((prev)=> [...prev.sort((a,b)=>a.price>b.price?1:-1)])
    if(sortBy==="price" && type===-1) setfilter((prev)=> [...prev.sort((a,b)=>a.price>b.price?-1:1)])

    
}

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons bg-success p-2 text-dark bg-opacity-25">
          <button
            className="btn btn-outline-dark me-2 mb-5 pb-1"
            onClick={() => setfilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-5 pb-1"
            onClick={() => filterproduct("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-5 pb-1"
            onClick={() => filterproduct("women's clothing")}
          >
            Womens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-5 pb-1"
            onClick={() => filterproduct("jewelery")}
          >
            Jwellery
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-5 pb-1"
            onClick={() => filterproduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="bg-success p-2 text-dark bg-opacity-25">
          <button className="btn btn-outline-dark me-2 mb-5 pb-1"   onClick={()=>{handleSort("price",-1)}} >Price : High to Low </button>
          <button className="btn btn-outline-dark me-2 mb-5 pb-1"   onClick={()=>{handleSort("price",1)}}>Price : Low to High </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 ">
                <div class="card h-100 text-center p-4 bg-success p-2 text-dark bg-opacity-10" key={product._id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    height="250px"
                    alt={product.title}
                  />
                  <div class="card-body bg-success p-2 text-dark bg-opacity-25">
                    <h5 class="card-title mb-0 ">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text">${product.price}</p>
                    <NavLink
                      to={`/products/${product._id}`}
                      className="btn btn-outline-dark ms-2"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className=" my-5 py-5 bg-success p-2 text-dark bg-opacity-25">
        <div className="row ">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bold text-center mb-5">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
          <div>
            {/* pagination */}
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item" onClick={handleChange1}>
                  <a class="page-link"  aria-label="Previous" onClick={handleChange1}>
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item" onClick={handleChange}>
                  <a class="page-link"  aria-label="Next" onClick={handleChange}>
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
