import React from 'react';
import Universe from './Universe';
import Hero from './Hero';
import Oneside from './OneSide';
import Otherside from './OtherSide';

function Product() {
    return ( 
        <div className="container">
            <Hero />
            <Oneside 
                imageUrl='media/kite.png' 
                ProductName="Kite"
                ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                key1='Try demo &rarr;'
                Key2='Learn more &rarr;'
            />
            <Otherside 
                imageUrl='media/console.png' 
                ProductName="Console"
                ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
                key1='Learn more  &rarr;'
            />
            <Oneside 
                imageUrl='media/coin.png' 
                ProductName="Coin"
                ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                key1='Coin &rarr;'
            />
            <Otherside 
                imageUrl='media/kiteconnect.png' 
                ProductName="Kite Connect API"
                ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
                key1='Kite demo &rarr;'
            />
            <Oneside 
                imageUrl='media/varsity.png' 
                ProductName="Varsity mobile"
                ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
            />
            <Universe />
        </div>
     );
}

export default Product;