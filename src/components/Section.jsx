/* eslint-disable react/prop-types */
/* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */
/* export default function Section({ category, images }) {
  const listItems = images.map((url) => (
    <li key={url}>
      <img src={url} alt="movie" />
    </li>
  ));

  return (
    <section>
      <h2>{category}</h2>
      <ul>{listItems}</ul>
    </section>
  );
} */

const Section = ({ category, images }) => {
  //console.log(images);
  return (
    <section>
      <h2>{category}</h2>
      <ul>
        {images.map((url) => {
          return (
            <li key={url}>
              <img src={url} alt="movie" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Section;
