import { TopNavTemplate } from "./topNav.template"
import './topNav.styles.css'
import { useEffect, useState } from "react";
import { NavigationData } from "@portal/libs/nav-data/navigationData";
import { TopNavProps } from "./topNav.props";

export const TopNav = (props: TopNavProps) => {

    const [navItems, setNavItems] = useState<string[]>([]);

    useEffect(() => {
        let items: string[] = [];
        NavigationData.forEach((item) => {
            items.push(item.topNav);
        })
        setNavItems(items);
    }, []);

    return TopNavTemplate(navItems, props.currentNav);
}