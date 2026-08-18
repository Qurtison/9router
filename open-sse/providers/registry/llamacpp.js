// Local llama.cpp server (OpenAI-compatible, no auth).
//
// The Qwen3.8 custom chat template reads the `reasoning_effort` template
// variable; the server's --chat-template-kwargs defaults it to "medium" and the
// server ignores top-level enable_thinking/thinking_budget. transport.thinkingFormat
// takes precedence over the `*qwen*` capability pattern (thinkingUnified.resolveFormat),
// so per-request reasoning_effort reaches the template and overrides the default.
//
// The host is configurable per connection via providerSpecificData.baseUrl
// (resolved by resolveLlamaCppHost in open-sse/config/providers.js); this
// transport.baseUrl is only the fallback default. The live model catalogue is
// fetched from /v1/models; passthroughModels accepts any id llama.cpp reports.
export default {
  id: "llamacpp",
  alias: "local",
  category: "free",
  noAuth: true,
  display: {
    name: "llama.cpp",
    icon: "cpu",
    color: "#8B5CF6",
    textIcon: "LC",
    website: "https://github.com/ggml-org/llama.cpp",
  },
  transport: {
    baseUrl: "http://10.0.0.69:18083/v1/chat/completions",
    format: "openai",
    thinkingFormat: "openai",
  },
  models: [
    { id: "Qwen3.8-27B-IQ4_XS.gguf", name: "Qwen3.8-27B" },
  ],
  passthroughModels: true,
};
