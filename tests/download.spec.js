import {test,expect} from '@playwright/test';

test.describe.parallel('Download', () => {
    test(`should download the file and verify its content @regression`, async ({ page, context }) => {

        await page.goto('https://rahulshettyacademy.com/upload-download-test/');
        await expect(page).toHaveTitle('RS Web Table Automation Page');
        const inputpromise = page.waitForEvent('filechooser');
        await page.locator(`input[type="file"]`).click();
        const fileChooser = await inputpromise;
        await fileChooser.setFiles('C:\\Users\\Kunal\\Downloads\\2651741655847601487174.pdf');
        await page.pause();
    });

    test  (`test download validation`, async ({ page, context }) => {
        await page.goto('https://rahulshettyacademy.com/upload-download-test/');
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Download').click();
        const download = await downloadPromise;
        await download.saveAs('C:\\Users\\Kunal\\Downloads\\downloadedFile.xlsx');
       
    })
});
