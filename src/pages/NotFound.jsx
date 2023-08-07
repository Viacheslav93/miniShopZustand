import styles from './NotFound.module.scss'

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const NotFound = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.error} >NotFound</div>
  )
}
