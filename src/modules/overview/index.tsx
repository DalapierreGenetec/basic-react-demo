import { OverviewTemplate } from "./overview.template"
import "./overview.styles.css";

export const Overview = () => {

    const test1Callback = () => {
        console.log("Test 1 succeeded");
    }

    return OverviewTemplate(test1Callback);
}