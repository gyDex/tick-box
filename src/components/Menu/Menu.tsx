import styles from './Menu.module.scss';
import { useMenu } from '../../context/MenuContext';
import { TreeNode } from '../TreeNode/TreeNode';

const Menu = () => {
  const { items, toggleItem, type } = useMenu();

  if (type === 'type2') {
    return (
      <ul className={styles.menu}>
        {items.map(item => (
          <TreeNode key={item.id} item={item} />
        ))}
      </ul>
    );
  }

  return (
    <ul className={styles.menu}>
      {items.map(item => (
        <li className={styles.menu__item} key={item.id}>
        <label className={styles['menu__item-label']}>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => toggleItem(item.id)}
            className={styles['menu__checkbox']}
          />

          <span className={styles['menu__custom-checkbox']} />

          <div className={styles['menu__item-right']}>
            <h3 className={styles['menu__item-name']}>{item.name}</h3>
            {item.value && (
              <span className={styles['menu__item-value']}>
                Value: {item.value}
              </span>
            )}
          </div>
        </label>
        </li>
      ))}
    </ul>
  );
};

export default Menu;