"use client";

import styles from "./landing.module.css";
import { motion, Variants } from "framer-motion";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  return (
    <>

      {/* Navbar sticky */}
      <motion.header
        className={styles.navbar}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.navbarLogo}>TravelCraft</div>
        <nav className={styles.navbarMenu}>
          <a href="#features" className={styles.navbarLink}>
            Características
          </a>
          <a href="#how-it-works" className={styles.navbarLink}>
            Cómo Funciona
          </a>
          <a href="#contact" className={styles.navbarLink}>
            Contáctanos
          </a>
        </nav>
      </motion.header>

      {/* Sección Hero Full-Screen con nueva paleta celeste */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={styles.heroTitle}>
              Vive una aventura
              <br />
              sin límites
            </h1>
            <p className={styles.heroSubtitle}>
              Transforma tu idea de viaje ideal en realidad con la IA de
              TravelCraft.
            </p>
            <motion.button
              className={styles.heroButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Empezar Ahora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sección de Características */}
      <section id="features" className={styles.featuresSection}>
        <motion.h2
          className={styles.sectionTitle}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Por qué somos diferentes
        </motion.h2>
        <div className={styles.featuresGrid}>
          <motion.div
            className={styles.featureCard}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>IA Intuitiva</h3>
            <p>
              Entendemos tu descripción en lenguaje natural y procesamos miles
              de ofertas en segundos.
            </p>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Búsqueda Global</h3>
            <p>
              Integramos los principales portales de viajes para garantizarte el
              mejor precio y disponibilidad.
            </p>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Atención Personalizada</h3>
            <p>
              Un equipo experto que te acompaña en cada paso para que tu viaje
              sea perfecto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección Cómo Funciona */}
      <section id="how-it-works" className={styles.howItWorksSection}>
        <motion.h2
          className={styles.sectionTitle}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          ¿Cómo Funciona TravelCraft?
        </motion.h2>
        <div className={styles.stepsContainer}>
          <motion.div
            className={styles.stepBlock}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.stepNumber}>1</span>
            <h3 className={styles.stepTitle}>Describe tu viaje</h3>
            <p>
              Indícanos todo lo que sueñas de tus próximas vacaciones: destino,
              fechas, presupuesto y actividades ideales.
            </p>
          </motion.div>

          <motion.div
            className={styles.stepBlock}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.stepNumber}>2</span>
            <h3 className={styles.stepTitle}>Procesamos tu solicitud</h3>
            <p>
              Nuestra IA busca y combina ofertas en tiempo real para ajustar
              resultados a tus preferencias.
            </p>
          </motion.div>

          <motion.div
            className={styles.stepBlock}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.stepNumber}>3</span>
            <h3 className={styles.stepTitle}>Recibe tu plan perfecto</h3>
            <p>
              Te mostraremos la mejor propuesta de vuelo + alojamiento +
              experiencias, lista para reservar en un solo clic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className={styles.contactSection}>
        <motion.h2
          className={styles.sectionTitle}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Contáctanos
        </motion.h2>
        <motion.div
          className={styles.contactContent}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            ¿Quieres saber más? Estamos listos para ayudarte a crear un viaje
            inolvidable.
          </p>
          <button className={styles.contactButton}>Escríbenos</button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} TravelCraft. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
}
