import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { readFile, writeFile } from "fs/promises";

const width = 800;
const height = 800;
const COLORS = ["red", "blue", "green", "purple", "orange", "gray"];
const backgroundColor = "white";
const chartJSNodeCanvas = new ChartJSNodeCanvas({
  width,
  height,
  backgroundColor,
});

function defineLabels(length) {
  const step = 360 / length;
  const labels = [];
  for (let angle = 0; angle <= 360; angle += step) {
    labels.push(angle);
  }
  return labels;
}

async function drawDiagramm(fileNames) {
  let i = 0;
  const datasets = [];
  let labels;
  for (const fileName of fileNames) {
    const COLOR = COLORS[i] || "black";
    const rcs = JSON.parse(await readFile(`${fileName}.json`, "utf-8"));
    rcs.push(rcs[0]);
    labels = labels ? labels : defineLabels(rcs.length);
    datasets.push({
      label: fileName,
      data: rcs,
      fill: false,
      borderColor: COLOR,
      pointRadius: 0,
    });
    i++;
  }
  const data = {
    labels,
    datasets,
  };
  const config = {
    type: "radar",
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3,
        },
      },
      plugins: {
        legened: {
          display: false,
        },
      },
      scales: {
        r: {
          pointLabels: {
            display: false,
          },
          angleLines: {
            display: false,
          },
        },
      },
    },
    plugins: [
      {
        id: "background-color",
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          ctx.save();
          ctx.fillStyle = "white"; // Білий фон
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        },
      },
    ],
  };
  const image = await chartJSNodeCanvas.renderToBuffer(config);
  await writeFile("test.png", image);
}

drawDiagramm(["result1", "result2"]);
