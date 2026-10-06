import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2 } from "./router-DKF0ET_M.mjs";
import { o as JournalPost } from "./pages-eIELpwZo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal._slug-CH9th8Nl.js
var import_jsx_runtime = require_jsx_runtime();
function Post() {
	const { slug } = Route$2.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JournalPost, { slug });
}
//#endregion
export { Post as component };
