const About =()=>{
    return(
   <div className=" bg-success p-2 text-dark bg-opacity-25">
       <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Content and tiles</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <h2>Fake Store Api Collection</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg src="https://fakestoreapi.com/icons/intro.svg"  class="bi" width="1em" height="1em"></svg>
         
        </div>
        <h2>Electronics</h2>
        <p>When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get?</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <h2>jwellery</h2>
        <p> 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up,</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"></svg>
        </a>
      </div>
    </div>
  </div>
   </div>
    )
}

export default About