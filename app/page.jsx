import Clipboard from '@/components/Clipboard';
import FeedBack from '@/components/FeedBack';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Home = () => {


  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-20 w-full">
          <Clipboard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
