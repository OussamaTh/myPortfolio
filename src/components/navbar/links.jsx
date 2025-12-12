import React from 'react'
import { navLinks } from '../../websiteContent'
import { motion } from 'framer-motion'


export default function Links() {
  return (
    <>
        <motion.div
                className="links"
        >
                {navLinks.map((link,index) => {
                    return(
                        <motion.a href="">{link.linkName}</motion.a>
                    )
                })}
        </motion.div>
    </>
  )
}
