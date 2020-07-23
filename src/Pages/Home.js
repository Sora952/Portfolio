import React from 'react';
import Carousel from '../Components/Carousel';
const Home = () => {
    return (
      <div>
        <div>
          <h1>Mon nom</h1>
          <h3>Mon intro</h3>
        </div>
        <Carousel />
        <div>
          <p style={{overflowWrap: "break-word"}}>pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp<br />
              ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
        </div>
      </div>
    )
}

export default Home;
