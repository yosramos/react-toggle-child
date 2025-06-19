import styles from './Child.module.css'

export default function Child({ active }) {
  return (
    <div className={`${styles.child} ${active ? styles.active : ''}`}>
      <h2>Child Component</h2>
      {active ? <p>I am active ✅</p> : <p>I am inactive ❌</p>}
    </div>
  )
}
