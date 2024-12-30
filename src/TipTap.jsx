import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState, useEffect } from "react";
import { WordCount } from "./Extensions/WordCount";
import CountDisplay from "./UI/CountDisplay";

const Tiptap = () => {
  const [wordCount, setWordCount] = useState(0);

  const editor = useEditor({
    extensions: [StarterKit, WordCount],
    content: "",
  });

  useEffect(() => {
    if (!editor) return;

    const updateWordCount = () => {
      const count = editor.storage.wordCount.words || 0;
      setWordCount(count);
    };

    editor.on("update", updateWordCount);

    return () => {
      editor.off("update", updateWordCount);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="flex flex-col gap-1">
      <EditorContent editor={editor} />
      <CountDisplay wordCount={wordCount} />
    </div>
  );
};

export default Tiptap;
