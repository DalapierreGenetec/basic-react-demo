import { SidebarNavItem } from "@portal/libs/nav-data/navigationData";

export interface SidebarProps {
    sidebarItems?: SidebarNavItem[]
    currentNavItem?: SidebarNavItem
    onNavClick: (navItem: SidebarNavItem) => void;
}