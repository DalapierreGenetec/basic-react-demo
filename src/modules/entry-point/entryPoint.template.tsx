import { TopNav } from "@portal/modules/top-nav";
import { Sidebar } from "@portal/modules/sidebar";
import { SidebarItem } from "@portal/libs/sidebar/sidebarItem";

export const EntryPointTemplate = (sidebarNavItems: SidebarItem[], currentNav?: string) => (
    <div id="entry-point">
        <TopNav currentNav={currentNav}/>
        <div id="app-container">
            <Sidebar sidebarItems={sidebarNavItems} />
            <div id="content-region">

            </div>
        </div>
    </div>
);