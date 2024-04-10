import { EntryPointTemplate } from "./entryPoint.template";
import "./entryPoint.styles.css";
import { useEffect, useState } from "react";
import { SidebarNavItem, TopNavigation, TopNavigationType, configurationSidebarNavItems, dashboardSidebarNavItems, diagnosticsSidebarNavItems, helpSidebarNavItems, topNavigationTypes } from "@portal/libs/nav-data/navigationData";


export const EntryPoint = () => {

    const [currentTopNav, setCurrentTopNav] = useState<TopNavigationType>();
    const [currentSidebarNav, setCurrentSidebarNav] = useState<SidebarNavItem>();
    const [sidebarNavItems, setSidebarNavItems] = useState<SidebarNavItem[]>([]);

    useEffect(() => {
        if (TopNavigation.length > 0) {
            const defaultNav = TopNavigation[0];
            setCurrentTopNav(defaultNav.type);
        }
        if (dashboardSidebarNavItems.length > 0) {
            setCurrentSidebarNav(dashboardSidebarNavItems[0]);
        }
    }, [])

    useEffect(() => {
        switch (currentTopNav) {
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
    }, [currentTopNav])
    

    return EntryPointTemplate(sidebarNavItems, TopNavigation, currentTopNav, currentSidebarNav);
}