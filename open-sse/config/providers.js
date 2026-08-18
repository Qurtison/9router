// Barrel: PROVIDERS now built from providers/registry (transport co-located with models)
import { PROVIDERS } from "../providers/index.js";
export { PROVIDERS, PROVIDER_OAUTH } from "../providers/index.js";

export const OLLAMA_LOCAL_DEFAULT_HOST = "http://localhost:11434";

export function resolveOllamaLocalHost(credentials) {
  const raw = credentials?.providerSpecificData?.baseUrl?.trim();
  return (raw || OLLAMA_LOCAL_DEFAULT_HOST).replace(/\/$/, "");
}

export const LLAMACPP_DEFAULT_HOST = "http://10.0.0.69:18083";

// Normalize a user-supplied llama.cpp URL to the bare origin (scheme://host:port).
// Accepts either the bare host or a full path (…/v1/chat/completions, …/v1) so
// the executor and /v1/models fetch can append their own suffix.
export function resolveLlamaCppHost(credentials) {
  const raw = credentials?.providerSpecificData?.baseUrl?.trim();
  return (raw || LLAMACPP_DEFAULT_HOST)
    .replace(/\/v1\/chat\/completions$/, "")
    .replace(/\/v1$/, "")
    .replace(/\/$/, "");
}

// Region URLs single-source from registry xiaomi-tokenplan.transport
export const XIAOMI_TOKENPLAN_REGIONS = PROVIDERS["xiaomi-tokenplan"]?.regions || {};
export const XIAOMI_TOKENPLAN_DEFAULT_REGION = PROVIDERS["xiaomi-tokenplan"]?.defaultRegion;

export function resolveXiaomiTokenplanBaseUrl(credentials) {
  const region = credentials?.providerSpecificData?.region;
  return XIAOMI_TOKENPLAN_REGIONS[region] || XIAOMI_TOKENPLAN_REGIONS[XIAOMI_TOKENPLAN_DEFAULT_REGION];
}
