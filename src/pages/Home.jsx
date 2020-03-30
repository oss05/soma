import React, { Fragment } from 'react';

// Components 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FlippingCard from '../components/FlippingCard/FlippingCard';
import PageVideo from '../components/PageVideo/PageVideo';
import HeroPath from '../components/HeroPath/HeroPath';
import CountUpNumber from '../components/CountUpNumber/CountUpNumber';
import SwiperFree from '../components/SwiperFree/SwiperFree';
import Footer from '../components/Footer/Footer';

// CSS 
import { makeStyles } from '@material-ui/core/styles';
import '../scss/Home.scss';

// Assets
import firstHome from '../assets/images/first-home.png';
import queHacemos from '../assets/images/que-hacemos.png';
import flippingImageMarketing from '../assets/images/flipping-marketing.png';
import flippingImageSistemas from '../assets/images/flipping-sistemas.png';
import flippingImageDesarrollo from '../assets/images/flipping-desarrollo.png';
import flippingImageDomotica from '../assets/images/flipping-domotica.png';
import flippingImageBackMarketing from '../assets/images/flipping-marketing-back.png';
import flippingImageBackSistemas from '../assets/images/flipping-sistemas-back.png';
import flippingImageBackDesarrollo from '../assets/images/flipping-desarrollo-back.png';
import flippingImageBackDomotica from '../assets/images/flipping-domitica-back.png';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        flexGrow: 1,
    },
}));

export default function Home() {

    const classes = useStyles();

    return (
        <Fragment>
            <section id="parallax1" className="parallax-slide">
                <PageVideo />
            </section>
            <section className="content1 content-slide">
                <HeroPath />
                <article className="first-home-info">
                    <div>
                        <div>
                            <h2> Aumente la productividad y recupere su tiempo.</h2>
                            <p>Adoptamos un enfoque adecuado para la selección de la  Plataforma, asegurando que las necesidades comerciales del cliente se atiendan como una prioridad.</p>
                            <Button variant="contained">
                                Quiero saber más
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img src={firstHome} alt="first banner home" />
                    </div>
                </article>
            </section>
            <section className="content1 content-container" style={{ paddingTop: "0" }}>
                <article>
                    <h3 className="section-title">QUÉ HACEMOS</h3>
                    <p>El equipo de <span className="bold-span">SOMA</span> está impulsado por la creencia de que el trabajo integral puede cambiar el mundo. Venimos de todos los ámbitos de la vida para crear un trabajo innovador con resultados probados. Con un sólido razonamiento detrás de nuestro conocimiento para cumplir con los objetivos comerciales y el desarrollo de las empresas.</p>
                    <p>Trabajamos juntos, intercambiamos ideas y aportamos nuestras propias perspectivas a la mezcla. Apreciando el valor de las nuevas perspectivas, siempre estamos abiertos a nuevos talentos.</p>
                </article>
                <article className="que-hacemos">
                    <img src={queHacemos} alt="Qué hacemos banner" />
                </article>
            </section>
            <section className="content1 content-slide">
                <article className="services">
                    <h3 className="section-title">Servicios Integrales</h3>
                    <div>
                        <p>Los clientes vienen a nosotros por un trabajo que ayuda a que sus negocios sean más exitosos, y por creatividad, estrategia y tecnologia de primer nivel que ayudan a sus organizaciones a superar sus objetivos.</p>
                    </div>
                </article>
                <article className="grid-bg">
                    <Container maxWidth="lg">
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6} style={{
                                display: "flex", 
                                justifyContent: "flex-end"
                            }}>
                                <FlippingCard
                                    flippingImage={flippingImageMarketing}
                                    flippingImageAlt="Marketing"
                                    flippingImageBack={flippingImageBackMarketing}
                                    flippingTitle="Marketing Digital"
                                    flippingDescription="Creemos que las marcas de hoy deben ser auténticas y accesibles para ser escuchadas. Combinamos esta comprensión con nuestro talento para las tendencias y tecnologías digitales"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FlippingCard
                                    flippingImage={flippingImageSistemas}
                                    flippingImageAlt="Sistemas"
                                    flippingImageBack={flippingImageBackSistemas}
                                    flippingTitle="Sistemas"
                                    flippingDescription="At vero eos et accusamus et iusto odio dignissimos us qui blanditiis praesentium voluptatum."
                                />
                            </Grid>
                            <Grid item xs={12} md={6} style={{
                                display: "flex", justifyContent: "flex-end"
                            }}>
                                <FlippingCard
                                    flippingImage={flippingImageDesarrollo}
                                    flippingImageAlt="Desarrollo"
                                    flippingImageBack={flippingImageBackDesarrollo}
                                    flippingTitle="Desarrollo"
                                    flippingDescription="At vero eos et accusamus et iusto odio dignissimos us qui blanditiis praesentium voluptatum."
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FlippingCard
                                    flippingImage={flippingImageDomotica}
                                    flippingImageAlt="Domotica"
                                    flippingImageBack={flippingImageBackDomotica}
                                    flippingTitle="Domotica"
                                    flippingDescription="At vero eos et accusamus et iusto odio dignissimos us qui blanditiis praesentium voluptatum."
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </article>
            </section>
            <section className="content1 content-container">
                <article>
                    <h3 className="section-title">No vendemos soluciones, <br /> producimos resultados eficientes</h3>
                </article>
                <article>
                    <Container maxWidth="lg">
                        <Grid container spacing={6} >
                            <Grid item xs={12} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={100}
                                    suffix="%"
                                    description="Eficiencia" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={200}
                                    suffix=""
                                    description="Proyectos Terminados" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={"4000"}
                                    suffix=""
                                    description="Horas Trabajadas" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={300}
                                    suffix="+"
                                    description="Soluciones de Problemas" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={873}
                                    suffix="M+"
                                    description="Ideas por Desarrollar" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={21}
                                    suffix=""
                                    description="Clientes Satisfechos" />
                            </Grid>
                        </Grid>
                    </Container>
                </article>
            </section>
            
            <section className="content1 content-container" style={{ flexDirection: "column", alignItems: "flex-start", paddingTop: "4em" }}>
                <article style={{ width: "80%" }}>
                    <h2>Estos clientes ya confían en nosotros</h2>
                </article>
                <SwiperFree
                    brandSlideImg="https://www.interbrand.com/assets/00000001487.png"
                    brandSlideImg2="https://brandkeys.com/wp-content/uploads/2014/06/samsung-logo.png"
                    brandSlideImg3="https://www.interbrand.com/assets/00000001517.png"
                    brandSlideImg4="https://images.squarespace-cdn.com/content/v1/5d02951d120c3b0001c573c1/1561067904319-21LMNAQ9VZOXRBJIAJPB/ke17ZwdGBToddI8pDm48kPAoaCa1goapBA1fxrFU3x8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKck2ldBMpRnxbloYNX01nJdWCQJuHvxHO6vI534GjiB4Im1yljFzSV811QQmM93tTl/Forbes-Black-Logo-PNG-e1526884925861.png"
                    brandSlideImg5="https://www.pcninja.us/wp-content/uploads/2016/11/Lenovo.png"
                    brandSlideImg6="https://media.elcompanies.com/images/e/estee-lauder-companies/universal/our-brands/aerin-beauty/logos/aerin.png"
                    brandSlideImgAlt="brand image"
                />
            </section>
            <section className="content1 form-container">
                <article>
                    <h2>Nos encantaría saber de usted</h2>
                    <p>¿Buscas buenas soluciones en tu negocio? Deberíamos tener una conversación.</p>
                    <form action="" className="home-form">
                        <div>
                            <label htmlFor=""> Nombre *
                                <input type="text" />
                            </label>
                            <label htmlFor=""> Email Address *
                                <input type="text" />
                            </label>
                        </div>
                        <label htmlFor=""> Message *
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </label>
                    </form>
                </article>
                <article>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.4907195032093!2d-99.26643918320708!3d19.37018624319039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3e95c50293%3A0x64b3e7eef37ad709!2sMTExperts!5e0!3m2!1ses!2sit!4v1581959600460!5m2!1ses!2sit" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
                </article>
            </section>
            <section className="content1"style={{paddingTop:"2em"}}>
                <Footer/>
            </section>
        </Fragment>
    )
}
