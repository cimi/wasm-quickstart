import './index.css';
import WasmLoader from "./SMHasher";

window.onload = () => {
  const locateFile = (path, prefix) => {
    console.log(path, prefix);
    return 'smhasher/SMHasher.wasm';
  }

  WasmLoader({ locateFile });
};
