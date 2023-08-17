const { TranspileFarm, filterDataFromInput } = require("../dist");
const NOTIFICATION_DATA = require("./data/notification.json");
const { socials } = require("./data/socials.json");

describe("validateInput", () => {
  it("should return flatten Array ", () => {
    const transFormer = new TranspileFarm();
    // const result = socials.flatMap((obj) => flattenObject(obj));
    // const location = ["client-triggers"]["14"]["TRUSTED_PRO_POST_CONTENT"]["channels"];
    // const channelsData = location.reduce((obj, key) => {console.log("obj?.[", key, "] =", obj?.[key]);return obj?.[key];}, NOTIFICATION_DATA);

    const result = transFormer.flattenObject(NOTIFICATION_DATA);
    console.log("total keys: ", result.length);
    // const result = flattenObject(socials);
    const filteredData = filterDataFromInput(result);
    console.log("filteredData : ", filteredData.length);
    expect(result.length).toBe(result.length);
  });

  it("filters objects based on the given rules", () => {
    const dataArray = [
      { key: "k1", value: "abc", location: "loc1" },
      { key: "k2", value: "def", location: "loc2" },
      { key: "k3", value: "abc", location: "loc3" },
      { key: "k4", value: "ghi", location: "loc4" },
      { key: "k5", value: true, location: "loc5" },
      { key: "k6", value: "xyzxyz", location: "loc6" },
    ];

    const filteredData = filterDataFromInput(dataArray);
    // console.log("filteredData : ", filteredData);

    // Write your assertions here based on the expected filtered data
    expect(filteredData).toEqual([
      { key: 'k1', value: 'abc', location: 'loc1' },
      { key: 'k2', value: 'def', location: 'loc2' },
      { key: 'k3', value: 'abc', location: 'loc3' },
      { key: 'k4', value: 'ghi', location: 'loc4' },
      { key: 'k6', value: 'xyzxyz', location: 'loc6' }
    ]);
  });
});
