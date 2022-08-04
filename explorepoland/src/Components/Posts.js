import React from "react";
import "../Stylesheets/Posts.scss";
import "./Fonts/Fonts.scss";
import "../Stylesheets/Classes.scss";
import "../Stylesheets/Mixins.scss";
import"../Stylesheets/Buttons.css";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";

export default function Posts() {
  return (
    <section className="postsWrapper parallax" id="Posts">
      <div className="postsBorder"></div>
      <div className="postsContent">
        <h2>Oto Propozycja Kilku Atrakcji</h2>
        <p>
          Wybranie zestawu najpiękniejszych miejsc w Polsce to bardzo trudne
          zadanie. Nasz kraj oferuje tyle wspaniałych zakątków, że nie sposób
          zmieścić je w takiej skondensowanej formie. Nie traktujcie więc tego
          zestawienia zbyt poważnie. Na pewno wiele miejsc w nim brakuje. Nie
          gniewajcie się. To tylko subiektywna propozycja punktów do
          odwiedzenia. Więcej, o wiele więcej odkryjecie już na własną rękę, do
          czego gorąco zachęcamy, bo Polska jest piękna!
        </p>
      </div>
      <div className="newestPosts">
        {/*Zmienić nazwe klas na bardziej semantyczne*/}
        <div className="postOne">
          <div className="info">
            <div className="icon">
              <MdOutlineHelpOutline />
            </div>{" "}
            <p>
              Lot widokowy nad Podhalem to prezent dla osób ważnych w Twoim
              życiu i na szczególne okazje. Ucieszą się z niego osoby wrażliwe
              na piękno polskiej przyrody oraz te, które bardziej doceniają
              możliwość doświadczenia niezwykłych emocji niż dobra materialne.{" "}
            </p>
          </div>
          <span>
            Lot Widokowy nad Tatrami <p>Zakopane</p>
          </span>
        </div>
        <div className="postTwo">
          <div className="info">
            <div className="icon">
              <MdOutlineHelpOutline />
            </div>{" "}
            <p>
              Spływ Dunajcem - na flisackiej tratwie to niezwykłe spotkanie z
              dziką, niezmienioną od tysiącleci przyrodą - jedna z największych
              atrakcji turystycznych Europy. Jednocześnie to najlepszy sposób na
              zwiedzanie Pienińskiego Parku Narodowego.{" "}
            </p>
          </div>
          <span>
            SPŁYW DUNAJCEM <p>Szczawnica</p>
          </span>
        </div>
        <div className="postThree">
          <div className="info">
            <div className="icon">
              <MdOutlineHelpOutline />
            </div>{" "}
            <p>
              Jeden z dwóch, obok Wolińskiego, nadmorskich parków narodowych w
              Polsce. Ze względu na dużą różnorodność przyrodniczą zaliczony
              został w 1977 roku do Światowej Sieci Rezerwatów Biosfery UNESCO.
              Zajmuje obszar ponad 32 tys. hektarów.{" "}
            </p>
          </div>
          <span>
            Słowiński Park Narodowy <p>Smołdzino</p>
          </span>
        </div>
        <div className="postFour">
          <div className="info">
            <div className="icon">
              <MdOutlineHelpOutline />
            </div>{" "}
            <p>
              Jest
              uznawana za jedną z najciekawszych atrakcji regionu. Ta niewielka,
              barokowa kaplica jest wypełniona około 30 tysiącami ludzkich
              kości. Świadomość tego, że szczątki te są autentyczne ściąga tu
              każdego roku rzesze turystów, którzy pragną
              zobaczyć to miejsce.{" "}
            </p>
          </div>
          <span>
            Kaplica Czaszek <p>Czermna</p>
          </span>
        </div>
      </div>

      <div className="seeMore">
        <button className="custom-btn btn-5"><span>ZOBACZ WIĘCEJ</span></button>
        <MdArrowForward fontSize={"20px"} color={"rgb(48,108,178)"} />{" "}
      </div>
    </section>
  );
}
