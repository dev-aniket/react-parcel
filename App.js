import React from "react";
import ReactDOM from 'react-dom/client';


const title =  (
    <h1 id="heading">React using JSX</h1>
);



const HeadingComponent = () => (
    <div className="container">
        <h2>{200 + 250}</h2>
        {title}
        <h1 id="heading">React from functional component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

