import { EntryPointTemplate } from "./entryPoint.template";
import "./entryPoint.styles.css";
import { useEffect, useState } from "react";
import { SidebarItem } from "@portal/libs/sidebar/sidebarItem";
import { NavigationData } from "@portal/libs/nav-data/navigationData";

export const EntryPoint = () => {

    const [currentNav, setCurrentNav] = useState<string>();
    const [sidebarNavItems, setSidebarNavItems] = useState<SidebarItem[]>([]);

    useEffect(() => {
        if (NavigationData.length > 0) {
            const defaultNav = NavigationData[0];
            setCurrentNav(defaultNav.topNav);
        }
    }, [])

    useEffect(() => {
        const newNavData = NavigationData.find(item => item.topNav === currentNav);
        if (newNavData) {
            setSidebarNavItems(newNavData.sideNav);
        }
    }, [currentNav])
    

    return EntryPointTemplate(sidebarNavItems, currentNav);
}