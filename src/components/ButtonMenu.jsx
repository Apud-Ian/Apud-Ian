import { motion } from "framer-motion";

const ButtonMenu = () => {
  return (
    <div className="flex gap-6 relative">

      {/* Botón Sobre mí */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-800 dark:text-gray-200"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
        >
          <a href="#sobre-mi">Sobre mí</a>
        </motion.div>
      </motion.div>

      {/* Botón Proyectos */}
      <motion.div
        className="absolute left-[75%] transform -translate-x-1/2 text-lg font-semibold text-gray-800 dark:text-gray-200"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
        >
          <a href="#proyectos">Proyectos</a>
        </motion.div>
      </motion.div>

      {/* Botón Habilidades */}
      <motion.div
        className="absolute  left-[25%] transform -translate-x-1/2 text-lg font-semibold text-gray-800 dark:text-gray-200"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
        >
          <a href="#habilidades">Habilidades</a>
        </motion.div>
      </motion.div>

    </div>
  );
}

export default ButtonMenu;
