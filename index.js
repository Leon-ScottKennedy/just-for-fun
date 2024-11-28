window.addEventListener('load', (event) => {
  // 检查 URL 中是否有锚点
  if (window.location.hash) {
    // 替换当前 URL，移除锚点
    window.history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
    // 滚动到页面顶部
    window.scrollTo(0, 0);
  }
});