'use client'
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/experience";

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas className={styles.canvas} camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3]}}>
        <Experience/>
      </Canvas>
    </main>
  );
}
