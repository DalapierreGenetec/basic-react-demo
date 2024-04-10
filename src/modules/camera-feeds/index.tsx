import { CameraFeedsTemplate } from "./cameraFeeds.template"
import './cameraFeeds.styles.css';

export const CameraFeeds = () => {

    const testCallback2 = () => {
        console.log('Test callback 2 succeeded');
    }

    return CameraFeedsTemplate(testCallback2);
}