import websiteImg1 from '../assets/filehider.png';
import websiteImg2 from '../assets/sorting.jpg';
import websiteImg3 from '../assets/whatsapp.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'File Hider Project, a secure file encryption and hiding system developed in Java',
                link: 'https://atulverma236.github.io/FileHider/'
            },
            {
                image: websiteImg2,
                description: 'Sorting Algorithm Visualization Project , Built with HTML, CSS, JavaScript',
                link: 'https://atulverma236.github.io/Sorting_Algorithm/'
            },
            {
                image: websiteImg3,
                description: 'WhatsApp Chat Application .In this application uses a client-server model. Built with : Java swing, Socket programming',
                link: 'https://atulverma236.github.io/WhatsAppChatt-Application/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with Java, swing, HTML, CSS, JavaScript. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}