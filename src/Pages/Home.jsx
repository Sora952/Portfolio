import React,{useState} from 'react'; // eslint-disable-line
import {NavLink} from 'react-router-dom';
import '../Styles/Home.css';
import { makeStyles } from "@material-ui/core/styles";
import Carousel from '../Components/Carousel';
import Typewriter from 'typewriter-effect';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
//import ChipInput from 'material-ui-chip-input';

const useStyles = makeStyles((theme) => ({
  root: {
      
  },
}));

const Home = () => {
  const classes = useStyles();
  const greeting = "<strong>Salut à vous, visiteur !</strong>";
  const greeting2 = " Je vous souhaite une bonne journée !";
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
        
        <div style={{backgroundColor: "#DDDDDD", fontSize: "22px", padding: "20px", borderRadius: "4px", width: "80%", margin: "auto", marginTop: "30px", marginBottom: "30px"}}>
          
        <Typewriter
        options={{
          //strings: ['Hello', 'World'],
          autoStart: true,
          //loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(greeting)
          
            // .callFunction(() => {
            //   console.log('String typed out!');
            // })
            .pauseFor(2000)
            .deleteAll(1)
            .typeString(greeting2)
            // .callFunction(() => {
            //   console.log('All strings were deleted');
            // })
            .pauseFor(3000)
            .start();
          }}
          />
          <br />
          <p>Je m'appelle Camille Bueno, j'ai actuellement 23 ans et je suis un <strong>développeur fullStack React/NodeJS/JavaScript</strong>.</p>
          <p>Si vous vous trouvez sur ma page ce n'est sûrement pas par hasard. Si je suis développeur web aujourd'hui, sachez que ça n'a pas été toujours le cas, ayant travaillé dans les cuisines collectives, celui-ci ne m'apportait pas un épanouissement professionnel. J'ai donc décidé de me reprendre en main, et de me reconvertir au milieu de l'informatique auprès de la WildCodeSchool de Lyon. Ce que je peux vous affirmer, c'est que ce fût un choix judicieux!</p>
          <p>Passionné des technologies, j'ai commencé à me former en autodidacte sur le développement web en 2019, puis j'ai choisi de faire une reconversion dans ce métier.</p>

          <p>De ce fait, je suis actuellement en formation développeur web et web mobile à la Wild Code School de Lyon, je me forme aux métiers du web, et en particulier sur l'écosystème Javascript/NodeJS pour pouvoir parfaire mes connaissances en tant que développeur web FullStack.</p>

          <p>Grâce à cela, je suis actuellement en alternance depuis début septembre 2020 chez Datadict, plus précisément sur leur projet GoFitnessCloud et le second, Influx Agency, ce qui m'a permis d'accroitre mes connaissances apprises récemment, et de gagner de l'expérience rapidement en entreprise, tout en continuant mon cursus de formation, d'une période d'un an.
          </p>
          <p>Je vous souhaite une bonne visite sur mon portfolio, et j'espère que vous me direz ce que vous en pensez ;). <em>Je vais l'améliorer jour après jour !</em></p>
        </div>
        </section>
        <section style={{backgroundColor: "gray", height: "100%", padding: "20px"}}>
        <h3>Mes principales compétences actuelles:</h3>
          <div style={{width: "80%", display: "flex", justifyContent: "space-between", margin: "auto", marginBottom: "30px", marginTop: "30px"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src={require('../assets/css-3.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="css3" title="css3" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>CSS3</span>
              <img src={require('../assets/javascript.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="javascript" title="javascript" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>Javascript</span>
              <img src={require('../assets/html.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="html" title="html" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>HTML5</span>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src={require('../assets/react.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="react" title="react" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>ReactJS</span>
              <img src={require('../assets/typescript.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="typescript" title="typescript" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>Typescript</span>
              <img src={require('../assets/nodejs.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="nodejs" title="nodejs" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>NodeJS</span>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src={require('../assets/docker.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="docker" title="docker" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>Docker</span>
              <img src={require('../assets/mysql.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="mysql" title="mysql" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>MySQL</span>
              <img src={require('../assets/graphql.png')} style={{maxHeight: "100px", maxWidth: "100px"}} alt="graphql" title="graphql" />
              <span style={{fontSize: "16px", fontWeight: "500", marginRight: "15px"}}>GraphQL</span>
            </div>
          </div>
          <div style={{width: "80%", margin: "auto"}}>
            <span style={{fontSize: "20px", fontWeight: "600"}}>J'ai aussi pas mal utilisé ExpressJS, AppolloServer, un tout petit peu mongo/mongoose. Utilisation aussi de KeystoneJS, API rest, etc...</span>
            <span style={{fontSize: "20px", fontWeight: "600"}}>Je n'ai pas encore eu le temps de le mettre en ligne, mais <a style={{textDecoration: 'underline', color: "black", fontWeight: "600"}} href='https://github.com/WildCodeSchool/healthymood-api' target='_blank' rel='noreferrer noopener'>voici un lien vers un repository github d'une API</a> faites par mes collègues et moi même en NodeJS/Express/MySQL en mode API Rest, CRUD inclut.</span>
          </div>
        </section>
        <section style={{ marginTop: "30px", height: "100%", marginBottom: "30px", overflowWrap: "break-word"}}>

          <section id="experience">
        <div className="container">
            <div className="orange-devider"></div>
            <div className="heading">
                <h2>Mes Expériences professionnelles:</h2>
            </div>
            <ul className="timeline">
                <li>
                    <div className="timeline-badge">
                      <BusinessCenterIcon />
                    </div>
                    <div className="timeline-card-container">
                        <div className="timeline-card">
                            <div className="timeline-heading">
                                <h3>DATADICT</h3>
                                <h4>Alternance <em>concepteur développeur d'application web et mobile</em></h4>
                                <p className="text-muted">
                                    <small className="glyphicon glyphicon-time"></small>Septembre 2020 =&gt; Novembre 2021</p>
                            </div>
                            <div className="timeline-body">
                                <p>Alternance en entreprise sur un an, sur 2 projets distincts</p>
                                <p>Premier projet <a style={{textDecoration: 'underline', color: "black", fontWeight: "600"}} href='https://app.gofitness.cloud/' target='_blank' rel='noreferrer noopener'><strong>GoFitnessCloud</strong></a> fait en 5 mois avec un collègue en utilisant ReactJS principalement.</p>
                                <p>Second projet <a style={{textDecoration: 'underline', color: "black", fontWeight: "600"}} href='https://www.influxagency.fr/' target='_blank' rel='noreferrer noopener'><strong>InfluxAgency</strong></a> fait en 3 mois avec un collègue (toujours en cours de création) en utilisant aussi ReactJS principalement.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-badge">
                        <BusinessCenterIcon />
                    </div>
                    <div className="timeline-card-container-inverted">
                        <div className="timeline-card">
                            <div className="timeline-heading">
                                <h3>Wild Code School Lyon</h3>
                                <h4>Alternant et formation <em>concepteur développeur d'application web et mobile</em></h4>
                                <p className="text-muted">
                                    <small className="glyphicon glyphicon-time"></small>Mars 2020 =&gt; Novembre 2021</p>
                            </div>
                            <div className="timeline-body">
                                <p>Formation de 5 mois sur le métier du web grâçe à 3 projets en <strong>React/MySQL/NodeJS principalement.</strong></p>
                                <p>Formation d'un an en alternance (actuellement en cours) avec la création d'un projet utilisant <strong>Typescript/ReactJS/NodeJS/GraphQL/MongoDB/Docker</strong></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-badge">
                      <BusinessCenterIcon />
                    </div>
                    <div className="timeline-card-container">
                        <div className="timeline-card">
                            <div className="timeline-heading">
                                <h3>Collèges et Hôpital</h3>
                                <h4>Agent polyvalent en restauration</h4>
                                <p className="text-muted">
                                    <small className="glyphicon glyphicon-time"></small>2014-2019</p>
                            </div>
                            <div className="timeline-body">
                                <p>Services au self</p>
                                <p>Préparation des repas</p>
                                <p>Lavage des locaux</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <p style={{overflowWrap: "break-word", marginTop: "20px", fontSize: "22px"}}>
            Plus d'infos sur mon <a style={{textDecoration: 'underline', color: "black", fontWeight: "600"}} href='https://www.linkedin.com/in/camillebueno/' target='_blank' rel='noreferrer noopener'>linkedin</a> où tout est décrit plus en détails.
          </p>

    </section>

        </section>
        <section style={{backgroundColor: "gray", marginTop: "30px", height: "100%", marginBottom: "-16px"}}>
        <div style={{width: "80%", margin: "auto", marginTop: "30px"}}>
          <h3 style={{paddingTop: "25px", paddingBottom: "15px"}}>Voici quelques-uns de mes principaux projets: </h3>
          <Carousel />
        </div>
        <div>
          <p style={{overflowWrap: "break-word", marginTop: "20px", paddingBottom: "15px", fontSize: "22px"}}>Ps: certains projets ne sont pas encore mis en ligne comme <NavLink exact to='/influx-img' style={{color: "Black", fontWeight: "600", textDecoration: "underline"}}>Influx</NavLink> ou Agileo (clique ici pour voir les screens), ou bien certains<br />
          ont eu leur base de données supprimée comme Healthymood par ma formation (pour leurs besoins peronnels). Je ferais des screens au besoin.</p>
        </div>

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
