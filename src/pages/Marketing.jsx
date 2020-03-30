import React, { Fragment } from 'react';

// Components 
import Example from '../components/Particles/Particles';
import Parallax from '../components/Parallax/Parallax';
import Gallery from "react-grid-gallery";
import Footer from '../components/Footer/Footer';

// SCSS
import '../scss/Marketing.scss';

// Assets 
import RedesSociales from '../assets/images/marketing-social-media.png';
import MediosOnline from '../assets/images/marketing-medios-online.png';
import DiseñoProfesional from '../assets/images/marketing-diseño-web.png';
import ImagenEmpresa from '../assets/images/marketing-imagen-empresa.png';

const IMAGES = [
    {
        src: "https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg",
        thumbnail:
            "https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg",
        thumbnailWidth: 2000,
        thumbnailHeight: 700,
        caption: "Proyecto Asombroso."
    },
    {
        src: "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
        thumbnailWidth: 398,
        thumbnailHeight: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" }
        ],
        caption: "Proyecto Suculento."
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
            "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 230,
        thumbnailHeight: 212
    },
    {
        src: "https://i.blogs.es/fe518d/ojos/450_1000.jpg",
        thumbnail:
            "https://i.blogs.es/fe518d/ojos/450_1000.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 174,
        caption: "Proyecto Prron."
    },
    {
        src: "https://abduzeedo.com/sites/default/files/styles/home_cover/public/originals/abdz_infrared_arashiyama_mockup_0.jpg?itok=9lsBMY9U",
        thumbnail:
            "https://abduzeedo.com/sites/default/files/styles/home_cover/public/originals/abdz_infrared_arashiyama_mockup_0.jpg?itok=9lsBMY9U",
        thumbnailWidth: 690,
        thumbnailHeight: 212,
        tags: [
            { value: "IMA", title: "IMA" },
            { value: "Arbitraje", title: "Arbitraje" }
        ],
        caption: "Proyecto chido cool."
    },
    {
        src: "https://images8.alphacoders.com/102/1026968.jpg",
        thumbnail:
            "https://images8.alphacoders.com/102/1026968.jpg",
        thumbnailWidth: 520,
        thumbnailHeight: 212
    },
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
            "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 260,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://wallpaperplay.com/walls/full/9/f/c/34779.jpg",
        thumbnail:
            "https://wallpaperplay.com/walls/full/9/f/c/34779.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://store-images.s-microsoft.com/image/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.176d9e9a-fb7a-473e-90f6-26c2993854f4?mode=scale&q=90&h=1080&w=1920",
        thumbnail:
            "https://store-images.s-microsoft.com/image/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.176d9e9a-fb7a-473e-90f6-26c2993854f4?mode=scale&q=90&h=1080&w=1920",
        thumbnailWidth: 399,
        thumbnailHeight: 212
    },
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
            "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 500,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
            "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/",
        thumbnail:
            "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/",
        thumbnailWidth: 720,
        thumbnailHeight: 212
    }
];

export default function Marketing() {
    return (
        <Fragment>
            <Parallax />
            <Example />
            <section style={{ height: "660px" }}>
                <h2 style={{fontSize: "4em", fontWeight: "bold"}} className="text-center my-4">Nuestros Proyectos</h2>
                <Gallery
                    images={IMAGES}
                    enableLightbox={true}
                    // maxRows={3}
                    backdropClosesModal
                // currentImage={3}
                // isOpen={ true}
                />
            </section>
            <main className="marketing-main mb-4">
                <section>
                    <article className="section-container redes-sociales">
                        <div className="pl-5">
                            <h3><span className="blue-bold">Redes</span> Sociales</h3>
                            <p>Campañas patrocinadas en redes sociales y administración de perfiles.</p>
                        Incrementa tus seguidores, consultas y ventas.
                    </div>
                        <div>
                            <img src={RedesSociales} alt="Redes Sociales" />
                        </div>
                    </article>
                    <article className="medios-online section-container">
                        <div>
                            <img src={MediosOnline} alt="Redes Sociales" />
                        </div>
                        <div className="px-5">
                            <h3>Medios<span className="blue-bold"> Online</span></h3>
                            <p>Te ofrecemos la solución que represente el mejor costo beneficio para tu negocio.  Por ello, desarrollamos cada solución con base a las necesidades de nuestros clientes.</p>
                        </div>
                    </article>
                </section>
                <p className="px-5 mt-5 imprescindible">
                    Hoy resulta imprescindible que las empresas tengan una identidad corporativa, con el fin de tener una imagen atractiva, atrayente, memorable y acorde al estilo de la empresa.Es en ese momento cuando debemos posicionar nuestra marca, darla a conocer a los usuarios y que conozcan desde el primer momento qué ofrece, cuáles son sus valores y si son acordes o no a sus necesidades como usuario.
                </p>
                <section>
                    <article className="section-container  special-section-container marketing-directo mb-5">
                        <div className="pl-5">
                            <h3><span className="blue-bold">Marketing</span> Directo</h3>
                            <p> Diseñamos y maquetamos newsletters para enviar a bases de clientes  actuales y potenciales.</p>
                            <p>hacemos las conexiones directas con consumidores individuales seleccionados cuidadosamente, a fin de obtener una respuesta inmediata y de cultivar relaciones duraderas con los clientes</p>
                        </div>
                        <div>
                            <svg className="svg-path" height="464pt" viewBox="-16 0 464 464.02092" width="464pt" xmlns="http://www.w3.org/2000/svg"><path className="third-path" d="m160.011719 376h112v8h-112zm0 0" /><path className="third-path" d="m269.164062 424h-106.816406c.816406 2.742188 1.84375 5.417969 3.078125 8h100.585938c1.242187-2.585938 2.292969-5.261719 3.152343-8zm0 0" /><path className="third-path" d="m219.730469 463.878906c13.144531-.902344 25.515625-6.542968 34.816406-15.878906h-77.671875c.289062.28125.535156.585938.800781.855469 11.292969 10.679687 26.550781 16.132812 42.054688 15.023437zm0 0" /><path className="third-path" d="m272.011719 400h-112v8h111.894531c.03125-.726562.105469-8 .105469-8zm0 0" /><path className="first-path" d="m272.011719 353.910156c.074219-17.5625 8.332031-34.085937 22.335937-44.6875 41.125-31.804687 58.929688-85.332031 45.042969-135.433594-13.886719-50.105468-56.699219-86.832031-108.332031-92.933593-5.046875-.570313-10.121094-.859375-15.199219-.863281-31.40625-.101563-61.726563 11.476562-85.066406 32.488281-28.359375 25.300781-44.007813 61.898437-42.710938 99.878906 1.296875 37.984375 19.40625 73.429687 49.425781 96.738281 14.066407 10.632813 22.382813 27.207032 22.503907 44.839844v6.0625h112zm-43.65625-241.207031c-.304688 0-.609375-.015625-.914063-.046875-3.792968-.4375-7.609375-.65625-11.429687-.65625-4.417969 0-8-3.582031-8-8s3.582031-8 8-8c4.421875.015625 8.84375.285156 13.238281.800781 4.195312.496094 7.28125 4.171875 7.042969 8.390625-.234375 4.21875-3.714844 7.527344-7.9375 7.550782zm20.046875-3.933594c1.695312-4.082031 6.375-6.015625 10.457031-4.320312 37.230469 15.359375 63.320313 49.554687 68.304687 89.519531.523438 4.386719-2.605468 8.371094-6.992187 8.894531-4.390625.527344-8.371094-2.605469-8.898437-6.992187-4.277344-34.238282-26.644532-63.53125-58.550782-76.671875-4.050781-1.695313-5.976562-6.335938-4.320312-10.398438zm0 0" /><path className="second-path" d="m216.011719 48c4.417969 0 8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8zm0 0" /><path className="second-path" d="m121.082031 67.574219c1.417969 2.496093 4.066407 4.042969 6.9375 4.046875 2.871094.007812 5.523438-1.523438 6.953125-4.015625 1.429688-2.488281 1.417969-5.554688-.035156-8.03125l-16-27.710938c-2.222656-3.792969-7.09375-5.082031-10.902344-2.882812-3.804687 2.199219-5.125 7.0625-2.953125 10.882812zm0 0" /><path className="second-path" d="m67.585938 121.070312-27.710938-16c-3.824219-2.171874-8.683594-.851562-10.882812 2.957032-2.199219 3.808594-.910157 8.675781 2.882812 10.902344l27.710938 16c3.824218 2.171874 8.683593.851562 10.882812-2.957032s.910156-8.675781-2.882812-10.902344zm0 0" /><path className="second-path" d="m48.011719 216c0-4.417969-3.582031-8-8-8h-32c-4.417969 0-8.0000002 3.582031-8.0000002 8s3.5820312 8 8.0000002 8h32c4.417969 0 8-3.582031 8-8zm0 0" /><path className="second-path" d="m59.585938 297.070312-27.710938 16c-2.496094 1.421876-4.039062 4.066407-4.046875 6.9375-.007813 2.871094 1.527344 5.527344 4.015625 6.957032 2.488281 1.429687 5.554688 1.414062 8.03125-.035156l27.710938-16c2.496093-1.421876 4.039062-4.066407 4.046874-6.9375.007813-2.871094-1.527343-5.527344-4.015624-6.957032-2.488282-1.429687-5.554688-1.414062-8.03125.035156zm0 0" /><path className="second-path" d="m400.144531 313.070312-27.710937-16c-2.476563-1.449218-5.539063-1.464843-8.03125-.035156-2.488282 1.429688-4.019532 4.085938-4.015625 6.957032.007812 2.871093 1.550781 5.515624 4.046875 6.9375l27.710937 16c3.824219 2.171874 8.683594.851562 10.882813-2.957032 2.199218-3.808594.914062-8.675781-2.882813-10.902344zm0 0" /><path className="second-path" d="m424.011719 208h-32c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h32c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0" /><path className="second-path" d="m368.441406 136c1.40625 0 2.785156-.371094 4-1.070312l27.714844-16c3.792969-2.226563 5.078125-7.09375 2.878906-10.902344-2.199218-3.808594-7.058594-5.128906-10.878906-2.957032l-27.714844 16c-3.132812 1.8125-4.664062 5.503907-3.726562 9 .9375 3.496094 4.105468 5.929688 7.726562 5.929688zm0 0" /><path className="second-path" d="m300.011719 70.503906c3.824219 2.210938 8.71875.898438 10.925781-2.929687l16-27.710938c2.175781-3.820312.855469-8.683593-2.953125-10.882812s-8.679687-.910157-10.902344 2.882812l-16 27.710938c-2.207031 3.828125-.898437 8.71875 2.929688 10.929687zm0 0" /></svg>
                            <p className="text-center mt-3" style={{ fontWeight: "bold" }}>¡Enciéndeme!</p>
                        </div>
                    </article>
                    <article className="section-container disenios-corporativos">
                        <div>
                            <img src={DiseñoProfesional} alt="Redes Sociales" />
                        </div>
                        <div className="px-5">
                            <h3>Diseño profesional de <span className="blue-bold">sitios web corporativos</span></h3>
                            <p>Somos especialistas en el desarrollo de sitios web de vanguardia, basados en estándares internacionales y competitivos a nivel global. Ofrecemos tecnología como los CMS (Content Management Systems) React (Una biblioteca de JavaScript para construir interfaces de usuario), sistemas de gestión de contenidos, que permiten nuestros clientes la administración y gestión autónomas de sus propios sitios.</p>
                        </div>
                    </article>
                    <article className="section-container pagina-web">
                        <div className="px-5">
                            <h3>La página web es la <span className="blue-bold">imagen de tu empresa</span>, es tu tarjeta de presentación</h3>
                            <p> Diseñamos y maquetamos newsletters para enviar a bases de clientes  actuales y potenciales.</p>
                            <p>hacemos las conexiones directas con consumidores individuales seleccionados cuidadosamente, a fin de obtener una respuesta inmediata y de cultivar relaciones duraderas con los clientes.</p>
                        </div>
                        <div>
                            <img src={ImagenEmpresa} alt="Redes Sociales" />
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}
