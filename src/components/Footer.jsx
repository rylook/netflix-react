import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <footer>
        <Socials />
        <ul>
          <li>
            <a href="#">Audiodescription</a>
          </li>
          <li>
            <a href="#">Centre d'aide</a>
          </li>
          <li>
            <a href="#">Carte cadeaux</a>
          </li>
          <li>
            <a href="#">Presse</a>
          </li>
          <li>
            <a href="#">Relation Investisseurs</a>
          </li>
          <li>
            <a href="#">Recrutement</a>
          </li>
          <li>
            <a href="#">Boutique Netflix</a>
          </li>
          <li>
            <a href="#">Conditions d'utilisation</a>
          </li>
          <li>
            <a href="#">Confidentialité</a>
          </li>
          <li>
            <a href="#">Informations légales</a>
          </li>
          <li>
            <a href="#">Préférences de cookies</a>
          </li>
          <li>
            <a href="#">Mentions légales</a>
          </li>
          <li>
            <a href="#">Nous contacter</a>
          </li>
        </ul>
        <button type="text">Code de service</button>
        <p>&copy; 1997-2023 Netflix, Inc.</p>
      </footer>
    </>
  );
};

export default Footer;
