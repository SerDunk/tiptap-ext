import { Extension } from "@tiptap/core";

export const WordCount = Extension.create({
  name: "wordCount",

  addCommands() {
    return {
      setWordCount:
        () =>
        ({ editor }) => {
          const text = editor.getText().trim();
          const words = text.split(" ").filter((word) => word.length > 0);
          console.log(words.length);
          return words.length;
        },
    };
  },
});
