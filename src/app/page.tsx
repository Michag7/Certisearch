'use client'

import Seeaker from "../components/seeker";
import bg from '../assets/background.svg'
import landing from '../assets/LandingImage.svg'
import Image from "next/image";
import { CheckIcon } from "../assets/icons";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  return (

    <main className=" flex flex-col items-center justify-center w-full h-full" >

      <section className="item flex flex-col items-center w-full h-screen bg-center bg-cover border-b-0 shadow-md" style={{ backgroundImage: `url(${bg.src})` }}>
        <article className="h-1/4 flex items-center justify-center w-full">
          <p className="md:text-2xl lg:text-2xl md:w-2/3 lg:w-1/3 w-full text-lg text-center text-white"><strong>Potencia tu Carrera con Certificaciones Tecnológicas en CertiSearch</strong></p>
        </article>
        <article className="h-3/4 md:mt-10 lg:mt-10 flex flex-col items-center w-4/6 py-20">
          <Seeaker />
          <h1 className="md:text-lg lg:text-lg md:mt-10 lg:mt-10 mt-4 text-sm text-center text-white">Explora y encuentra el certificado que deseas</h1>
        </article>
      </section>

      <section className="w-full py-14 border-b-0 shadow-sm">
        <article className=" flex justify-center w-full">
          <h2 className="md:block lg:block hidden w-2/4 text-2xl font-bold text-center">Si buscar certificarte en alguna tecnologia ¡CertiSearch es tu mejor aliado!</h2>
        </article>
        <article className="md:mt-20 lg:mt-20 flex w-full mt-10">
          <div className="md:flex lg:flex justify-center hidden w-2/5">
            <Image className="" src={landing} alt='logo' width={400} height={200} />
          </div>
          <div className="md:w-3/5 lg:w-3/5 w-full px-4">
            <h2 className="w-full text-2xl font-bold text-center">Descubre y Compara Certificaciones Tecnológicas</h2>
            <p className="w-full mt-1 text-lg text-center">Encuentra certificaciones que se adapten a tus metas profesionales y compara opciones fácilmente.</p>
            <ul className="mt-10 space-y-4">
              <li className="md:items-center lg:items-center flex"><CheckIcon size={20} className={"mr-1 text-seagull-500"} /><p><strong>Opiniones y Experiencias.</strong> Lee y comparte experiencias reales de otros usuarios.</p></li>
              <li className="md:items-center lg:items-center flex"><CheckIcon size={20} className={"mr-1 text-seagull-500"} /><p><strong> Foro Educativo.</strong> Conéctate con la comunidad, comparte recursos y obtén consejos valiosos.</p></li>
              <li className="md:items-center lg:items-center flex"><CheckIcon size={20} className={"mr-1 text-seagull-500"} /><p><strong> Alertas de Oportunidades.</strong> Recibe notificaciones sobre ofertas y certificaciones gratuitas.</p></li>
            </ul>
            <button className="bg-seagull-500 md:w-fit lg:w-fit w-full px-6 py-3 mt-10 font-semibold text-white rounded-full">Registrate gratis</button>
          </div>
        </article>
      </section>
 
      <section className="w-full py-14 lg:px-20 flex flex-col px-4 border-b-0 shadow-sm">
        <h2 className="w-full text-2xl font-bold text-center">Publica tus ofertas de certificaciones</h2>

        <div className="w-full lg:grid lg:grid-cols-3 lg:gap-x-20 md:grid md:grid-cols-3 md:gap-x-20 mt-10 md:mt-20 lg:mt-20">

          <article className="flex  justify-center w-full lg:space-x-2">
            <div className="h-full m-auto flex justify-center items-center w-1/5">
              <svg xmlns="http://www.w3.org/2000/svg" color="#ec6984" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M11 14H6L9.5 2H16l-3 8h5l-8 12z" /></svg>
            </div>
            <div className="w-4/5">
              <h3 className="font-semibold text-lg">Publica tu certificación</h3>
              <p>Crea fácilmente tu oferta de certificación y publícala en un click.</p>
            </div>
          </article>

          <article className="flex  justify-center w-full lg:space-x-2 mt-5 lg:mt-0">
            <div className="h-full m-auto flex justify-center items-center w-1/5">
              <svg xmlns="http://www.w3.org/2000/svg" color="#59baa8" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" /><path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6Z" /></g></svg>
            </div>
            <div className="w-4/5">
              <h3 className="font-semibold text-lg">Revisa y compara las ofertas</h3>
              <p>Selecciona las mejores ofertas que se adecuen a tus requisitos.</p>
            </div>
          </article>

          <article className="flex justify-center w-full lg:space-x-2 mt-5 lg:mt-0">
            <div className="h-full m-auto flex justify-center items-center w-1/5">
              <svg xmlns="http://www.w3.org/2000/svg" color="#fcc63b" width="50" height="50" viewBox="0 0 16 16"><path fill="currentColor" d="M7.194 2.102a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.494a.9.9 0 0 1 .5 1.535l-2.462 2.4l.581 3.387a.9.9 0 0 1-1.306.948L8.001 12.35l-3.042 1.6A.9.9 0 0 1 3.653 13l.581-3.387l-2.461-2.399a.9.9 0 0 1 .499-1.535l3.4-.494zM8 2.726L6.546 5.673a.9.9 0 0 1-.677.493l-3.253.472L4.97 8.933a.9.9 0 0 1 .258.796l-.555 3.24l2.91-1.53a.9.9 0 0 1 .837 0l2.91 1.53l-.556-3.24a.9.9 0 0 1 .258-.796l2.354-2.295l-3.253-.472a.9.9 0 0 1-.677-.493zM.1 2.2a.5.5 0 0 1 .7-.1l2 1.5a.5.5 0 0 1-.6.8l-2-1.5a.5.5 0 0 1-.1-.7m15.1-.1a.5.5 0 0 1 .6.8l-2 1.5a.5.5 0 0 1-.6-.8zM.1 12.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 0 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7m15.1.1a.5.5 0 0 0 .6-.8l-2-1.5a.5.5 0 0 0-.6.8z" /></svg>
            </div>
            <div className="w-4/5">
              <h3 className="font-semibold text-lg">Certificate</h3>
              <p>Encuentra esa certificación que tanto estabas buscando.</p>
            </div>
          </article>

        </div>


        <button className="bg-seagull-500 md:w-fit lg:w-fit w-full px-6 py-3 mt-14 font-semibold text-white rounded-full m-auto">Publica gratis tus ofertas</button>


      </section>



    </main>


  )
}
