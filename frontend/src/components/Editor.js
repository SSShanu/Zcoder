import React, { useEffect, useRef } from "react";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";

function Editor({ socketRef, roomId, onCodeChange }) {
  const editorRef = useRef(null);
  const isUserChange = useRef(true);

  useEffect(() => {
    const init = async () => {
      const editor = CodeMirror.fromTextArea(
        document.getElementById("realtimeEditor"),
        {
          mode: { name: "javascript", json: true },
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
        if (origin !== "setValue" && isUserChange.current) {
          debounceEmitCodeChange(code);
        }
      });
    };

    init();
  }, []);

  // Debounce function to limit the rate of emitting code-change events
  const debounceEmitCodeChange = debounce((code) => {
    socketRef.current.emit("code-change", {
      roomId,
      code,
    });
  }, 300);

  // Debounce function to limit the rate of emitting events
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // data receive from server
  useEffect(() => {
    if (socketRef.current) {
      const handleCodeChange = ({ code }) => {
        if (code !== null && code !== editorRef.current.getValue()) {
          isUserChange.current = false;
          editorRef.current.setValue(code);
          isUserChange.current = true;
        }
      };

      socketRef.current.on("code-change", handleCodeChange);

      return () => {
        socketRef.current.off("code-change", handleCodeChange);
      };
    }
  }, [socketRef.current]);

  return (
    <div style={{ height: "600px", width: "600px" }}>
      <textarea id="realtimeEditor"></textarea>
    </div>
  );
}

export default Editor;
