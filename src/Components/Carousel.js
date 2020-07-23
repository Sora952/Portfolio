import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../Styles/Carousel.css'

function ControlledCarousel () {
  const [index, setIndex] = useState(0);
  const [carouselItems] = useState([
    {
      className: 'background-container d-block w-100',
      src: 'https://fox8.com/wp-content/uploads/sites/12/2020/06/8-day-1.jpg',
      alt: 'Second slide',
      title: 'Mon premier projet',
      caption: 'A remplir',
      button: 'voir mon premier projet',
      link: 'project'
    },
    {
      className: 'background-container d-block w-100',
      src: 'https://www.healthymood.fr/wp-content/uploads/nom7-2.jpg',
      alt: 'Third slide',
      title: 'Mon deuxième projet !',
      caption: 'Texte',
      button: 'Voir mon deuxième projet',
      link: 'project'
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
                <Link to={`/${e.link}`}><button className='carousel-button'>{e.button}</button></Link>
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