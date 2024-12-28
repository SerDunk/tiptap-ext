import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const content = `<pre><code>Welcome to Javascript editor</code></pre>`;

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      if (editor.isEmpty) {
        editor.commands.setContent("<pre><code></code></pre>");
      }
    },
  });

  return (
    <div className="min-h-screen">
      <EditorContent editor={editor} className="prose max-w-none" />
    </div>
  );
};

export default Tiptap;
