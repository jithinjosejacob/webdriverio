
describe('Login to application', () => {
    it('should login to application when login is clicked', async () => {
        let context =await driver.getContext()
        //  const locator = await $("android.widget.Button")
        console.log(context)
        const locator = await $("//*[contains(@text,'Login')]")
        await locator.click() 

        console.log(locator)    
    })
})





 