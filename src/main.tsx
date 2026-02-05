import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Debug: Confirm execution
const debugDiv = document.createElement('div');
debugDiv.style.position = 'fixed';
debugDiv.style.bottom = '10px';
debugDiv.style.right = '10px';
debugDiv.style.background = 'green';
debugDiv.style.color = 'white';
debugDiv.style.padding = '5px';
debugDiv.style.zIndex = '10000';
debugDiv.innerText = 'JS Executed';
document.body.appendChild(debugDiv);
console.log("Main Executed");
