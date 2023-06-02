import React from 'react';
import GlobalStyle from '../GlobalStyle';
import HeroSection from '../components/HeroSection';
import ProductApiCard from '../components/ProductApiCard';

const Home = () => {
    return (
        <div>
            <GlobalStyle />
            <HeroSection />
            <ProductApiCard />
        </div>
    )
}

export default Home;