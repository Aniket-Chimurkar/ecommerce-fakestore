import Product from "./Product";
const Home = () => {
  return (
    <div className="hero bg-success bg-opacity-25" >
      <div className="card bg-dark text-white border-0">
        <img
          src="https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?t=st=1652168415~exp=1652169015~hmac=b907650b0f54efb62cb1a6f53945cc0de78b2045788a0660ed5e46c928f13e0a&w=740"
          height="500px"
          class="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-flex flex-colomn justify-content-center">
          <div className="container">
            <h5 className="card-title display-4 fw-bold ">
              New Season Arrival
            </h5>
            <p className="card-text  fs-2 ">Check Out all the trends</p>
          </div>
        </div>
      </div>


     

      <Product/>
    
    </div>
  );
};

export default Home;
