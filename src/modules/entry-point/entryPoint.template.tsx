import { TopNav } from "@portal/modules/top-nav";
import { TopNavData } from "@portal/libs/top-nav/topNavData";
import { Sidebar } from "@portal/modules/sidebar";

export const EntryPointTemplate = () => (
    <div id="entry-point">
        <TopNav navItems={TopNavData.navItems} />
        <div id="app-container">
            <Sidebar />
            <div id="content-region">

            </div>
        </div>
    </div>
);