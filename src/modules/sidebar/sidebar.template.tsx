import { SidebarNavItem } from "@portal/libs/nav-data/navigationData";
import { SidebarProps } from "./sidebar.props";


const renderSidebarItem = (item: SidebarNavItem, selected: boolean) => (
    <div key={item.display} className={selected ? "selected sidebar-nav-item" : "sidebar-nav-item"}>
        <p>{item.display}</p>
    </div>
);

export const SidebarContainerTemplate = (props: SidebarProps) => (
    <div id="sidebar-container">
        {props.sidebarItems?.map(item => renderSidebarItem(item, item.display === props.currentNavItem?.display))}
    </div>
);