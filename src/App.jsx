import { useState } from 'react'
import './App.css'

const products = [{
  id: 1,
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  id: 2,
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  id: 3,
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  id: 4,
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  id: 5,
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  id: 6,
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const IconSwitch = (props) => {
  return (
    <span className="material-icons" onClick={props.onSwitch}>
      {props.icon}
    </span>
  )
}

const ProductList = (props) => {
  return (
    <div className={props.class}>
        {products.map((item) => {
          return (
            <div className="product-card" key={item.id}>
              <h2 className="product-name">{item.name}</h2>
              <span className="product-color">{item.color}</span>
              <div className="img-wrap">
                <img src={item.img} className="product-img" />
              </div>
              <div className="product-info">
                <span className="product-price">&#36;{item.price}</span>
                <button className="button">Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
  )
}


const App = () => {
  const [icon, setIcon] = useState("view_module");

  return (
    <>
      <IconSwitch icon={icon} onSwitch={() => {icon === "view_module" ? setIcon("view_list") : setIcon("view_module")}} />

      <ProductList class={icon === "view_module" ? "view-module" : "view-list"}/>
    </>
    
  );
};

export default App;
