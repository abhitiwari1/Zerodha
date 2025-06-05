import Navbar from '../Navbar';
import API from './API';
import Coin from './Coin';
import Console from './Console';
import Hero from './Hero';
import Kite from './Kite';
import Universe from './Universe';
import Varsity from './Varsity';
import Footer from '../Footer';

function ProductPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Kite />
      <Console />
      <Coin />
      <API/>
      <Varsity />
      <Universe/>
      <Footer />
    </>
  )
}

export default ProductPage;