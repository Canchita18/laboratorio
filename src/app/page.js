import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header"className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Jenny rivera</span>
          </h1>
        </div>
      </header>
      <section id="info" className={styles.infoSection}>
        <img 
          src="\imagen-paea-website.png"
          alt="imagen"
          className={styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}> jenny </span>
          <br />
          <span className={styles.title}>rivera</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>age:</span>27
              </li>
              <li>
                <span classname={styles.grayText}>Mationality: </span> German
              </li>    
              <li>
                <span className={styles.grayText}>Skillset: </span> projectManagement and financial performance
              </li>
              <li>
                <span className={styles.grayText}>languages:</span> english, German
              </li>
            </ul>    
          </div>
        </div>
      </section>
    </main>
  )
}
