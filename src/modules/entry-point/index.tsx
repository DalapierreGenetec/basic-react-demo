import { EntryPointTemplate } from "./entryPoint.template";
import "./entryPoint.styles.css";
import { useEffect, useState } from "react";
import { SidebarNavItem, TopNavigation, TopNavigationType, configurationSidebarNavItems, dashboardSidebarNavItems, diagnosticsSidebarNavItems, helpSidebarNavItems, topNavigationTypes } from "@portal/libs/nav-data/navigationData";


export const EntryPoint = () => {

    const [currentContent, setCurrentContent] = useState<JSX.Element>();
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
                setCurrentSidebarNav(dashboardSidebarNavItems[0]);
                break;
            case topNavigationTypes.configuration:
                setSidebarNavItems(configurationSidebarNavItems);
                setCurrentSidebarNav(configurationSidebarNavItems[0]);
                break;
            case topNavigationTypes.diagnostics:
                setSidebarNavItems(diagnosticsSidebarNavItems);
                setCurrentSidebarNav(diagnosticsSidebarNavItems[0]);
                break;
            case topNavigationTypes.help:
                setSidebarNavItems(helpSidebarNavItems);
                setCurrentSidebarNav(helpSidebarNavItems[0]);
                break;
            default:
                break;
        }
    }, [currentTopNav])

    useEffect(() => {
        setCurrentContent(currentSidebarNav?.content);
    }, [currentSidebarNav])

    const handleSidebarNav = (sidebarNavItem: SidebarNavItem) => {
        setCurrentSidebarNav(sidebarNavItem);
    }

    const handleTopNav = (topNav: TopNavigationType) => {
        setCurrentTopNav(topNav);
    }
    

    return EntryPointTemplate(sidebarNavItems, TopNavigation, handleTopNav, handleSidebarNav, currentTopNav, currentSidebarNav, currentContent);
}