import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { WordCount } from "./Extensions/WordCount";
import CountDisplay from "./UI/CountDisplay";

const Tiptap = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleWordCount = () => {
    const count = editor.commands.setWordCount();
    setWordCount(count);
  };
  const editor = useEditor({
    extensions: [StarterKit, WordCount],
    content: ``,
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <EditorContent editor={editor} />
      <button
        onClick={() => handleWordCount()}
        className="p-2 mt-4 bg-yellow-500 text-white rounded"
      >
        Give Word Count
      </button>
      <CountDisplay wordCount={wordCount} />
    </div>
  );
};

export default Tiptap;
