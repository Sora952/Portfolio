import React,{useState} from 'react'; // eslint-disable-line
import {NavLink} from 'react-router-dom';
import '../Styles/Home.css';
import { makeStyles } from "@material-ui/core/styles";
import Carousel from '../Components/Carousel';
import Typewriter from 'typewriter-effect';
//import ChipInput from 'material-ui-chip-input';

const useStyles = makeStyles((theme) => ({
  root: {
      
  },
}));

const Home = () => {
  const classes = useStyles();
    const greeting = "<strong>Salut à toi, visiteur !</strong>";
    const myName = "Je m'appelle Camille Bueno, j'ai actuellement 23 ans et je suis un <strong>développeur fullStack Javascript/React</strong>.";
    const explain = "Je te souhaite une bonne visite sur mon portfolio, et j'espère que tu me diras ce que tu en pense ;). <em>Je vais l'améliorer jour après jour !</em>";
    //   const [chipValue, setChipValue] = useState([]);
  //   const [errorChip, setErrorChip] = useState('')
  //   const [chipData, setChipData] = useState([
  //     // { key: 0, label: 'Angular' },
  //     // { key: 1, label: 'jQuery' },
  //     // { key: 2, label: 'Polymer' },
  //     // { key: 3, label: 'React' },
  //     // { key: 4, label: 'Vue.js' },
  // ]);

  // const onSubmitChipbox = (chip) => {

  //   const filterIndex = chipData.find((element) => element === chip)
  //   if (filterIndex === undefined) {
  //       if (chip.length === 6) {
  //           setErrorChip('You can enter 5 max tags')
  //           chip.pop();
  //           //console.log('truc', truc)
  //           setChipData(chip)
  //       } else {
  //           setErrorChip('')
  //           setChipData(chip)
  //           setChipValue('');
  //       }
  //   }
  // }

    return (
      <div className={classes.root}>
        <section>
        
        <div style={{backgroundColor: "#DDDDDD", fontSize: "22px", padding: "20px", borderRadius: "5px", boxShadow: "1px 1px 12px #DDDDDD", width: "80%", margin: "auto", marginTop: "30px", marginBottom: "30px"}}>
          
        <Typewriter
        options={{
          //strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(greeting)
          
            // .callFunction(() => {
            //   console.log('String typed out!');
            // })
            .pauseFor(2000)
            .typeString(myName)
            .pauseFor(2000)
            .typeString(explain)
            .pauseFor(2000)
            .deleteAll(1)
            // .callFunction(() => {
            //   console.log('All strings were deleted');
            // })
            .pauseFor(3000)
            .start();
          }}
          />
          <br />
          <p>Si vous vous trouvez sur ma page ce n'est sûrement pas par hasard. Si je suis développeur web aujourd'hui, sachez que ça n'a pas été toujours le cas, ayant travaillé dans les cuisines collectives, celui-ci ne m'apportait pas un épanouissement professionnel. J'ai donc décidé de me reprendre en main, et de me reconvertir au milieu de l'informatique auprès de la WildCodeSchool de Lyon. Ce que je peux vous affirmer, c'est que ce fût un choix judicieux!</p>
          <p>Passionné des technologies, j'ai commencé à me former en autodidacte sur le développement web en 2019, puis j'ai choisi de faire une reconversion dans ce métier.</p>

          <p>De ce fait, je suis actuellement en formation développeur web et web mobile à la Wild Code School de Lyon, je me forme aux métiers du web, et surtout sur React/NodeJS/JavaScript pour pouvoir, par la suite, travailler en tant que développeur web FullStack.</p>

          <p>Grâce à cela, je suis actuellement en alternance depuis début septembre 2020 chez Datadict, plus précisément sur leur projet GoFitnessCloud et le second, Influx Agency, ce qui m'a permis d'accroitre mes connaissances apprises récemment, et de gagner de l'expérience rapidement en entreprise, tout en continuant mon cursus de formation, d'une période d'un an.
          </p>
        </div>
        </section>
        <section style={{backgroundColor: "gray", height: "100%", padding: "20px"}}>
        <div style={{width: "80%", margin: "auto", marginTop: "30px"}}>
          <h3>Voici quelques-uns de mes principaux projets: </h3>
          <Carousel />
        </div>
        <div>
          <p style={{overflowWrap: "break-word", marginTop: "20px", fontSize: "22px"}}>Ps: certains projets ne sont pas encore mis en ligne comme <NavLink exact to='/influx-img' style={{color: "Black", fontWeight: "600", textDecoration: "underline"}}>Influx</NavLink> ou Agileo (clique ici pour voir les screens), ou bien certains<br />
          ont eu leur base de données supprimée comme Healthymood par ma formation (pour leurs besoins peronnels). Je ferais des screens au besoin.</p>
        </div>
        </section>
        <section style={{ marginTop: "30px", marginBottom: "30px"}}>
          <h3>Mes principales compétences actuelles:</h3>
          <div style={{width: "80%", display: "flex", justifyContent: "space-between", margin: "auto", marginBottom: "30px", marginTop: "30px"}}>
            <div>
              <img src={require('../assets/css-3.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="css3" title="css3" />
              <img src={require('../assets/javascript.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="javascript" title="javascript" />
              <img src={require('../assets/html.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="html" title="html" />
            </div>
            <div>
              <img src={require('../assets/react.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="react" title="react" />
              <img src={require('../assets/typescript.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="typescript" title="typescript" />
              <img src={require('../assets/nodejs.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="nodejs" title="nodejs" />
            </div>
            <div>
              <img src={require('../assets/docker.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="docker" title="docker" />
              <img src={require('../assets/mysql.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="mysql" title="mysql" />
              <img src={require('../assets/graphql.png')} style={{maxHeight: "50px", maxWidth: "50px"}} alt="graphql" title="graphql" />
            </div>
          </div>
          <span style={{fontSize: "20px", fontWeight: "600"}}>J'ai aussi pas mal utilisé ExpressJS, AppolloServer, un tout petit peu mongo/mongoose. Utilisation aussi de KeystoneJS, API rest, etc...</span>
          <span style={{fontSize: "20px", fontWeight: "600"}}>Je n'ai pas encore eu le temps de le mettre en ligne, mais <a style={{textDecoration: 'underline', color: "black", fontWeight: "600"}} href='https://github.com/WildCodeSchool/healthymood-api' target='_blank' rel='noreferrer noopener'>voici un lien vers un repository github d'une API</a> faites par mes collègues et moi même en NodeJS/Express/MySQL en mode API Rest, CRUD inclut.</span>
        </section>
        {/* <ChipInput
          placeholder="Enter your tags"
          classes={{chip: classes.chip}}
          className={classes.chipContainer}
          value={chipValue}
          helperText={errorChip}
          //onAdd={(chip) => console.log('add', chip)}
          onChange={(chip) => onSubmitChipbox(chip)}
          //onDelete={(chip, index) => handleDelete(chip, index)}
          error={errorChip ? true : false}
          // style={{
          //     width: "321px"
          // }}
      /> */}
      </div>
    )
}

export default Home;
