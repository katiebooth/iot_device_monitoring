import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFile } from "node:fs/promises";
import { loadJson } from "./DeviceService";

vi.mock("node:fs/promises", () => ({
  readFile: vi.fn(),
}));

const mockedReadFile = vi.mocked(readFile); 

describe("loadJson", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should read and parse a valid JSON file", async () => {
    const mockData = {
      device_id: "device_001",
      temperature: 22.5,
      humidity: 0.65,
    };

    mockedReadFile.mockResolvedValue(JSON.stringify(mockData));

    const result = await loadJson("./devices.json");

    expect(result).toEqual(mockData);
    expect(mockedReadFile).toHaveBeenCalledWith(
      "./devices.json",
      "utf8"
    );
    expect(mockedReadFile).toHaveBeenCalledTimes(1);
  });

  it("should return an array of JSON objects", async () => {
    const mockData = [
      { device_id: "device_001", temperature: 21.5 },
      { device_id: "device_002", temperature: 23.1 },
    ];

    mockedReadFile.mockResolvedValue(JSON.stringify(mockData));

    const result = await loadJson("./devices.json");

    expect(result).toEqual(mockData);
    expect(result).toHaveLength(2);
  });

  it("should throw an error if the file cannot be read", async () => {
    const error = new Error("ENOENT: no such file or directory");

    mockedReadFile.mockRejectedValue(error);

    await expect(
      loadJson("./something_else.json")
    ).rejects.toThrow("ENOENT");
  });

  it("should throw an error for invalid JSON in file", async () => {
    mockedReadFile.mockResolvedValue("{ invalid json }");

    await expect(
      loadJson("./invalid.json")
    ).rejects.toThrow(SyntaxError);
  });
});