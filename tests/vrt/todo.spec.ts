import { test, expect } from "@playwright/test";
import { SITE_URL, USER } from "../constants";
import { describe } from "node:test";
import { login } from "../login";

describe("/todo SnapShot", () => {
  test("empty list", async ({ page }) => {
    await login(page, USER["ue-test01"]);
    await page.goto(`${SITE_URL}todo`);
    await expect(page).toHaveScreenshot(`todo_empty-list.png`);
  });

  test("Items with one entry and the Todo is Completed", async ({ page }) => {
    await login(page, USER["ue-test09"]);
    await page.goto(`${SITE_URL}todo`);
    await expect(page).toHaveScreenshot(`todo_one-entry-completed.png`);
  });

  test("Items with one entry and the Todo is Block", async ({ page }) => {
    await login(page, USER["ue-test10"]);
    await page.goto(`${SITE_URL}todo`);
    await expect(page).toHaveScreenshot(`todo_one-entry-block.png`);
  });

  test("Items with 10 entry and the Todo is Block", async ({ page }) => {
    await login(page, USER["ue-test03"]);
    await page.goto(`${SITE_URL}todo`);
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot(`todo_10-entry.png`);
  });
});
