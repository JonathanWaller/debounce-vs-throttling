// Components are server-based by default, so make it a client component 
// to not get an error message.
"use client"

import { throttle } from "lodash"
import styles from '../page.module.css';

const Throttle = () => {
  // Ensures that the callback function will at most be called once every second
  const throttledChangeInput = throttle(() => {
    console.log("[DEBUG] Input Changed!")
  }, 2000)


  return (
    <div className={styles.layout}>
    <h2>Throttling</h2>
    <input onChange={throttledChangeInput} />
    </div>
  )
}

export default Throttle;