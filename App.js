//in jvascript

// const head=document.createElement("h1");
// const root=document.getElementById("root");
// head.innerHTML="hello world";
// root.appendChild(head);


// const heading = React.createElement("h1",{id:"heading"},"hello world");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello world from react"),
React.createElement("h2",{},"namaste")]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"hello world from react"),
React.createElement("h2",{},"namaste")])


]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 