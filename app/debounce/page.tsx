// Components are server-based by default, so make it a client component 
// to not get an error message.
"use client"

import { debounce } from "lodash"
import styles from '../page.module.css';

const Timer = () => {
  // Ensures that the callback function will only executed after 
  // 2 second elapses from the most recent debounced call.
  const debouncedChangeInput = debounce(() => {
    console.log("[DEBUG] Input Changed!")
  }, 2000)


  return(
    <div className={styles.layout}>
      <h2>Debounce</h2>
    <input onChange={debouncedChangeInput} />
    </div>
  ) 
}

export default Timer;