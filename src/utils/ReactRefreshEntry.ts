if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const runtime = require('react-refresh/runtime');
  runtime.injectIntoGlobalHook(window);
  (window as any).$RefreshReg$ = (): void => undefined;
  (window as any).$RefreshSig$ = () => <T>(type: T) => type;
}