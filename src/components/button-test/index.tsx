import { ButtonTestProps } from "./buttonTest.props";
import { ButtonTestTemplate } from "./buttonTest.template";
import './buttonTest.styles.css';

export const ButtonTest = (props: ButtonTestProps) => {
    return ButtonTestTemplate(props);
}