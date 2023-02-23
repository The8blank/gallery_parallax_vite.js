import React, { useRef, useState } from "react";
import "./home.scss";
import galleryData from "../../database/galleryData";
import Header from "../../components/header/Header";
import { motion, useMotionValue } from "framer-motion";

const Home = () => {
  const gridRef = useRef(null)
  const mapImg = galleryData;
  const [gridVisible, setGridVisible] = useState(false);

  const x = useMotionValue(0) 
  const y = useMotionValue(0) 

  const handleGridParallax = (e) => {
    if (gridRef.current)      {
      const speed = 10;
      const {width, height} = gridRef.current.getBoundingClientRect()
      const offsetX = e.pageX - width * 0.5;
      const offsetY = e.pageY - height * 0.5;

      const newTransformX = (offsetX * speed) / 100;
      const newTransformy = (offsetY * speed) / 100;

      x.set(newTransformX);
      y.set(newTransformy)
    }
  }

  return (
    <>
      <Header
        view={gridVisible}
        toggleView={(value) => setGridVisible(value)}
      />
      <div className="content">
        {gridVisible && (
          <motion.div 
          onMouseMove={handleGridParallax}
          ref={gridRef}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{
            x,
            y,
          }}
          
          className="grid-container">
            <div className="grid-elements">
              {mapImg.map((el,index) => {
                return (
                  <div className="element">
                    <div className="thumbnail-wrapper">
                      <motion.img
                        layoutId={`container-${index}`}
                        transition={{
                          duration: 0.5,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                        src={el}
                        className="grid-item-media"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
        {!gridVisible && (
          <div className="list-elements">
            {mapImg.map((el, index) => {
              return (
                <div className="element">
                  <div className="thumbnail-wrapper">
                    <motion.img
                      src={el}
                      className="grid-item-media"
                      layoutId={`container-${index}`}
                      transition={{
                        duration: 0.5,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
