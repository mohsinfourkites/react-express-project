import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./MobMenu.module.scss";

interface SubMenu {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface MenuItem {
  name: string;
  subMenu?: SubMenu[];
}

interface MobMenuProps {
  Menus: MenuItem[];
}

const subMenuDrawer: Variants = {
  enter: {
    height: "auto",
    overflow: "hidden",
  },
  exit: {
    height: 0,
    overflow: "hidden",
  },
};

const MobMenu: React.FC<MobMenuProps> = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  return (
    <div>
      <button className={`${styles.menuButton} lg:hidden`} onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className={styles.drawer}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu && subMenu.length > 0;

            return (
              <li key={name}>
                <span
                  className={`${styles.menuItem} flex-center-between p-4 rounded-md cursor-pointer`}
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`${styles.chevronIcon} ml-auto ${isClicked ? styles.rotate : ""}`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon }) => (
                      <li key={name} className={`${styles.subMenuItem} p-2 flex-center gap-x-2`}>
                        <Icon size={17} />
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobMenu;
