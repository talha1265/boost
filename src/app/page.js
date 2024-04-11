"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Section from "@/components/Section";

import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default function Home() {
  return (
   <>
      
      <Section/>
      
   </>
  );
}
