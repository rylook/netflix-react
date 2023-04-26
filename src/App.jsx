import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import data from "./assets/movies.json";

//console.log(data);

function App() {
  return (
    <>
      <Header />
      {data.map((movies) => {
        return (
          <Section
            key={movies.category}
            category={movies.category}
            images={movies.images}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
