import './index.scss';
import plogo from '../../../assets/images/plogo.png'


const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={plogo} alt='P' />
            
        </div>
    )
}

export default Logo;