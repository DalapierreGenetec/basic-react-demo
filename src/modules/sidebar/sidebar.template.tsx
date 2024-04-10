import { SidebarNavItem } from "@portal/libs/nav-data/navigationData";


const renderSidebarItem = (item: SidebarNavItem, selected: boolean) => (
    <div key={item.display} className={selected ? "selected sidebar-nav-item" : "sidebar-nav-item"}>
        <p>{item.display}</p>
    </div>
);

export const SidebarContainerTemplate = (items?: SidebarNavItem[]) => (
    <div id="sidebar-container">
        {items?.map(item => renderSidebarItem(item, false))}
    </div>
);