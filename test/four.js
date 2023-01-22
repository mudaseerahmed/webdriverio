

describe("verify",async()=>{

    it("verify url",async ()=>{
       await browser.maximizeWindow()
       await browser.url("https://www.kapoorlampshades.com/");
       await expect(browser).toHaveTitle('kapoor Lampshades');
    
    })

    it("click on shop ",async ()=>{
        await $("(//ul/li/a[text()='Shop'])[2]").click();
       // await $("//a[contains(text(),'BATHROOM')]").click();
       let link=await $$("//span[@class='count']");
       for(let i=0;i<link.length;i++){
       console.log(await link[i].getText()+"is"+i);
    
}
 await $("//ul/li/a[text()='BATHROOM LIGHTS']").click();
 await browser.scroll(0,400);
await $("(//div[@class='product-image']/a)[1]").moveTo();
await $("(//a[@class='compare button'])[1]").moveTo();
await $("(//a[@class='compare button'])[1]").click();
await $("#cboxClose").click();
let na=await $("(//h3[@class='product-name'])[1]").getText();
console.log(na+"is first");

         
         
      })

    });
