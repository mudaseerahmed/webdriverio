

describe("verify",async()=>{

it("verify url",async ()=>{
   await browser.maximizeWindow()
   await browser.url("https://www.kapoorlampshades.com/");
   await expect(browser).toHaveTitle('kapoor Lampshades');

})
it("click on shop and click on first link",async ()=>{
  await $("(//ul/li/a[text()='Shop'])[2]").click();
  await $("//a[contains(text(),'BATHROOM')]").click();
   
   
})
it("get price for first product",async ()=>{
 let pr= await $("(//div[@class='price-box']//ins//bdi)[1]").getText()
   console.log(pr+" is the text");
   let result=pr.substring(1);
   console.log(result+" is without sysmbol");


   
   
})
it("enter text in textbox",async ()=>{
   
  await $("#ws").setValue("table lamp 35");
  await $('#wsearchsubmit').click();
  
     
     
  })

  it("get price of bulbs",async ()=>{
    let price=await $$("//div[@class='gridview']//div[@class='price-box']//ins//bdi");
  for(let i=0;i<price.length;i++){
    console.log(await price[i].getText()+"-->is the price of bulbs");

  }

    });
    it("get name of bulbs",async ()=>{
      let price=await $$("//div[@class='gridview']//h3/a");
    for(let i=0;i<price.length;i++){
      console.log(await price[i].getText()+"-->is the text of the bulb");
  
    }
  
      });
    
  
  

  

});