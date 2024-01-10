import React , { useEffect }from 'react';
import cert from '../static/aws-certified-cloud-practitioner.png';
import '../Styles/certifications.css';
import { motion } from 'framer-motion';
import CertificationsTitle from '../layouts/CertificationsTitle';

function Certifications() {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 } };
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 1 } };

   

    return (
        
    <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>

          <CertificationsTitle/>

          <div className="certification-container">
              {/* <div className='certification-contentB'>
                  <h1>Certifications</h1>
              </div> */}
            {/* Content */}
            <div className='certification-content1'>
              <div className="certification-content2">
                
                <p>
                <br></br>
                    
                <img src={cert} alt="Certification" className="cert-image" />

                </p>
              </div>
            </div>
          </div>
    </motion.div>
    
  );
}

export default Certifications;


/*
useEffect(() => {
  // Disable scrolling when the Menu component mounts
  disableScroll();
  // Enable scrolling when the component unmounts
  return () => {
    document.body.style.overflow = ''; // Restore default scrolling
  };
}, []);

function disableScroll() {
  document.body.style.overflow = 'hidden';
}
*/