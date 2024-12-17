"use client"

import './navbar.css'
import { motion, AnimatePresence, useScroll} from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    useEffect(() => {

        (isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '')

    }, [isOpen]);

    return (
      
        <>

            <AnimatePresence>            

                <div className='navbar'>

                    <div><button onClick={() => setIsOpen(true)}>☰</button></div>

                    <div>testt</div>

                </div>

                {isOpen && (

                    <motion.div

                    key="overlay"
                    
                    initial={{

                        opacity:0

                    }}

                    animate={{

                        opacity:1

                    }}

                    exit={{

                        opacity:0

                    }}

                    transition={{

                        duration:0.6,
                        ease:"easeInOut"

                    }}
                    
                    className='auxiliar' onClick={() => setIsOpen(false)}>

                        <motion.div
                        
                        initial={{

                            x:0

                        }}

                        animate={{

                            x:300

                        }}

                        transition={{

                            duration:1.4,
                            ease:"easeInOut"

                        }}

                        exit={{

                            x:-300

                        }}
                        
                        className='sidebar'

                        ></motion.div>

                    </motion.div>
                    
                )}

            </AnimatePresence>

        </>
    
    );
  
  }
  