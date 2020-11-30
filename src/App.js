import Box from '@material-ui/core/Box';

import React from 'react'
import FilteredList from './FilteredList.jsx';
import './App.css';

function App() {
  return (
    <Box className="App" >
      <h1>Car Store</h1>
      <FilteredList list={carList} />
    </Box>
  );
}

const carList = [
  {
    name: "BMW 3 Series",
    image: "https://pixnio.com/free-images/2018/11/27/2018-11-27-15-44-25-1200x674.jpg",
    size: "Medium",
    color: "Blue",
    price: 50100,
  },
  {
    name: "Audi A4",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/2017_Audi_A4_%288W%29_S-Line_quattro_sedan_%282018-03-22%29_01.jpg",
    size: "Medium",
    color: "White",
    price: 39300
  },
  {
    name: "Tata Buzzard",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tata_Buzzard_Genf_2019_1Y7A5791.jpg",
    size: "Large",
    color: "Blue",
    price: 26400
  },
  {
    name: "Big Mack Truck",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/A_Big_Mac_with_out_the_bun-2_%2825321224667%29.jpg",
    size: "Large",
    color: "Blue",
    price: 120000,
  },
  {
    name: "Little Red Corvette",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a1/80_corvette.jpg",
    size: "Small",
    color: "Red",
    price: 60300,
  },
  {
    name: "Toyota Prius",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/2016_Toyota_Prius_%28ZVW50R%29_Hybrid_liftback_%282016-04-02%29_01.jpg",
    size: "Medium",
    color: "White",
    price: 27800,
  },
  {
    name: "VW Camper Van",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/VW_T2_campervan.jpg",
    size: "Large",
    color: "Yellow",
    price: 15001,
  },
  {
    name: "Ferrari 488 GTB",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ferrari_488_GTB.jpg/1024px-Ferrari_488_GTB.jpg",
    size: "Small",
    color: "Red",
    price: 132000,
  },
  {
    name: "Lamborghini Gallardo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Yellow_Lamborghini_Gallardo_edit2.jpg/1024px-Yellow_Lamborghini_Gallardo_edit2.jpg",
    size: "Small",
    color: "Yellow",
    price: 202000
  },
  {
    name: "The Mystery Machine",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Mystery_Machine_van_%40_Universal_Studios_Hollywood.jpg",
    size: "Large",
    color: "Blue",
    price: 14400,
  },
  {
    name: "Sally",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Cars_movie%27s_car.jpg",
    size: "Small",
    color: "Blue",
    price: 100000,
  },
  {
    name: "Rocket",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Yellow_toy_car.jpg",
    size: "Tiny",
    color: "Yellow",
    price: 1,
  },
];

export default App;
