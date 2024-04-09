import { TopNavItem } from "@portal/libs/top-nav/topNavItem";

const TopNavItemTemplate = (item: TopNavItem) => (
    <div>
        {item.display}
    </div>
);

export const TopNavTemplate = (navItems: TopNavItem[]) => (
    <div id="top-nav-bar-container">
        {navItems.map((item) => TopNavItemTemplate(item))}
    </div>
);