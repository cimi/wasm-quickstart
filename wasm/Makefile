export EMCC_DEBUG=1

wasm-loader.js: calculator.cpp
	em++ --bind --std=c++11 -O3 calculator.cpp -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE=1 -s ASSERTIONS=1 -o wasm-loader.js

../public/calculator.wasm: wasm-loader.js
	mv wasm-loader.wasm ../public/calculator.wasm

../src/wasm-loader.js: wasm-loader.js
	echo "/* eslint-disable */" | cat - wasm-loader.js > /tmp/out && mv /tmp/out wasm-loader.js
	rm *.temp.asm.js
	mv wasm-loader.js ../src/wasm-loader.js

all: ../public/calculator.wasm ../src/wasm-loader.js

clean:
	rm -f *.js ../public/calculator.wasm ../src/wasm-loader.js
