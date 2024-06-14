import './About.css'
const About = ()=>{
    return (
      <section className="about bg-slate-100" >
        <div className="main">
          <img
            src="https://elordenmundial.com/wp-content/uploads/2021/03/mapa-politico-colombia.png"
            alt="colombia"
            className=""
          />
          <div className="about-text">
            <h1>About Us</h1>
            <h5>Developers <span> And Designers</span></h5>
            <p>
              En nuestra página dedicada a la educación sobre Colombia, nos
              apasiona brindar a nuestros usuarios una experiencia de
              aprendizaje enriquecedora y dinámica sobre los 32 departamentos
              que conforman este hermoso país. A través de recursos
              interactivos, datos actualizados, ofrecemos
              una visión integral de la diversidad cultural, geográfica e
              histórica de cada región. Nuestro objetivo es inspirar curiosidad
              y fomentar un conocimiento profundo y respetuoso de las múltiples
              facetas que hacen de Colombia una nación única y vibrante. Únete a
              nosotros en este viaje de descubrimiento y celebración de la
              riqueza colombiana.
            </p>
            <button className='btnHablemos' type='button'>Hablemos</button>
          </div>
        </div>
      </section>
    );
}

export default About