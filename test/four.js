

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
          it("get the text of the bulbs",async ()=>{
   
            let text=await $$("//h3/a");
            for(let i=0;i<text.length;i++){

                 console.log(await text[i].getText()+"is the price text");

            }
await browser.scroll(0,-400);
await $(".list").click();
              let text1=await $$("//h3/a");
            for(let i=0;i<text1.length;i++){

                 console.log(await text1[i].getText()+"is the price text for second one ");

            }
             await browser.scroll(0,400);
             let na=await $(".title").getText();
console.log(na+"is first in list view");
               })


               it("click on remove and validate the text",async ()=>{
                 await $(".remove").click();
                 let empty=await $(".list_empty").getText();
                 console.log(empty+"  is after removing the text");
                 await expect(browser).toHaveTitle('BATHROOM LIGHTS – kapoor Lampshades');
                    
                       
                       
                    })
    });
