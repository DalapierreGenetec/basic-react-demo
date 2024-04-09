import { TopNavProps } from "./topNav.props";
import { TopNavTemplate } from "./topNav.template"
import './topNav.styles.css';

export const TopNav = (props: TopNavProps) => {
    return TopNavTemplate(props.navItems);
}