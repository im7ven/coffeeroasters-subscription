import { CoffeeProduct } from "../components/home/CoffeeProduct";
import { Hero } from "../components/home/Hero";
import piccollo from "../images/home/desktop/image-piccollo.png";

export const HomePage = () => {
  return (
    <>
      <Hero></Hero>;
      <br />
      <br />
      <br />
      <br />
      <CoffeeProduct src={piccollo} alt="Piccollo coffee" heading="Piccollo">
        Mild and smooth blend featuring notes of toasted almond and dried cherry
      </CoffeeProduct>
    </>
  );
};
