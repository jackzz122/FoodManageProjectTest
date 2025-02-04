import { open } from "node:fs/promises";

(async () => {
  const fileReadHandle = await open("../stats.html", "r");
  const fileWriteHandle = await open("ResultBundleSize.js", "w");
  const fileReadStream = fileReadHandle.createReadStream();
  const fileWriteStream = fileWriteHandle.createWriteStream();

  let data = " ";

  fileReadStream.on("data", (chunk) => {
    data += chunk.toString("utf8");
    if (!fileWriteStream.write(chunk)) fileReadStream.pause();
  });

  fileWriteStream.on("drain", () => {
    fileReadStream.resume();
  });
  fileReadStream.on("end", () => {
    let jsonData = JSON.parse(data);
    const filterResult = jsonData.assets.filter((asset) => {
      return asset.name.includes("app.jsx");
    });
    filterResult.forEach((asset) => {
      console.log(`${asset.name}: ${(asset.size / 1024).toFixed(2)} KB`);
    });
    fileReadStream.close();
    fileWriteStream.close();
    fileReadHandle.close();
    fileWriteHandle.close();
  });
})();
