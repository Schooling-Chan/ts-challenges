import fs from "fs";
import path from "path";
import { __dirname } from "./constants";

const fileName = process.argv[3];

const targetPath = path.resolve(__dirname, "../type-template", fileName);
const srcPath = path.resolve(__dirname, "./template");

function renderTemplate(src: string, target: string) {
  const stats = fs.statSync(src);

  // 递归生成文件
  if (stats.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      renderTemplate(path.resolve(src, file), path.resolve(target, file));
    }
    return;
  }

  fs.copyFileSync(src, target);
}

renderTemplate(srcPath, targetPath);

console.log("DONE!");
