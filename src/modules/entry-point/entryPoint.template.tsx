import { TopNav } from "@portal/modules/top-nav";
import { Sidebar } from "@portal/modules/sidebar";
import { SidebarNavItem, TopNavItem, TopNavigationType } from "@portal/libs/nav-data/navigationData";

export const EntryPointTemplate = (sidebarNavItems: SidebarNavItem[], topNavItems: TopNavItem[], currentNav?: TopNavigationType) => (
    <div id="entry-point">
        <TopNav currentNav={currentNav} topNavItems={topNavItems}/>
        <div id="app-container">
            <Sidebar sidebarItems={sidebarNavItems} />
            <div id="content-region">

            </div>
        </div>
    </div>
);