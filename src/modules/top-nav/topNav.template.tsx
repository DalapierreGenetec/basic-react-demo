import { TopNavItem, TopNavigationType } from "@portal/libs/nav-data/navigationData";
import { TopNavProps } from "./topNav.props";

const TopNavItemTemplate = (item: TopNavItem, isSelected: boolean, onTopNavClick: (topNav: TopNavigationType) => void) => (
    <div onClick={() => onTopNavClick(item.type)} key={item.display} className={isSelected ? "selected top-nav-item" : "top-nav-item"}>
        {item.display}
    </div>
);

export const TopNavTemplate = (props: TopNavProps) => (
    <div id="top-nav-bar-container">
        {props.topNavItems.map((item) => TopNavItemTemplate(item, item.type === props.currentNav, props.onTopNavClick))}
    </div>
);