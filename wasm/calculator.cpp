#include <emscripten/bind.h>

class Calculator {

public:
  Calculator() {
  }

  unsigned int factorial(unsigned int n) {
    int ret = 1;
    for(unsigned int i = 1; i <= n; ++i)
        ret *= i;
    return ret;
  }
};

EMSCRIPTEN_BINDINGS(calculator) {
  emscripten::class_<Calculator>("Calculator")
      .constructor()
      .function("factorial", &Calculator::factorial);
}
