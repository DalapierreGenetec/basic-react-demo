import { TopNav } from "@portal/modules/top-nav";
import "./entryPoint.styles.css";
import { TopNavData } from "@portal/libs/top-nav/topNavData";

export const EntryPointTemplate = () => (
    <div id="app-container">
        <TopNav navItems={TopNavData.navItems} />
    </div>
);