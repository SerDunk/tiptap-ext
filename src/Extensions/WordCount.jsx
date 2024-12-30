import { Extension } from "@tiptap/core";

export const WordCount = Extension.create({
  name: "wordCount",

  addStorage() {
    return {
      words: 0,
    };
  },

  onUpdate({ editor }) {
    const text = editor.getText().trim();
    const words = text.split(" ").filter((word) => word.length > 0);
    this.storage.words = words.length;
  },
});
