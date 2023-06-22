import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
//   const [orderId, setOrderId] = useState('');

  const handlePayment = async () => {
    try {
      // Create a payment order on the server
      // const response = await axios.post('/create-order');
      // const { id } = response.data;

      // // Store the order ID in the component state
      // setOrderId(id);

      // Load the Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = displayPaymentForm;
      document.body.appendChild(script);
    } catch (error) {
      console.log(error);
    }
  };

  const displayPaymentForm = () => {
    // Check if the Razorpay script is available
    if (typeof window.Razorpay === 'undefined') {
      // Handle error, log a message, or display an error to the user
      console.log('Razorpay script not loaded');
      return;
    }

    // Rest of the code remains the same
    const options = {
      key: 'rzp_test_dsqpBlsd93gkpG',
      amount: 1000,
      currency: 'INR',
      name: 'Your Company',
      description: 'Test payment',
      // order_id: orderId,
      handler: (response) => {
        // Handle the payment success/failure response
        console.log(response);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
 };

export default PaymentComponent;
