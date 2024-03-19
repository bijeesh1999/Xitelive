import React from "react";
import "./products.css";

function Products() {
  return (
    <div className="converstion">
      <div className="content">
        <h2>String up Great conversation over Coffie </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          vitae, totam
          <br /> tempore perferendis, id incidunt repudiandae !
        </p>
      </div>
      <div className="product">
        <div className="details">
          <h3 style={{color:"red"}}>Flavour</h3>
          <button className="details">
          <i class="fa-solid fa-microchip"></i>
            <div className="moreAbout contents">
              <h4>Technology</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id tenetur facere placeat totam labore, optio, possimus, obcaecati </p>
            </div>
          </button>
          <button>
          <i class="fa-regular fa-handshake"></i>
            <div className="moreAbout contents">
              <h4>Technology</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id tenetur facere placeat totam labore, optio, possimus, obcaecati </p>
              </div>
          </button>
          <button>
          <i class="fa-solid fa-binoculars"></i>
            <div className="moreAbout contents">
              <h4>Technology</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id tenetur facere placeat totam labore, optio, possimus, obcaecati </p>

              </div>
          </button>
        </div>
        <div className="productImg">
          <img
            className="img"
            src="https://www.dhresource.com/webp/m/0x0/f2/albu/g14/M01/B9/88/rBValV9YmF2APcWZAAgWX8Y_FJ4466.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="intensity">
        <h2 className="intencity">Intensity</h2>
        <div className="moreInfo div contents">
          <div className="logo">
            <i class="fa-solid fa-mug-hot"></i>
          </div>
          <div>
            <h4>Mocha</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
        </div>
        <div className="moreInfo div contents">
          <div className="logo">
            <i class="fa-solid fa-mug-hot"></i>
          </div>
          <div>
            <h4>Americano</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
        </div>
        <div className="moreInfo div contents">
          <div className="logo">
            <i class="fa-solid fa-mug-hot"></i>
          </div>
          <div>
            <h4>Espresso</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
