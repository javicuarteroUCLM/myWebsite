import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motions';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>
        </div>
      </motion.div> 
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-6'
>
  { }
  <p>
    I am a 4th-year Computer Engineering student, specializing in Information Technology.
  </p>

  { }
  <p>
    I enjoy finding solutions to the challenges companies face in their processes, such as automation
    and efficiency improvement. I am also passionate about helping organizations make the most of their data to gain a competitive edge in the market.
  </p>
  { }

  <p>
    Additionally, I am passionate about finance and I&apos;m continuously learning about it on my own. 
    I aim to combine my technical engineering knowledge with financial insights to create a unique skill 
    set that adds value across both fields.
  </p>

  { }
  <p>
    Challenges, both professional and personal, are essential to me. Since I was young, I have been deeply involved in sports, something that cannot be missing in my life. Over the years, I have practiced many sports, which have taught me resilience, discipline, and the importance of continuous improvement.
  </p>
</motion.div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
            {index} {...service}/>
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about");