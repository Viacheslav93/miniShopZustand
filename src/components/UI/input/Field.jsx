import styles from './Field.module.scss'


export const Field = ({type, value, onChange, name, placeholder, className}) => {

  return (

    <div className={styles.inputWrapper}>
        <input 
            className={`${styles.input} ${className}`}
            type={type ? type : "text"} 
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
        />
    </div>
  )
}
