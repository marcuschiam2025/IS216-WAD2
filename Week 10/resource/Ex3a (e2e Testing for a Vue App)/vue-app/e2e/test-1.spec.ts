import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('NormalUser');
  await page.getByRole('spinbutton', { name: 'Score:' }).click();
  await page.getByRole('spinbutton', { name: 'Score:' }).fill('67');
  await page.getByRole('button', { name: 'Submit' }).click();

  expect(page.getByText('Grade: C')).toBeVisible;
  expect(page.getByText('NormalUser')).toBeVisible;
});

test('test2', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('NormalUser');
  await page.getByRole('spinbutton', { name: 'Score:' }).click();
  await page.getByRole('spinbutton', { name: 'Score:' }).fill('96');
  await page.getByRole('button', { name: 'Submit' }).click();

  expect(page.getByText('Grade: A')).toBeVisible;
  expect(page.getByText('NormalUser')).toBeVisible;
});

test('test3', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('NormalUser');
  await page.getByRole('spinbutton', { name: 'Score:' }).click();
  await page.getByRole('spinbutton', { name: 'Score:' }).fill('37');
  await page.getByRole('button', { name: 'Submit' }).click();

  expect(page.getByText('Grade: F')).toBeVisible;
  expect(page.getByText('NormalUser')).toBeVisible;
});