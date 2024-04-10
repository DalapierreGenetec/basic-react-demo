import { SidebarItem } from "@portal/libs/sidebar/sidebarItem";

const renderSidebarItem = (item: SidebarItem, selected: boolean) => (
    <div key={item.display} className={selected ? "selected sidebar-nav-item" : "sidebar-nav-item"}>
        <p>{item.display}</p>
    </div>
);

export const SidebarContainerTemplate = (items?: SidebarItem[]) => (
    <div id="sidebar-container">
        {items?.map(item => renderSidebarItem(item, true))}
    </div>
);