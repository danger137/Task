import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-black text-light pt-5 pb-3">
      <div className="container">
        <div className="row mb-5 mt-3 ">
          {/* Logo and Newsletter Section */}
          <div className="col-md-6 mb-4">
            <h4 className="mb-3">Logo</h4>
            <p className="mb-4">It's time to shine again!</p>
            <div className="me-5 pe-5">
  <div className="me-5 pe-5">
    <form className="d-flex me-5 align-items-center border-0 bg-black p-1" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <input
        type="email"
        className="form-control bg-black text-white border-white placeholder-white"
        placeholder="you@example.com"
        aria-label="Email"
        style={{ borderRadius: '0px', color: 'white',width:"155px" }}
      />
      <button style={{ borderRadius: '0px', background: 'black' }} className="btn btn-dark border-white text-white" type="submit">
        SUBSCRIBE
      </button>
    </form>
  </div>
</div>



            <div className="mt-4 ms-2 d-flex gap-4 ">
              <a href="#" className="text-light me-3">
              <i style={{fontSize:"larger"}} className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
              <i style={{fontSize:"larger"}} className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="#" className="text-light me-3">
              <i style={{fontSize:"larger"}} className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
              <i style={{fontSize:"larger"}} className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-light">
              <i style={{fontSize:"larger"}} className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links - Categories */}
          <div className="col-md-2 mb-4">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Skin
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Hair
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Make-up
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Perfumes
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Cosmetics
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links - Company */}
          <div className="col-md-2 mb-4">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a style={{color:"#5a5555"}} href="#" className=" text-decoration-none">
                  About Us
                </a>
              </li>
            
              <li className="mb-2">
                <a style={{color:"#5a5555"}} href="#" className=" text-decoration-none">
                  Terms of Service
                </a>
              </li>
             
              <li className="mb-2">
                <a style={{color:"#5a5555"}} href="#" className=" text-decoration-none">
                  Advertise
                </a>
              </li>
            
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a style={{color:"#5a5555"}} href="#" className=" text-decoration-none">
                  PRIVACY POLICY
                </a>
              </li>
        
              <li className="mb-2">
                <a  style={{color:"#5a5555"}} href="#" className="text-decoration-none">
                  EDITORIAL POLICY
                </a>
              </li>
           
              <li className="mb-2">
                <a style={{color:"#5a5555"}} href="#" className="text-decoration-none">
                  CONTACT
                </a>
              </li>
          
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
       
      </div>
      <div className="border-top border-light  ">
      <div className="container pt-4 d-flex justify-content-between gap-5  ">
   <p className="text-center mb-0">&copy; 2023 Retina. All rights reserved.</p>
          <div className="text-center pb-3">
  <a href="#" className="text-light border-bottom  text-decoration-none me-3">
    Privacy Policy
  </a>
  <a href="#" className="text-light border-bottom  text-decoration-none me-3">
    Terms of Service
  </a>
  <a href="#" className="text-light border-bottom  text-decoration-none">
    Cookie Settings
  </a>
</div>
   </div>

        </div>
    </footer>
  );
};

export default Footer;
