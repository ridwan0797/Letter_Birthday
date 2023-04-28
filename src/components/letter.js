
import React, { useEffect } from "react";
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion"


export default function Letter() {
   useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div style={{ backgroundColor: '#eae3e3' }} className='h-full w-full'>
      <div className="p-4 w-full h-full">
        <motion.div
          data-aos="fade-up" 
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-2xl font-medium font-import text-justify"
        >
          Dear Erly Aini Abe ,
        </motion.div>

        <motion.div
          data-aos="fade-up" 
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="mt-5 text-2xl font-medium font-import text-justify"
        >
          Happy birthday!
        </motion.div>

        <motion.div
          data-aos="fade-up" 
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="mt-5 text-2xl font-medium font-import text-justify"
        >
          I compose this message to let you know that you are the most incomparable girlfriend in the world. Dear, you are my princess. You give me that kind of love that goes far and deep into the most sentimental things in my life.
        </motion.div>

        <motion.div
          data-aos="fade-up" 
          data-aos-delay="2000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="mt-5 text-2xl font-medium font-import text-justify"
        >
          With that, I would like to start composing this message by appreciating you for your meaning in my life. You are the most caring girlfriend in the world. No one in this world could ever compare to you, my dear girlfriend.
        </motion.div>
      </div>
    </div>
  );
}