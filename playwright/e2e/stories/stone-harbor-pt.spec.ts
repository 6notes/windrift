import { expect, test } from '@playwright/test'

test.describe('Full test of the Portuguese Stone Harbor demo', () => {
    test('Checks that Stone Harbor Portuguese works', async ({ page }) => {
        await page.goto('/stone-harbor-pt')
        await page.getByRole('link').filter({ hasText: 'roupas' }).click()
        await page.getByRole('link').filter({ hasText: 'anel' }).click()
        await page.getByRole('link').filter({ hasText: 'Nancy?' }).click()
        await page.getByRole('link').filter({ hasText: 'Nadine?' }).click()
        await expect(page.getByText('casamento')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'aparência' }).click()
        await page.getByRole('link').filter({ hasText: 'o escaldão a pelar' }).click()
        await expect(page.getByText('consegues algumas pistas')).toBeVisible()
        await expect(page.getByText('passar tempo ao ar livre')).toBeVisible()
        await expect(page.getByText('anel também ficou esquecido')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'cartão' }).click()
        await expect(page.getByText('cartão, que viras e lês')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'luva' }).click()
        await page.getByRole('link').filter({ hasText: 'luva' }).click()
        await expect(page.getByText('e tudo muda')).toBeVisible()
        await expect(page.locator('img[alt*="Um escritório pequeno"]')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'bibelôs' }).click()
        await page.getByRole('link').filter({ hasText: 'fotografia' }).click()
        await expect(page.getByText('objetos pessoais')).toBeVisible()
        await expect(page.getByText('Examinas a imagem.')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'luva zangada' }).click()
        await expect(page.getByText('Healey foi assassinado.')).toBeVisible()
    })
})
