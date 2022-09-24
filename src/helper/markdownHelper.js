import { marked } from "marked";

function importMarkdown(markdown) {
  return marked(markdown);
}

export { importMarkdown };
