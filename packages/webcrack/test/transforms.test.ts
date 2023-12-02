import { expect, test } from "vitest";
import { webcrack } from "../src";

test("decode bookmarklet", async () => {
  const code = `javascript:(function()%7Balert('hello%20world')%3B%7D)()%3B`;
  const result = await webcrack(code);
  expect(result.code).toMatchInlineSnapshot(`
    "(function () {
      alert(\\"hello world\\");
    })();"
  `);
});
