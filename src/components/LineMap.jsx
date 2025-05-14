import { motion } from "framer-motion";

const LineMap = ({ children }) => {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Bola central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div 
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <motion.div
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-8 h-8 shadow-[0_0_20px_5px] shadow-gray-800 bg-lime-500 dark:shadow-amber-700 dark:bg-[#D4AF37] rounded-full"
          />
        </motion.div>
      </div>

      {/* Contenido que se muestra después */}
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 65%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
      >
        {children}
      </motion.div>

      {/* Línea vertical hacia abajo */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-2 h-[7rem] sm:h-[8rem] md:h-[9rem] lg:h-[10rem] rounded-xl bg-lime-500 dark:shadow-amber-700 dark:bg-[#D4AF37]"
        />
      </motion.div>

      {/* sector derecho */}
      {/* Línea horizontal derecha */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
        className="absolute left-1/2 top-[calc(50%+7rem)] sm:top-[calc(50%+8rem)] md:top-[calc(50%+9rem)] lg:top-[calc(50%+10rem)] transform -translate-y-1/2"
      >
        <motion.div 
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem] h-2 rounded-xl bg-lime-500 dark:shadow-amber-700 dark:bg-[#D4AF37]" 
        />
      </motion.div>

      {/* Línea diagonal derecha-abajo */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 100% 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
        className="absolute top-[calc(50%+6.6rem)] sm:top-[calc(50%+7.6rem)] md:top-[calc(50%+8.6rem)] lg:top-[calc(50%+9.6rem)] left-[calc(50%+6.6rem)] sm:left-[calc(50%+7.6rem)] md:left-[calc(50%+8.6rem)] lg:left-[calc(50%+9.6rem)] w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-[13rem]"
      >
        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem] h-2  rounded-xl bg-lime-500 dark:shadow-amber-700 dark:bg-[#D4AF37] origin-left rotate-35"
        />
      </motion.div>

      {/* sector izquierdo */}
      {/* Línea horizontal izquierda */}
      <motion.div
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
        className="absolute left-[calc(50%-7rem)] sm:left-[calc(50%-8rem)] md:left-[calc(50%-9rem)] lg:left-[calc(50%-10rem)] top-[calc(50%+7rem)] sm:top-[calc(50%+8rem)] md:top-[calc(50%+9rem)] lg:top-[calc(50%+10rem)] transform -translate-y-1/2"
      >
        <motion.div 
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem] h-2 rounded-xl bg-lime-500 dark:shadow-amber-700 dark:bg-[#D4AF37]" 
        />
      </motion.div>

      {/* Línea diagonal izquierda-abajo */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 100%)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
        className="absolute top-[calc(50%+6.6rem)] sm:top-[calc(50%+7.6rem)] md:top-[calc(50%+8.6rem)] left-[calc(50%-15.6rem)] lg:top-[calc(50%+9.6rem)] sm:left-[calc(50%-15.6rem)] md:left-[calc(50%-17.6rem)] lg:left-[calc(50%-19.6rem)] w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-[13rem]"
      >
        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem] h-2  rounded-xl bg-lime-500 dark:shadow-amber-700 dark:bg-[#D4AF37] origin-right -rotate-35"
        />
      </motion.div>

      {/* Línea vertical final abajo */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
        className="absolute top-[calc(50%+7rem)] sm:top-[calc(50%+8rem)] md:top-[calc(50%+9rem)] lg:top-[calc(50%+10rem)] left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-2 h-[5rem] sm:h-[6rem] md:h-[7rem] lg:h-[8rem] rounded-xl bg-lime-500 dark:shadow-amber-700 dark:bg-[#D4AF37]" 
        />
      </motion.div>
    </div>
  );
};

export default LineMap;
