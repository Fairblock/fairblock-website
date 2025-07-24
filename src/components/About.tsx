import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedCallout = () => {
  const phrases = [
    "Explore cApps",
    "Confidential Stablecoins",
    "Protected Trading",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((index + 1) % phrases.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
