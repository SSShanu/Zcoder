import React, { useEffect, useRef, useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { initSocket } from "../socket";
import toast from "react-hot-toast";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import logo from '../logo2.jpg';
import './EditorPage.css'; // Import the new CSS file

function EditorPage() {
  const [clients, setClients] = useState([]);
  const codeRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const socketRef = useRef(null);

  useEffect(() => {
    if (!location.state) {
      navigate('/Room');
      return;
    }

    const handleError = (e) => {
      console.log('Socket error:', e);
      toast.error("Socket connection failed");
      navigate('/Room');
    };

    const init = async () => {
      socketRef.current = await initSocket();
      console.log('Socket initialized');

      socketRef.current.on('connect_error', handleError);
      socketRef.current.on('connect_failed', handleError);

      socketRef.current.emit("join", {
        roomId,
        username: location.state?.username,
      });
      console.log('Join event emitted');

      socketRef.current.on('joined', ({ clients, username, socketId }) => {
        console.log('Joined event received', clients);
        if (username !== location.state?.username) {
          toast.success(`${username} joined`);
        }
        setClients(clients);
        socketRef.current.emit("sync-code", {
          code: codeRef.current,
          socketId,
        });
      });

      socketRef.current.on("disconnected", ({ socketId, username }) => {
        toast.success(`${username} left`);
        setClients((prev) => prev.filter((client) => client.socketId !== socketId));
      });
    };

    init();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current.off('connect_error', handleError);
        socketRef.current.off('connect_failed', handleError);
        socketRef.current.off('joined');
        socketRef.current.off('disconnected');
      }
    };
  }, [location.state, navigate, roomId]);

  const copyRoomId = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("Room ID copied");
    } catch (error) {
      toast.error("Unable to copy Room ID");
    }
  };

  const leaveRoom = () => {
    navigate('/Room');
  }

  return (
    <div className="editor-page">
      <div className="editor-sidebar">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="members-section">
          <span className="members-heading">Members</span>
          {clients.map((client) => (
            <Client key={client.socketId} username={client.username} />
          ))}
        </div>
        <button onClick={copyRoomId} className="btn copy-btn">
          Copy Room ID
        </button>
        <button onClick={leaveRoom} className="btn leave-btn">
          Leave Room
        </button>
      </div>
      <div className="editor-main">
        <Editor  
          socketRef={socketRef} 
          roomId={roomId}
          onCodeChange={(code) => {
            console.log('Code changed:', code);
            codeRef.current = code;
          }}
        />
      </div>
    </div>
  );
}

export default EditorPage;

/*import React from 'react';
import './EnterRoom.css'; // Import the CSS file

function EnterRoom() {
  return (
    <div className="enter-room">
      <div className="enter-room-header">
        <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
      </div>
      <div className="enter-room-form">
        <h2>Enter the ROOM ID</h2>
        <input type="text" placeholder="ROOM ID" />
        <input type="text" placeholder="USERNAME" />
        <button className="join-button">JOIN</button>
        <p>Don't have a room? <a href="#create">Create one</a></p>
      </div>
    </div>
  );
}

export default EnterRoom;
*/