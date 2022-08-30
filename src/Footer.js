import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeStyles.css";
function Footer() {
  return (
    <div
      style={{
        // backgroundColor: "rgb(225,220,198)"
        backgroundColor: "rgb(116,158,192)",
      }}
    >
      <div className="back_to_top">
        <NavLink to="/">Back to top</NavLink>
      </div>
      <div
      //   style={{ backgroundColor: "#1a2433" }}
      >
        <div className="footer_sub_flex_container">
          <div className="footer_flex_item">
            <h3>Get to Know Us</h3>
            <NavLink to="">About Us</NavLink>
            <NavLink to="">Careers</NavLink>
            <NavLink to="">Press Releases</NavLink>
            <NavLink to="">Library Cares</NavLink>
            <NavLink to="">Gift a Smile</NavLink>
            <NavLink to="">Library Science</NavLink>
          </div>
          <div className="footer_flex_item">
            <h3>Connect with Us</h3>
            <NavLink to="">Facebook</NavLink>
            <NavLink to="">Twitter</NavLink>
            <NavLink to="">Instagram</NavLink>
          </div>
          <div className="footer_flex_item">
            <h3>Make Money with Us</h3>
            <NavLink to="">Sell on library</NavLink>
            <NavLink to="">Sell under library Accelerator</NavLink>
            <NavLink to="">Library Global Selling</NavLink>
            <NavLink to="">Become an Affiliate</NavLink>
            <NavLink to="">Fulfilment by library</NavLink>
            <NavLink to="">Advertise Your Products</NavLink>
            <NavLink to="">Library Pay on Merchants</NavLink>
            <NavLink to=""></NavLink>
            <NavLink to=""></NavLink>
          </div>
          <div className="footer_flex_item">
            <h3>Let Us Help You</h3>
            <NavLink to="">COVID-19 and library</NavLink>
            <NavLink to="">Your Account</NavLink>
            <NavLink to="">Returns Centre</NavLink>
            <NavLink to="">100% Purchase Protection</NavLink>
            <NavLink to="">Library App Download</NavLink>
            <NavLink to="">Library Assistant Download</NavLink>
            <NavLink to="">Help</NavLink>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "gray",
            marginTop: "30px",
            marginBottom: "20px",
            fontWeight: "0.2vw",
          }}
        ></hr>
        <div>
          <div className="footer_logo_text">
            <div className="footer_amazon_logo">
              <NavLink to="">
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUm25S_vNJ1FV-lwS68MWmh-wQqE1bH20TyA&usqp=CAU"
                  alt="amazonlogo"
                ></img>
              </NavLink>
            </div>
            <div className="footer_amazon_text">
              <span>
                <i class="fa-solid fa-globe"></i>
              </span>
              <span style={{ marginLeft: "10px" }}>English</span>
            </div>
          </div>
          <div className="footerNavbars">
            <NavLink to="">Australia</NavLink>
            <NavLink to="">Brazil</NavLink>
            <NavLink to="">Canada</NavLink>
            <NavLink to="">France</NavLink>
            <NavLink to="">China</NavLink>
            <NavLink to="">Germany</NavLink>
            <NavLink to="">Italy</NavLink>
            <NavLink to="">Japan</NavLink>
            <NavLink to="">Mexico</NavLink>
            <NavLink to="">Neatherland</NavLink>
            <NavLink to="">poland</NavLink>
            <NavLink to="">Singapore</NavLink>
            <NavLink to="">Spain</NavLink>
            <NavLink to="">Turkey</NavLink>
          </div>
        </div>
      </div>
      <div>
        <div className="lower">
          <div className="flex_item_container_lower1">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                AbeBooks
              </NavLink>
              <NavLink to="">Books,art</NavLink>
              <NavLink to="">& Collection</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                {" "}
                Shopbop
              </NavLink>
              <NavLink to="">Designer</NavLink>
              <NavLink to="">Fashion Brands</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                library Web Services
              </NavLink>
              <NavLink to="">Scalable cloud</NavLink>
              <NavLink to="">Computing Services</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                library Business
              </NavLink>
              <NavLink to="">Everything For</NavLink>
              <NavLink to="">You Bussiness</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                Audible
              </NavLink>
              <NavLink to="">Download</NavLink>
              <NavLink to="">Audio Books</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                Prime Now
              </NavLink>
              <NavLink to="">2-Hour Delivery</NavLink>
              <NavLink to="">on Everyday Items</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                DPReview
              </NavLink>
              <NavLink to="">Digital</NavLink>
              <NavLink to="">Photography</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                library prime music
              </NavLink>
              <NavLink to="">90 million songs, ad-free</NavLink>
              <NavLink to="">Over 15 million podcast episodes</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower5">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                IMDb
              </NavLink>
              <NavLink to="">Movies, TV</NavLink>
              <NavLink to="">& Celebrities</NavLink>
            </div>
            <div className="lower_container">
              <NavLink
                to=""
                className="first_nav"
                style={{ color: "white" }}
              ></NavLink>
              <NavLink to=""></NavLink>
              <NavLink to=""></NavLink>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
