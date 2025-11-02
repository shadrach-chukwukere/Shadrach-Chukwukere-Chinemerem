import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import me from '../assets/me.png';

export default function Projects() {
  const projectImages = [me, me, me]; // replace with real project screenshots

  return (
    <motion.section
      id="projects"
      className="pt-5 pb-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-100 text-center h2 text-white pt-4 pb-4"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.div>

      <div className="row m-0 justify-content-around pt-4 pb-4">
        {projectImages.map((img, i) => (
          <motion.div
            key={i}
            className="col-lg-3 col-md-4 mb-md-0 mb-4 col-6 fit"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="project-card position-relative overflow-hidden rounded-3">
              <LazyLoadImage
                effect="blur"
                width="100%"
                height="100%"
                className="rounded-3"
                src={img}
                alt={`Project ${i + 1}`}
              />
              {/* Optional hover effect or title */}
              {/* <div className="overlay">Project {i + 1}</div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
