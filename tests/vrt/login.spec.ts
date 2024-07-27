import { test, expect } from "@playwright/test";
import { SITE_URL } from "../constants";

test("/login SnapShot", async ({ page }) => {
  await page.goto(`${SITE_URL}login`);
  await expect(page).toHaveScreenshot(`login.png`);
});
