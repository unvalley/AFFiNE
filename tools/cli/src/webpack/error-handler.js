(function () {
  var errorEl = null;
  function showGlobalErrorPage() {
    if (errorEl) {
      return;
    }

    errorEl = document.createElement('div');
    errorEl.innerHTML = [
      '<style>',
      '.gue {display:flex;flex-direction:column;align-items:center;justify-content:center;width:380px;}',
      '.gue img{width:380px;}',
      '.gue div{padding:16px 40px 0 40px;text-align:center;}',
      '.gue .p1{color:#141414;line-height:24px;font-weight:500;}',
      '.gue .p2{color:#7A7A7A;line-height:22px;}',
      '</style>',
      '<div class="gue">',
      '<img src="https://cdn.affine.pro/error.png" />',
      '<div>',
      '<p class="p1">Unsupported Environment</p>',
      '<p class="p2">',
      'It looks like AFFiNE cannot run in this environment.',
      "Please ensure you are using a supported browser or update your device's operating system to the latest version.",
      'If the issue persists, visit our <a href="https://github.com/toeverything/AFFiNE/issues">support page</a> for further assistance.',
      '</p>',
      '</div>',
      '</div>',
    ].join('');
    errorEl.setAttribute(
      'style',
      'position:absolute;top:0;left:0;height:100vh;width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center;background:white;z-index:999;'
    );
    document.body.append(errorEl);
  }

  function registerGlobalErrorHandler() {
    function handler(e) {
      var error =
        'error' in e ? e.error : e.reason instanceof Error ? e.reason : null;
      console.error('unhandled unrecoverable error', error);

      const shouldCache =
        // syntax error
        error && error instanceof SyntaxError;

      if (!shouldCache) {
        return;
      }

      e.stopImmediatePropagation();
      showGlobalErrorPage();
    }
    if (typeof document !== 'undefined') {
      globalThis.addEventListener('unhandledrejection', handler);
      globalThis.addEventListener('error', handler);
    }
  }

  function ensureBasicEnvironment() {
    var globals = ['Promise', 'Map', 'fetch', 'customElements'];

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < globals.length; i++) {
      if (!(globals[i] in globalThis)) {
        showGlobalErrorPage();
        return;
      }
    }
  }

  registerGlobalErrorHandler();
  ensureBasicEnvironment();
})();