export function setupHMR() {
  let hmrStartTime = 0;
  let hmrEndTime = 0;
  console.log("Happy nhieu hieu ");
  if (import.meta.hot) {
    import.meta.hot.accept((module) => {
      // Ghi lại thời gian khi bắt đầu cập nhật HMR
      hmrStartTime = performance.now();
      console.log("HMR update started at:", hmrStartTime);

      // Khi mô-đun được cập nhật
      import.meta.hot.on("update", () => {
        hmrEndTime = performance.now();
        const hmrDuration = hmrEndTime - hmrStartTime;
        console.log(hmrDuration);
        console.log("HMR update finished at:", hmrEndTime);
        console.log(`HMR update duration: ${hmrDuration.toFixed(2)} ms`);
      });
    });
  }
}
