

describe("verify",async()=>{

    it("verify url",async ()=>{
       await  browser.maximizeWindow()
       await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    //   await expect(browser).toHaveTitle('kapoor Lampshades');
    
    })
    it("scroll till hover",async ()=>{

        await browser.scroll(0,1000);
        await $("#mousehover").moveTo();
        await browser.pause(10000);
        await $("//a[text()='Top']").click();
       
       
    })
});