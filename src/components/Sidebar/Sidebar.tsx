import { useMenu } from '../../context/MenuContext';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    const { setType } = useMenu();

    return (
        <aside className={styles['sidebar']}>
            <ul className={styles['sidebar__menu']}>
                <li className={styles['sidebar__menu-item']}>
                    <button onClick={() => setType('type1')} className={styles['sidebar__menu-btn']}>Тип 1</button>
                </li> 

                <li className={styles['sidebar__menu-item']}>
                    <button onClick={() => setType('type2')} className={styles['sidebar__menu-btn']}>Тип 2</button>
                </li>
            </ul>
        </aside>
    )
}
