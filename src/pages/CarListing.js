import CarListings from "../components/CarListing/CarListing";
import Footer from "../components/Home/Footer/Footer";
import Navigation from "../components/shared/Navigation/Navigation";

const CarListing = () => {
  return (
    <>
      <Navigation />
      <CarListings />
      <Footer />
    </>
  );
};

export default CarListing;
