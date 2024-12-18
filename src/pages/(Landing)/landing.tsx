import './landing.css'
import Image from 'next/image';


export default function Landing() {


    return (
      
      <>

        <div className='fondo'>

          <Image
          src="/images/1.jpg"
          alt="Fondo optimizado"
          fill
          quality={100} // Ajusta la calidad
          priority
          className='imagen'
          />

          <div className='grid-overlay'></div>    
      
        </div>

        <div className='basico'>

        </div>

      </>
    
    );
  
  }