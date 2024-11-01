import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";
import styles from "./DesktopMenu.module.scss";

interface SubMenuItem {
  name: string;
  desc: string;
  icon?: React.ComponentType;
}

interface MenuItem {
  name: string;
  subMenu?: SubMenuItem[];
  subMenuHeading?: string[];
  gridCols?: 1 | 2 | 3;
}

interface DesktopMenuProps {
  menu: MenuItem;
}

const subMenuAnimate: Variants = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => {
  const [isHover, setHover] = useState(false);
  const toggleHoverMenu = () => setHover(!isHover);

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className={styles.menuItem}
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <span className={`${styles.menuLink} flex-center gap-1 px-3 py-1 rounded-xl cursor-pointer`}>
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className={`${styles.chevronIcon} mt-[0.6px] duration-200`} />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className={styles.subMenu}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu?.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                {menu.gridCols! > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-gray-500">
                    {menu.subMenuHeading[i]}
                  </p>
                )}
                <div className={`${styles.menuBox} flex-center gap-x-4`}>
                  <div className={`${styles.iconBox} p-2 rounded-md`}>
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold">{submenu.name}</h6>
                    <p className="text-sm text-gray-400">{submenu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
