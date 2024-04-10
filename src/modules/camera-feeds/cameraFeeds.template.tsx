import { ButtonTest } from "@portal/components/button-test";

export const CameraFeedsTemplate = (testCallback: () => void) => (
    <div id="camera-feeds">
        <p>Hello camera feeds</p>
        <ButtonTest display="Another press me" onClickCallback={testCallback} />
    </div>
);