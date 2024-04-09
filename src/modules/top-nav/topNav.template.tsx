import { TopNavItem } from "@portal/libs/top-nav/topNavItem";

const TopNavItemTemplate = (item: TopNavItem, index: number) => (
    <div key={item.display} className={index === 0 ? "selected top-nav-item" : "top-nav-item"}>
        {item.display}
    </div>
);

export const TopNavTemplate = (navItems: TopNavItem[]) => (
    <div id="top-nav-bar-container">
        {navItems.map((item, i) => TopNavItemTemplate(item, i))}
    </div>
);