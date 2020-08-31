import { DAC } from "@laser-dac/core";
import config from "./config";
import { Scene, Rect } from "@laser-dac/draw";

(async () => {
  const { Device } = config;
  const dac = new DAC();
  dac.use(new Device());
  await dac.start();

  const scene = new Scene({
    resolution: 500,
  });
  scene.start(step);
  dac.stream(scene);

  function step() {
    const rect = new Rect({
      width: 0.2,
      height: 0.2,
      x: 0.4,
      y: 0.4,
      color: [1, 1, 0],
    });
    scene.add(rect);
  }
})();
