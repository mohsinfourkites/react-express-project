// travel-react-frontend/src/types.ts

import { ComponentType } from "react";

// Define the SubMenu type
export interface SubMenu {
  name: string;
  desc: string;
  icon: LucideIcon;// Define icon as a ComponentType with optional size prop
  redirection?: string;
}

// Define the MenuItem type
export interface MenuItem {
  name: string;
  subMenuHeading?: string[];
  subMenu?: SubMenu[];
  gridCols?: 1 | 2 | 3; // Restrict gridCols to specific values
  redirection?: string;
}
