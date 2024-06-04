import { useState } from "react";
import "./App.css";

const menu = [
  // insert duplicate cursors ==> ctrl + alt + downArrow
  // to select the text word by word ==> shift + ctrl + rightArrow
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const obj1 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

function App() {
  const [currMenu, setCurrMenu] = useState(menu);

  return (
    <>
      content
      <h1>{obj1.address.street}</h1>
      <h1>{obj1.address.geo.lat}</h1>
      <h1>{obj1.address.geo.lng}</h1>
      <h1>{obj1.company.name}</h1>
      <h1>Our Menu</h1>
      <button
        onClick={() => {
          setCurrMenu(menu);
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setCurrMenu(
            // logic
            menu.filter((item) => item.category === "breakfast")
          );
        }}
      >
        Breakfast
      </button>
      <button
        onClick={() => {
          // logic to filter based on lunch
          setCurrMenu(menu.filter((item) => item.category === "lunch"));
        }}
      >
        Lunch
      </button>
      <button
        onClick={() => {
          // logic to filter based on lunch
          setCurrMenu(menu.filter((item) => item.category === "shakes"));
        }}
      >
        Shakes
      </button>
      {/* Total Menu */}
      <div className="totlaMenu">
        {currMenu.map((menuItem) => {
          const { id, title, category, price, img, desc } = menuItem;
          return (
            <article key={id} className="menuItem">
              <img src={img} alt="" />
              <h3>{title}</h3>
              <span>{price}</span>
              <p>{desc}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default App;
