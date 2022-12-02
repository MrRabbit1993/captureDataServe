import fs from "fs"
export function writeFileSync(filePath: any, fileContent: any) {
  fs.writeFileSync(filePath, fileContent)
}
export function readFileSync(filePath: any) {
  return fs.readFileSync(filePath,'utf-8')
}

export function readDirSync(filePath: any) {
  return fs.readdirSync(filePath)
}