import { SidebarContainerTemplate } from "./sidebar.template"
import './sidebar.styles.css';
import { SidebarProps } from "./sidebar.props";

export const Sidebar = (props: SidebarProps) => {
    return SidebarContainerTemplate(props);
}