import { ButtonTestProps } from "./buttonTest.props";

export const ButtonTestTemplate = (props: ButtonTestProps) => (
    <div onClick={props.onClickCallback} className="button-test-root">
        <p className="button-test-text">{props.display}</p>
    </div>
)