import React from 'react';
import '../Styles/Home.css';
import '../Styles/InfluxScreen.css';

const AgileoScreen = () => {
    
    return (
      <div>
        <section>
        
        <div style={{backgroundColor: "#DDDDDD", fontSize: "22px", padding: "20px", width: "80%", margin: "auto", marginTop: "30px", marginBottom: "30px"}}>
          Ici, c'est la section image du projet Influx Agency sur lequelle j'ai travailler en binôme avec un collègue pour créer une application destinée
          à géré facilement son compte instagram. L'application n'étant pas finie ni déployée en public, je met donc des screen à défaut d'avoir une démo en live.
          (Le site n'étant pas fini à l'heure ou j'ai pris les screens, le CSS et certaines fonctions ne sont encore pas tout à fait correcte.)
          </div>

          <div className="info-influx">
          <span>Le dashboard:</span>
          <img src={require('../assets/InfluxDashboard.png')} alt="InfluxDashboard" title="InfluxDashboard" />
          </div>
          <div className="info-influx">
          <span>La page de gestion des likes:</span>
          <img src={require('../assets/InfluxLikes.png')} alt="InfluxLikes" title="InfluxLikes" />
          </div>
          <div className="info-influx">
          <span>Celle de gestion des followers:</span>
          <img src={require('../assets/InfluxFollows.png')} alt="InfluxFollows" title="InfluxFollows" />
          </div>
          <div className="info-influx" style={{marginBottom: "50px"}}>
          <span>La queue (appelle d'une API):</span>
          <img src={require('../assets/InfluxQueue.png')} alt="InfluxQueue" title="InfluxQueue" />
          </div>
        </section>
      </div>
    )
}

export default AgileoScreen;
