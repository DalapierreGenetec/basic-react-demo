import { ButtonTest } from "@portal/components/button-test";

export const OverviewTemplate = (testCallback: () => void) => (
    <div id="overview">
        <p>Hello overview</p>
        <ButtonTest display="Press me" onClickCallback={testCallback} />
    </div>
);