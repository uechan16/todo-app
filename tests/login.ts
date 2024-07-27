import { Page, expect } from "@playwright/test";
import { SITE_URL } from "./constants";

export async function login(
  page: Page,
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  }
) {
  await page.goto(`${SITE_URL}login`);

  await page.getByPlaceholder("name@example.com").fill(email);
  await page.locator("#password").fill(password);

  await page.getByRole("button", { name: "Log in with Email" }).click();

  await expect(page.locator("h2")).toHaveText(email);
}
