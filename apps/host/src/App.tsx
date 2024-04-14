import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import initStore from "./store";
import "./index.scss";
import { useStoreSelector } from "./use-selector";

const App = () => {
  const data = useStoreSelector((state) => state);
  console.log(data);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

initStore().then((Store) => {
  root.render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
});
