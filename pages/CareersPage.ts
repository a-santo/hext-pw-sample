import { Locator, Page } from '@playwright/test';

export class CareersPage {

    readonly page: Page;
    readonly locationHK: Locator;
    readonly locationSG: Locator;
    readonly locationVN: Locator;
    readonly locationFL: Locator;
    readonly carrerItems: Locator;
    readonly hongKongLink: Locator;
    readonly singaporeLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locationHK = page.locator('#Checkbox-0');
        this.locationSG = page.locator('#Checkbox-1');
        this.locationVN = page.locator('#Checkbox-2');
        this.locationFL = page.locator('#Checkbox-3');
        this.carrerItems = page.locator('.careers-collection-item')
        this.hongKongLink = page.locator('label.w-checkbox', { hasText: 'Hong Kong'})
        this.singaporeLink = page.locator('label.w-checkbox', { hasText: 'Singapore'})
    }

    async goto() {
        await this.page.goto('/company/careers');
    }

    async countCarreerItems() {
        return this.carrerItems.count()
    }
}