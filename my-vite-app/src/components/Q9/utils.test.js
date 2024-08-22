// utils.test.js
import { add, fetchData } from "./utils";

// Test for the add function
describe("add function", () => {
  it("returns the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
  });
});

// Test for the fetchData function
describe("fetchData function", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it("fetches data successfully", async () => {
    const mockData = { name: "Test Data" };
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await fetchData();
    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/data");
  });

  it("handles fetch failure", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Fetch error"));

    await expect(fetchData()).rejects.toThrow("Fetch error");
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

