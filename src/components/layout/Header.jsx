import styles from './styles.module.scss'

import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import { Search } from '../search/Search'


export const Header = () => {

    const [active, setActive] = useState('home')
    const {pathname} = useLocation()

  return (

    <header className={`container ${styles.header}`}>
        <nav className={styles.navigation}>
            <p className={styles.logo}>
                <Link to={'/'}>
                    Your logo
                </Link>
            </p>
            
            <div className={styles.search}>
                <Search />
            </div>
            <ul className={styles.menu}>
                <li 
                    className={active === 'home' || pathname === '/' ? styles.active : ''} 
                    onClick={() => setActive('home')}
                >
                   <Link to={'/'}>Home</Link>
                </li>
                <li 
                    className={active === 'cart' && pathname === '/cart' ? styles.active : ''} 
                    onClick={() => setActive('cart')}
                >
                    <Link to={'/cart'}>Cart</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
