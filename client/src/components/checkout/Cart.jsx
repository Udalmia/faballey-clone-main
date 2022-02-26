import { useEffect } from "react";
import { CartNavbar } from "./CartNavbar";
import React from "react";
//import { MdDelete } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
//import { useParams } from "react-router";
import "./Cart.css"
import { useState } from "react";
import { loadData } from "../../utils/localStorage";


export const Cart = () => {
  const [cartList, setCartList] = useState([]);
  console.log("cartList:", cartList);

  const [name, setName] = useState("");

  const price = find_price();
  console.log("price:", price);

  function find_price() {
    let sum = 0;
    for (let i = 0; i < cartList.length; i++) {
      sum += +cartList[i].price;
    }
    return sum;
  }

  const userId = loadData("userId");
  console.log("userId:", userId);

  useEffect(() => {
    const getProducts = () => {
      // try {
         fetch(`https://cryptic-oasis-92145.herokuapp.com/users/${userId}`)
           .then((res) => {res.json()
            console.log("hello" ,res)
          })
           
           .then((data) => {
             console.log("data:", data);
             let tem = data.email.split("@");
             console.log("tem:", tem);
             setName(tem[0]);
             setCartList(data.cartItems);
   
             
           });
       //} catch (error) {
       //   console.log("error:", error);
       // }
     };
    getProducts();

  }, []);

  

  // const getProducts = () => {
  //  // try {
  //     fetch(`https://cryptic-oasis-92145.herokuapp.com/productDetail/${_id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("data:", data);
  //         let tem = data.email.split("@");
  //         console.log("tem:", tem);
  //         setName(tem[0]);
  //         setCartList(data);

          
  //       });
  //   //} catch (error) {
  //   //   console.log("error:", error);
  //   // }
  // };

  return (
    <div>
      <CartNavbar />
      <div className="red-clr-box">
        Score free shipping on orders above INR 3000
      </div>

      
      <div className="main-content w-9/12">
        <div className="left-side w-2/3">
          <div className="top-heading">
            <h2>My Shopping Bag (2)</h2>
          </div>

          <div className="cart-items">
             <div className="pic">
               <img src="https://img.faballey.com/images/Product/TOP05713Z/d4.jpg" alt="" />
             </div>

             <div className="grid">
             <div className="content">
               <h2>Yellow Floral Pleated Neck Tie Top &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   ₹1600 
                </h2>
                
                <p>Size:M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Qty:1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Color: Orange
                   <br />
                   SKU CODE : DRS04793Z
                </p>
             </div>

             <hr />
             {/* -------------------------------- */}

             <div className="bottom">
               <p><u>Edit Item</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Move to Wishlist</u></p>
               
               {/* <i class="fa-solid fa-trash"></i> */}
             </div>

             </div>

          </div>

          <br />
          <div className="cart-items">
             <div className="pic">
               <img src="https://img.faballey.com/images/Product/TOP05314Z/d4.jpg" alt="" />
             </div>

             <div className="grid">
             <div className="content">
               <h2>Grey Polka Puff Sleeve Knit Crop Top &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   ₹1200 
                </h2>
                
                <p>Size:XL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Qty:1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Color: Grey
                   <br />
                   SKU CODE : DRS04793B
                </p>
             </div>

             <hr />
             {/* -------------------------------- */}

             <div className="bottom">
               <p><u>Edit Item</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Move to Wishlist</u></p>
               
               {/* <i class="fa-solid fa-trash"></i> */}
             </div>

             </div>

          </div>

          
        </div>

        {/* ------------------------------------------------------------------------------------------ */}

        <div className="right-side w-1/3">
          <div className="top-heading">
            <h2>Price Details</h2>
          </div>

          <div className="priceTag">
            <div className="donation">
              <div>
                <h2>Donation</h2>
                <p>
                  Donation Extra 10 (This donation is towards NGO Ssrishti that
                  is providing food and hygiene essentials to migrant labors
                  during the COVID-19 lockdown)
                </p>
              </div>
              <span>
                <input type="checkbox" name="" id="" />
              </span>
            </div>

            <div>
              <table>
                <tbody>
                  <tr className="border-y-2	">
                    <td>
                      <span className="coupon">
                        <BsFillPlusCircleFill />
                        Apply coupon
                      </span>
                    </td>
                  </tr>

                  <tr className="border-y-2	">
                    <span className="coupon">
                      <BsFillPlusCircleFill />
                      Redeem Gift cards
                    </span>
                  </tr>

                  <tr className="border-y-2	">
                    <td>
                      <td className="t-data lefting">Subtotal</td>
                      <td className="t-data righting">₹{price}</td>
                    </td>
                  </tr>

                  <tr className="border-y-2	">
                    <td>
                      <td className="t-data lefting">Total</td>
                      <td className="t-data righting">₹{price}</td>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="place-order"><a href="/shipping" className="text-white">Place Order</a> </button>
          </div>
          <br />
          <p>Estimated Delivery Time</p>
          <p className="due-date">India : 4-6 business days. </p>
          <p>International: 7-12 business days.</p>
        </div>
      </div>

      <div className="footer-static-img">
        <img src="https://i.ibb.co/wNQGbjn/Capture.jpg" alt="footer part" />
      </div>
    </div>
  );
};


//https://cryptic-oasis-92145.herokuapp.com/users/${userId}