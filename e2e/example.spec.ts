import {expect, test} from '@playwright/test';
import { CareersPage } from '../pages/CareersPage'

let carrersPage: CareersPage

test.beforeEach(async ({ page }) => {
  carrersPage = new CareersPage(page)
});

test.describe.parallel('Carrer Locations', () => {
  test('All locations visible', async ({page}) => {
    await carrersPage.goto()
    await carrersPage.locationHK.isVisible()
    await carrersPage.locationSG.isVisible()
    await carrersPage.locationVN.isVisible()
    await carrersPage.locationFL.isVisible()
  });

  test('Correct number of jobs displayed for Hong Kong', async () => {
    await carrersPage.goto()
    await carrersPage.hongKongLink.click()
    expect(await carrersPage.countCarreerItems()).toEqual(17)
  })
})
