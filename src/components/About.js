import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Atul Verma. Proficient in Java Developer and Frontend Web Developer. With expertise in Java and frameworks like Spring',
        line2: 'As a frontend developer, I leverage my skills in HTML, CSS, and JavaScript to craft interactive, visually appealing, and responsive web interfaces.',
        line3: 'In backend Proficient in Java, Spring Framework, JDBC, and RESTful APIs. Experienced in database management with MySQL and implementing backend integration.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}