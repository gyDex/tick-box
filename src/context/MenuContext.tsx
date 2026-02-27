import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { menuItems } from "../data/menuData";

export type MenuItem = {
  id: number;
  name: string;
  value?: number;
  selected: boolean;
  children?: MenuItem[];
};

type MenuContextType = {
  items: MenuItem[];
  toggleItem: (id: number) => void;
  setType: (type: 'type1' | 'type2') => void;
  selectedItems: MenuItem[];
  totalValue: number;
  type: 'type1' | 'type2';
};

const MenuContext = createContext<MenuContextType | null>(null);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<'type1' | 'type2'>('type1');
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const init = (data: any[]): MenuItem[] =>
      data.map(item => ({
        ...item,
        selected: false,
        children: item.children ? init(item.children) : undefined
      }));

    setItems(init(menuItems[type]));
  }, [type]);

  const toggleItem = (id: number) => {
    const toggleChildren = (item: MenuItem, selected: boolean): MenuItem => ({
      ...item,
      selected,
      children: item.children?.map(child =>
        toggleChildren(child, selected)
      ),
    });

    const toggle = (list: MenuItem[]): MenuItem[] =>
      list.map(item => {
        if (item.id === id) {
          const newSelected = !item.selected;
          return toggleChildren(item, newSelected);
        }

        if (item.children) {
          return { ...item, children: toggle(item.children) };
        }

        return item;
      });

    setItems(prev => toggle(prev));
  };

  const collectSelected = (list: MenuItem[]): MenuItem[] =>
    list.flatMap(item => [
      ...(item.selected ? [item] : []),
      ...(item.children ? collectSelected(item.children) : [])
    ]);

  const selectedItems = collectSelected(items);
  const totalValue = selectedItems.reduce((sum, i) => sum + (i.value ?? 0), 0);

  return (
    <MenuContext.Provider
      value={{ items, toggleItem, setType, type, selectedItems, totalValue }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used inside MenuProvider");
  return context;
};