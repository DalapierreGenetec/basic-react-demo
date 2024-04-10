import { TopNavTemplate } from "./topNav.template"
import './topNav.styles.css'
import { useEffect, useState } from "react";
import { TopNavProps } from "./topNav.props";

export const TopNav = (props: TopNavProps) => {

    const [navItems, setNavItems] = useState<string[]>([]);

    useEffect(() => {
        let items: string[] = [];
        props.topNavItems.forEach(item => {
            items.push(item.display);
        })
        setNavItems(items);
    }, []);

    return TopNavTemplate(navItems, props.currentNav);
}