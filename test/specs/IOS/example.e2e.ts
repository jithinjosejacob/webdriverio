describe('IOS Login to application', () => {
    it('should login to application when login is clicked', async () => {
       await browser.pause(2000)
       const locator = await $("~Login")
       await locator.click() 
       await browser.pause(2000)
    })
})
