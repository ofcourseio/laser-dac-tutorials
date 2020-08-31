const fs = require("fs");
const exec = require("child_process").exec;
const filePath = "./src";

bundle();
execute("npx nodemon dist/index.js", {
    start:"start nodemon"
})

let lastUpdateTime = 0;
fs.watch(filePath, { recursive: true }, (event, filename) => {
  // shaking
  const diff = Date.now() - lastUpdateTime;
  lastUpdateTime = Date.now();
  if (diff < 100) return;

  // begin bundle
  console.log(`🌈 [${event}]: ${filename}`);
  bundle();
});

function bundle() {
  execute("yarn run build", {
    start: "🚀 Begin bundling...",
    end: "✅ Bundle success!"
  });
}

function execute(cmd, options) {
  options.start && console.log(options.start);
  exec(cmd, () => {
    options.end && console.log(options.end);
    options.cb && options.cb();
  });
}
