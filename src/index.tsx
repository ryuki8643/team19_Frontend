import { render } from "react-dom";
import FrontPage from "./FrontPage";

// react-router-domからBrowserRouterをimportする。
import { BrowserRouter } from "react-router-dom";

render(
    // BrowserRouterタグでAppタグを囲む。
    <BrowserRouter>
        <FrontPage />
    </BrowserRouter>,
    document.getElementById("root")
);

