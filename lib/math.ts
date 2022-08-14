import path from "path";
import fs from "fs";

const testPath = path.join(process.cwd(), "public", "example.mdx");

export const testFunc = async () => {
  return await fs.readFileSync(testPath, "utf8");
};
