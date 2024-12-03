import HeroImg from '../assets/hero.jpg';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'I\'m  looking for opportunities in Java developer And Frontent-web Developer to contribute and grow in IT Industry.',
        social: {
            github: 'https://github.com/Atulverma236  ',
            linkedin: 'https://www.linkedin.com/in/atul-verma-70550722a/',
            instagram: 'https://facebook.com/jvlcode',
           
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'm <span className='text-black'>Atul Verma</span>  
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.instagram} className='hover:text-white'><AiOutlineInstagram size={40}/></a>
                
            </div>
       </div>
       <img className="md:w-1/4 w-30 h-70 rounded-full object-cover" src={HeroImg} alt="Circular Image" />

    </section>
}