import { TopNavTemplate } from "./topNav.template"
import './topNav.styles.css'
import { TopNavProps } from "./topNav.props";

export const TopNav = (props: TopNavProps) => {

    return TopNavTemplate(props);
}