import { useMenu } from '../../context/MenuContext';
import styles from './Header.module.scss'

export const Header = () => {
  const { selectedItems, totalValue, type } = useMenu();  

  return (
    <div className={styles['header']}>
        <div className={styles['header__left']}>
          <span className={styles['header__left-title']}>Раздел: 
            { type === 'type1' && ' Тип 1' }
            { type === 'type2' && ' Тип 2' }
          </span>
        </div>

        <div className={styles['header__right']}>
            <span className={styles['header__right-selected']}>
                Выбрано пунктов: {selectedItems.length}
            </span>
            <span className={styles['header__right-value']}>
                Общее значение: {totalValue}
            </span>
        </div>
    </div>
  )
}