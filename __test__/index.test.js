const { generateJsonSchema } = require("../dist");

describe("generateJsonSchema", () => {
  it("should generate a JSON schema for a string", () => {
    const schema = generateJsonSchema("hello");
    expect(schema).toEqual({ type: "string" });
  });

  it("should generate a JSON schema for a number", () => {
    const schema = generateJsonSchema(123);
    expect(schema).toEqual({ type: "number" });
  });

  it("should generate a JSON schema for a boolean", () => {
    const schema = generateJsonSchema(true);
    expect(schema).toEqual({ type: "boolean" });
  });

  it("should generate a JSON schema for an array", () => {
    const schema = generateJsonSchema([1, 2, 3]);
    expect(schema).toEqual({ type: "array", items: { type: "number" } });
  });

  it("should generate a JSON schema for an object", () => {
    const schema = generateJsonSchema([
      { name: "John Doe", age: 30 },
      { name: "John Doe", age: 40 },
    ]);

    console.log(JSON.stringify(schema, null, 2));
    expect(schema).toEqual({
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          age: { type: "number" },
        },
        required: ["name", "age"],
      },
    });
  });
});
