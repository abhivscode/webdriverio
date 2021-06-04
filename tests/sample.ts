describe('Facebook page testing', ()=> {

    it('launch the facebook and check title', async () => {
        browser.url('https://en-gb.facebook.com/')
        let txt_username_fb = await $('//input[@id="email"]')
        await txt_username_fb.setValue('abhishek')
        let usernamegetvalue = await txt_username_fb.getValue()
        console.log('getvalueofusername ==> '+usernamegetvalue)
        await txt_username_fb.clearValue()
        await browser.pause(3333)
        browser.back();
        console.log('backword done..!!!')
        await browser.pause(3333)
        browser.forward();
        console.log('forward done..!!')
        console.log('get title ==>> '+await browser.getTitle())
        console.log('get url ==>> '+await browser.getUrl())

        let btn_createnewaccount_fb = await $('//a[text()="Create New Account"]')
        await btn_createnewaccount_fb.click();
        await browser.pause(3333)
        let dd_day_facebook = await $('#day')
        await dd_day_facebook.selectByIndex(4);
        console.log("selecyted index by 4")

        let dd_month_facebook = await $('#month')
        await dd_month_facebook.selectByVisibleText("Aug")
        console.log("selectByVisibleText Aug")

        let dd_year_facebook = await $('#year')
        await dd_year_facebook.selectByAttribute('value',"2016")
        console.log("selectByAttribute 2016")

    })

})