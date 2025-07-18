// src/components/Navbar.jsx
import React, { useState } from 'react'
import './Navbar.css'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = ['Home', 'About', 'Tech', 'Non Tech', 'Pomodoro']

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
}

const Navbar = () => {
  const [hovering, setHovering] = useState(false)

  return (
    <nav
      className={`side-navbar ${hovering ? 'expanded' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <ul>
        <AnimatePresence>
          {menuItems.map((item, i) => (
            <motion.li
              key={item}
              className="menu-item"
              custom={i}
              initial="hidden"
              animate={hovering ? 'visible' : 'hidden'}
              exit="hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </nav>
  )
}

export default Navbar
