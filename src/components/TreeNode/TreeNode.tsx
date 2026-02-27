import { useState } from "react";
import styles from "./TreeNode.module.scss";
import { useMenu, type MenuItem } from "../../context/MenuContext";

type Props = {
  item: MenuItem;
};

export const TreeNode = ({ item }: Props) => {
  const { toggleItem } = useMenu();
  const [open, setOpen] = useState(true);

  return (
    <li className={styles.menu__item}>
      <div className={styles['menu__item-content']}>
        {item.children && (
          <button onClick={() => setOpen(prev => !prev)}>
            {open ? "▼" : "▶"}
          </button>
        )}

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
      </div>

      {open && item.children && (
        <ul className={styles.menu__children}>
          {item.children.map(child => (
            <TreeNode key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};