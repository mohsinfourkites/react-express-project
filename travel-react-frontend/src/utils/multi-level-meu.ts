// travel-react-frontend/src/utils/multi-level-menu.ts

import { Bolt, ShoppingBag, BellDot, BookOpenText, BriefcaseBusiness, CircleHelp, TriangleAlert, Users, Lock, Dessert, ShieldPlus, MessageCircle, Images, Figma, Play, MapPin, Database, PanelsTopLeft, PanelTop } from "lucide-react";
import { MenuItem } from "../types/types";
// Import MenuItem from types

export const Menus: MenuItem[] = [
  {
    name: "Home",
    redirection: "/home",
    // subMenuHeading: ["Design", "Scale"],
    // subMenu: [
    //   {
    //     name: "Design",
    //     desc: "Responsive design",
    //     icon: PanelsTopLeft,
    //   },
    //   {
    //     name: "Management",
    //     desc: "Site control",
    //     icon: Bolt,
    //   },
    //   {
    //     name: "Navigation",
    //     desc: "Link pages",
    //     icon: PanelTop,
    //   },
    //   {
    //     name: "CMS",
    //     desc: "Management content",
    //     icon: Database,
    //   },
    // ],
    gridCols: 2,
  },
  {
    name: "Packages",
    redirection: "/packages",
    // subMenuHeading: ["Get started", "Programs", "Recent"],
    // subMenu: [
    //   {
    //     name: "Marketplace",
    //     desc: "Browse templates",
    //     icon: ShoppingBag,
    //   },
    //   {
    //     name: "Meetups",
    //     desc: "Upcoming events",
    //     icon: MapPin,
    //   },
    //   {
    //     name: "Updates",
    //     desc: "Changelog",
    //     icon: BellDot,
    //   },
    //   {
    //     name: "Academy",
    //     desc: "Watch lessons",
    //     icon: Play,
    //   },
    //   {
    //     name: "Blog",
    //     desc: "Posts",
    //     icon: BookOpenText,
    //   },
    //   {
    //     name: "Figma",
    //     desc: "Plugin",
    //     icon: Figma,
    //   },
    //   {
    //     name: "Experts",
    //     desc: "Jobs",
    //     icon: BriefcaseBusiness,
    //   },
    //   {
    //     name: "Gallery",
    //     desc: "Images",
    //     icon: Images,
    //   },
    // ],
    gridCols: 3,
  },
  {
    name: "Support",
    redirection: "/support",
    // subMenu: [
    //   {
    //     name: "Help",
    //     desc: "Center",
    //     icon: CircleHelp,
    //   },
    //   {
    //     name: "Community",
    //     desc: "Project help",
    //     icon: MessageCircle,
    //   },
    //   {
    //     name: "Emergency",
    //     desc: "Urgent issues",
    //     icon: TriangleAlert,
    //   },
    // ],
    // gridCols: 1,
  },
  {
    name: "Contact",
    redirection: "/topplaces",
    subMenuHeading: ["Overview", "Features"],
    
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pricing",
    redirection: "/pricing",
  },
  {
    name: "Top Places To Visit",
    redirection: "/topplaces",
  },
];
