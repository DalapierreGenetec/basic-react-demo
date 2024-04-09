import { TopNavProps } from "./topNav.props";
import { TopNavTemplate } from "./topNav.template"

export const TopNav = (props: TopNavProps) => {
    return TopNavTemplate(props.navItems);
}