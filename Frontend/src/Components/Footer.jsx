import "./Footer.css"
const Footer = () => {
  return (
    <footer>
    <div class="row primary">
      <div class="column about">
    
      <h3>Fake Api Collection</h3>
    
       <p>
       E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click?
      </p>
    
      <div class="social">
        <i class="fa-brands fa-facebook-square"></i>
        <i class="fa-brands fa-instagram-square"></i>
        <i class="fa-brands fa-twitter-square"></i>
        <i class="fa-brands fa-youtube-square"></i>
        <i class="fa-brands fa-whatsapp-square"></i>
      </div>
    </div>
    
    <div class="column links">
    <h3>Support</h3>
    
     <ul>
    
      <li>
       <a href="#faq">F.A.Q</a>
      </li>
      <li>
       <a href="#cookies-policy">Cookies Policy</a>
      </li>
      <li>
       <a href="#terms-of-services">Terms Of Service</a>
      </li>
      <li>
       <a href="#support">Support</a>
      </li>
     </ul>
    
    </div>
    
    
    <div class="column links">
      <h3>City </h3>
       <ul>
        <li>
         <a href="#faq">Mumbai</a>
        </li>
        <li>
         <a href="#cookies-policy">Pune</a>
        </li>
        <li>
        <a href="#terms-of-services">Bangalore</a>
        </li>
        <li>
        <a href="#support">Hyadrabad</a>
        </li>
      </ul>
    </div>
    
    <div class="column subscribe">
     <h3>Newsletter</h3>
      <div>
       <input type="email" placeholder="Your email id here" />
       <button>Subscribe</button>
      </div>
    
    </div>
    
    </div>
    
    <div class="row copyright">
      <div class="footer-menu">
    
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Blog</a>
      <a href="">Social</a>
    
      </div>
       <p>Copyright &copy; 2021 Foolish Developer</p>
    </div>
    </footer>
  );
};

export default Footer
