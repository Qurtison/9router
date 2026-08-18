import { DefaultExecutor } from "./default.js";
import { resolveLlamaCppHost } from "../config/providers.js";

export class LlamaCppExecutor extends DefaultExecutor {
  constructor() {
    super("llamacpp");
  }

  buildUrl(model, stream, urlIndex = 0, credentials = null) {
    return `${resolveLlamaCppHost(credentials)}/v1/chat/completions`;
  }
}

export default LlamaCppExecutor;
