import { useState } from 'react'
import Child from './components/Child'
import styles from './App.module.css'

export default function App() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.app}>
      <h1>Parent Component</h1>
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={e => setIsActive(e.target.checked)}
        />
        Activate Child
      </label>
      <Child active={isActive} />
    </div>
  )
}

