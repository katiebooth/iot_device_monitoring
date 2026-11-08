import {readFile} from "node:fs/promises"

export const loadJson = async (path: string) => {
    // use promises version rather than readFileSync to prevent blocking main thread
    // in practice the data would be read from a database, with pagination
    const text = await readFile(path, "utf8")
    return JSON.parse(text)
}