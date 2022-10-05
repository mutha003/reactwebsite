import React from "react";

const Contact = () => {
  return (
      <>
    <div className="main">
      <h1  className="con-heading"> Contact Us</h1>
    </div>
    <div className="container contact-dev">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
         <form>
         <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Full Name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Full Name"/>
       </div>
      
       <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
         <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone number"/>
       </div>
       

     <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Email address</label>
     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
   </div>

   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Password</label>
   <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>
 </div>
       <div class="mb-3">
         <label for="exampleFormControlTextarea1" class="form-label">Message</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
       </div>
         
       <div class="col-12">
       <button class="btn btn-outline-primary" type="submit">Submit form</button>
     </div>
         
         </form>
        
        </div>
      </div>
    </div>
  
    </>
    
    );
};

export default Contact;
