import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return() => setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">

        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a very passionate person when it comes to developement, coming
          from a self taught background, I'm certainly not lacking in
          motivation.
        </p>
        <p>
          Always being willing to learn and take advice from others are things
          that I consider to be some of my greatest strengths.
        </p>
        <p>
          If I had to describe myself personally, I love to explore and find new
          things to do in my free time. Sports have always been something that I
          gravitate towards, mostly ice hockey. And on top of that I'm very
          devoted to my family and my relationship.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faNodeJs} color='#215732' />
            </div>
        </div>
      </div>
    </div>
    <Loader type='ball-pulse' />
    </>
  )
}

export default About
