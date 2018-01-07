import './index.css';
import WasmLoader from "./wasm-loader";
import registerServiceWorker from './registerServiceWorker';

window.onload = () => {
  WasmLoader({ wasmBinaryFile: "calculator.wasm" }).then(WasmModule => {
    WasmModule.addOnPostRun(() => {
      const calculator = new WasmModule.Calculator();
      console.log(calculator.factorial(11));
    });
  });
};

registerServiceWorker();
