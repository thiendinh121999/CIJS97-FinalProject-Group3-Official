import React from "react";
import $ from 'jquery'
import './home.css'

const FetchTest = () => {
    fetch('productdata.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data received:', data);
    // Process the data as needed
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}
export default FetchTest