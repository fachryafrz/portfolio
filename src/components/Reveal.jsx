/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";

export default function Reveal({ children, once = true }) {
  return (
    <m.div
      initial={{ opacity: 0, y: "20px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
      viewport={{ once: once }}
    >
      <div>{children}</div>
    </m.div>
  );
}
