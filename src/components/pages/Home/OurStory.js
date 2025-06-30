import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Augusta</h2>
        <p>
          Melis and Mario's story is one of sun-drenched coastlines, fragrant olive groves, and a deep-rooted love for the vibrant cuisines of their heritage. Their tale began in a bustling port town where Greece and Italy met, not just geographically, but in the vibrant tapestry of their lives.

Their Mother, Eleni: A captivating Greek woman with eyes like the Aegean Sea and hands that spun magic in the kitchen, Eleni was the keeper of ancient family recipes. She taught them the secrets of perfect dolmades, the art of grilling fresh fish kissed by the sea breeze, and the comforting warmth of a slow-cooked moussaka.

Their Father, Enzo: A passionate Italian, with a booming laugh and an even bigger heart, Enzo introduced them to the joys of making fresh pasta, the simplicity of a perfect Neapolitan pizza, and the richness of a slowly simmered ragu. He instilled in them a love for fresh, local ingredients and the Italian belief that food is best shared with loved ones.

A Fusion of Flavors: Growing up in this flavorful household, Melis and Mario were exposed to a unique blend of culinary traditions. They saw the shared love for olives, wheat, and grapes that formed the foundation of both Greek and Italian cuisine. They learned to appreciate the fragrant herbs of Greece, like oregano and thyme, and the robust flavors of Italy, such as garlic and basil. They discovered how to combine these influences to create something entirely new and exciting.

Melis: The Architect of Flavor: Melis, the elder brother, inherited his mother's meticulous attention to detail and a flair for balancing intricate flavors. He became an expert in crafting delicate pastries and perfecting the art of marinades, adding his own touch to ancient family recipes.

Mario: The Embodiment of Passion: Mario, the younger brother, possessed his father's fiery spirit and an infectious enthusiasm for cooking. He mastered the techniques of grilling and pasta making, pouring his heart and soul into each dish, ensuring it was bursting with flavor and made with the freshest ingredients.

The Shared Dream: As they grew, so did their shared passion for creating exceptional Mediterranean food. They dreamed of opening a restaurant that would celebrate their dual heritage, a place where their guests could experience the authentic taste of the Mediterranean through the eyes of two brothers united by a love of food and family. They envisioned a place where every dish tells a story, a story of sun, sea, and the vibrant cultures that shaped their lives.
And so, "The Little Lemon" was born - a testament to their heritage, their shared passion, and a promise to deliver the most delicious and authentic Mediterranean food you've ever tasted.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Melis and Mario" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Melis and Mario" />
      </div>
    </section>
  );
};

export default OurStory;
