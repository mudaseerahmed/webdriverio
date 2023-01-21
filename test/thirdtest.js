

describe("verify",async()=>{

    it("verify url",async ()=>{
       await browser.maximizeWindow()
       await browser.url("https://www.kapoorlampshades.com/");
       await expect(browser).toHaveTitle('kapoor Lampshades');
    
    })

    it("click on shop ",async ()=>{
        await $("(//ul/li/a[text()='Shop'])[2]").click();
       // await $("//a[contains(text(),'BATHROOM')]").click();
         
         
      })

      it("click on links one by one ",async ()=>{
        let link=await $$("//div[@class='sidebar-inner']//ul/li/a");
        let y=100;
      for(let i=0;i<link.length;i++){
          y=y+50;
      await browser.scroll(0,y);
    await link[i].click();
      console.log(await link[i].getText()+"is"+i);
    //   await browser.pause(3000);
    
    //
    
      }
      await browser.scroll(0,300);
    
        });

});
