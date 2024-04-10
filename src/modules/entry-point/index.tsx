import { EntryPointTemplate } from "./entryPoint.template";
import "./entryPoint.styles.css";
import { useEffect, useState } from "react";
import { SidebarNavItem, TopNavItem, TopNavigation, TopNavigationType, configurationSidebarNavItems, dashboardSidebarNavItems, diagnosticsSidebarNavItems, helpSidebarNavItems, topNavigationTypes } from "@portal/libs/nav-data/navigationData";


export const EntryPoint = () => {

    const [currentNav, setCurrentNav] = useState<TopNavigationType>();
    const [sidebarNavItems, setSidebarNavItems] = useState<SidebarNavItem[]>([]);

    useEffect(() => {
        if (TopNavigation.length > 0) {
            const defaultNav = TopNavigation[0];
            setCurrentNav(defaultNav.type);

        }
    }, [])

    useEffect(() => {
        switch (currentNav) {
            case topNavigationTypes.dashboard:
                setSidebarNavItems(dashboardSidebarNavItems);
                break;
            case topNavigationTypes.configuration:
                setSidebarNavItems(configurationSidebarNavItems);
                break;
            case topNavigationTypes.diagnostics:
                setSidebarNavItems(diagnosticsSidebarNavItems);
                break;
            case topNavigationTypes.help:
                setSidebarNavItems(helpSidebarNavItems);
            default:
                break;
        }
    }, [currentNav])
    

    return EntryPointTemplate(sidebarNavItems, TopNavigation, currentNav);
}