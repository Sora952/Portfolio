import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';
import '../Styles/Carousel.css';

function ControlledCarousel () {
  const [index, setIndex] = useState(0);
  const [carouselItems] = useState([
    {
      className: 'background-container d-block w-100',
      src: require('../assets/GFC.png'),
      alt: 'First slide',
      title: 'GoFitnessCloud',
      caption: 'Projet d\'entreprise, Réalisé sur 5 mois environ avec un collègue pour l\'entreprise DATADICT.',
      button: 'Voir GoFitnessCloud',
      link: 'https://app.gofitness.cloud/'
    },
    {
      className: 'background-container d-block w-100',
      src: require('../assets/Influx.png'),
      alt: 'Second slide',
      title: 'Influx Agency',
      caption: 'Second projet chez DATADICT, Réalisé sur 2 mois avec un collègue.',
      button: 'Voir Influx Agency',
      link: ''
    },
    {
      className: 'background-container d-block w-100',
      src: 'https://www.healthymood.fr/wp-content/uploads/nom7-2.jpg',
      alt: 'Third slide',
      title: 'HealthyMood',
      caption: 'Dernier projet de ma première formation développeur web, Projet fait en 8 semaines.',
      button: 'Voir HealthyMood',
      link: 'https://vigorous-carson-5a82d1.netlify.app/'
    },
    {
      className: 'background-container d-block w-100',
      src: require('../assets/AgileoHome.png'),
      alt: 'Four slide',
      title: 'Agileo',
      caption: 'Projet de ma formation en alternance, il sera fait en 1 an.',
      button: 'Voir Agileo',
      link: ''
    }
  ]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // useEffect(() => {
  //   API.get('/articles?per_page=1&sort_by=created_at&sort_order=desc')
  //     .then(res => {
  //       const lastArticle = res.data.data[0];
  //       setCarouselItems((carouselItems) => [{
  //         className: 'background-container d-block w-100',
  //         src: lastArticle.image,
  //         alt: 'First slide',
  //         title: lastArticle.title,
  //         caption: lastArticle.intro,
  //         button: 'Lire l\'article ',
  //         link: `article/${lastArticle.id}`
  //       }, ...carouselItems]);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, []) //eslint-disable-line

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map(e => {
        return (
          <Carousel.Item className='carousel-element' key={e.alt}>
            <div className={e.className} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${e.src}')` }} />
            <div className='carousel-content'>
              <Carousel.Caption className='carousel-title'>
                <h3>{e.title}</h3>
                {e.caption ? <p>{e.caption}</p> : ''}
                {e.link !== '' ?
                  <a style={{textDecoration: 'none'}} href={e.link} target='_blank' rel='noreferrer noopener'><button className='carousel-button'>{e.button}</button></a>
                  :
                  <button className='carousel-button'>{'Site indisponible pour le moment.'}</button>
                }
                {/* <Link to={`/${e.link}`}><button className='carousel-button'>{e.button}</button></Link> */}
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      }
      )}
    </Carousel>
  );
}

export default ControlledCarousel;