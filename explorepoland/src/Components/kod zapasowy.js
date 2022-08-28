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


div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 20px;


    p {
        margin-bottom: 20px;
    }

    span {
        font-family: 'Nuosu SIL', serif;
        height: 10vh;
        font-size: 20px;
        padding-top: 10px;
        background-color: rgb(12, 12, 14, 0.5);

    }







    useEffect(() => {
      window.addEventListener("scroll", (event) => {
        console.log("dupa");
        if (window.scrollY > 100) {
          console.log(window.scrollY);
          setBackToTopArrow(true);
        } else {
          setBackToTopArrow(false);
        }
      });
    }, []);

