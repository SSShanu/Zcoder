import React, { useEffect, useRef } from "react";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";

function Editor({ socketRef, roomId, onCodeChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const editor = CodeMirror.fromTextArea(
        document.getElementById("realtimeEditor"),
        {
          mode: "javascript",
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );

      editorRef.current = editor;

      editor.setSize(null, "100%");
      editor.on("change", (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        onCodeChange(code);

        if (origin !== 'setValue') {
          console.log('Emitting code-change:', code);
          socketRef.current.emit("code-change", {
            roomId,
            code,
          });
        }
      });
    };
    init();
  }, [onCodeChange, roomId, socketRef]);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on("code-change", ({ code }) => {
        console.log('code-change event received:', code);
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
    return () => {
      if (socketRef.current) {
        socketRef.current.off("code-change");
      }
    };
  }, [socketRef]);

  return (
    <div style={{ height: "600px", width: "1400px" }}>
      <textarea id="realtimeEditor"></textarea>
    </div>
  );
}

export default Editor;
