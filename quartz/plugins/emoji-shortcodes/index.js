import remarkGemoji from "remark-gemoji"

export default function EmojiShortcodes() {
  return {
    name: "EmojiShortcodes",
    markdownPlugins() {
      return [remarkGemoji]
    },
  }
}
