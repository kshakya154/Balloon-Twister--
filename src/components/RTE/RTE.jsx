import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Controller } from "react-hook-form";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-400 font-medium mb-2">{label}</label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => {
          const editor = useEditor({
            extensions: [
              StarterKit,
              Underline,
              BulletList,
              OrderedList,
              ListItem,
            ],
            content: defaultValue,
            editorProps: {
              attributes: {
                class:
                  "prose bg-gray-700 text-white p-4 rounded-lg min-h-[300px] focus:ring-2 focus:ring-blue-500",
              },
            },
            onUpdate: ({ editor }) => {
              onChange(editor.getHTML());
            },
          });

          if (!editor) {
            return <div className="text-gray-400">Loading editor...</div>;
          }

          return (
            <div className="border border-gray-600 rounded-lg">
              {/* Toolbar */}
              <div className="flex gap-2 p-2 bg-gray-800 text-white rounded-t-lg">
                <button
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={`px-3 py-1 rounded ${
                    editor.isActive("bold") ? "bg-gray-600" : ""
                  }`}
                >
                  B
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={`px-3 py-1 rounded ${
                    editor.isActive("italic") ? "bg-gray-600" : ""
                  }`}
                >
                  I
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  className={`px-3 py-1 rounded ${
                    editor.isActive("underline") ? "bg-gray-600" : ""
                  }`}
                >
                  U
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className={`px-3 py-1 rounded ${
                    editor.isActive("bulletList") ? "bg-gray-600" : ""
                  }`}
                >
                  • List
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  className={`px-3 py-1 rounded ${
                    editor.isActive("orderedList") ? "bg-gray-600" : ""
                  }`}
                >
                  1. List
                </button>
                <button
                  onClick={() => editor.chain().focus().undo().run()}
                  className="px-3 py-1 rounded"
                >
                  ↺ Undo
                </button>
                <button
                  onClick={() => editor.chain().focus().redo().run()}
                  className="px-3 py-1 rounded"
                >
                  ↻ Redo
                </button>
              </div>

              {/* Editor Content */}
              <EditorContent editor={editor} className="p-4 min-h-[250px]" />
            </div>
          );
        }}
      />
    </div>
  );
}
