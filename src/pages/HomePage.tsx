import { CoffeeCollection } from "../components/home/CoffeeCollection";
import { CoffeeProduct } from "../components/home/CoffeeProduct";
import { Hero } from "../components/home/Hero";
import granEspresso from "../images/home/desktop/image-gran-espresso.png";
import planto from "../images/home/desktop/image-planalto.png";
import piccollo from "../images/home/desktop/image-piccollo.png";
import danche from "../images/home/desktop/image-danche.png";
import { FeatureBlock } from "../components/home/FeatureBlock";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <CoffeeCollection>
        <CoffeeProduct
          src={granEspresso}
          alt="Gran Espresso coffee"
          heading="Gran Espresso"
        >
          Light and flavorful blend with cocoa and black pepper for an intense
          experience
        </CoffeeProduct>
        <CoffeeProduct src={planto} alt="Planto coffee" heading="Planalto">
          Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts
        </CoffeeProduct>
        <CoffeeProduct src={piccollo} alt="Piccollo coffee" heading="Piccollo">
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry
        </CoffeeProduct>
        <CoffeeProduct src={danche} alt="Danche coffee" heading="Danche">
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </CoffeeProduct>
      </CoffeeCollection>
      <FeatureBlock />
    </>
  );
};
