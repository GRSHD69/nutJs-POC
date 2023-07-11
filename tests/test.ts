import { screen, imageResource } from "@nut-tree/nut-js";
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    try {
        const region = await screen.waitFor(imageResource("mouse.png"));
        console.log(region);
    } catch (e) {
        console.error(e);
    }
})();