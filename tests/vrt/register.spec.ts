import { test, expect } from "@playwright/test";
import { SITE_URL } from "../constants";

test("/register SnapShot", async ({ page }) => {
  await page.goto(`${SITE_URL}register`);
  await expect(page).toHaveScreenshot(`register.png`);
});
