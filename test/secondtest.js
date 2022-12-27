

describe("verify",async()=>{

    it("verify url",async ()=>{
       await  browser.maximizeWindow()
       await browser.url("https://www.kapoorlampshades.com/");
       await expect(browser).toHaveTitle('kapoor Lampshades');
    
    })
    it("click on shop and click on first link",async ()=>{
      await $("(//ul/li/a[text()='Shop'])[2]").click();
      await $("//a[contains(text(),'BATHROOM')]").click();
       
       
    })

    it("move to wishlist element",async ()=>{
      const elem = await $("//div[@class='gridview']//a[contains(text(),'62')]//preceding::img[2]");
      await browser.pause(3000);
      await elem.scrollIntoView();
      await $("//div[@class='gridview']//a[contains(text(),'62')]//preceding::img[2]").moveTo();
      const el=await $("(//ul//li/div//following::a[1]/i/..)[1]");
      await el.click();
       
    })

    it("move mouse on my account page and click on wishlist ",async ()=>{
      const elem = await $("//a[text()='My Account']");
      await elem.scrollIntoView();
     /* await $("//a[text()='My Account']").moveTo();
     
      await browser.pause(3000);
  
      
     
     */
    
    /*  const el=await $("//ul[@id='menu-top-menu']//a[text()='Wishlist']");
      await el.click();
*/
       
    })
    it("move mouse on my account page ",async ()=>{
      await browser.scroll(0,-600)
      await browser.pause(3000);
      await $("//a[text()='My Account']").moveTo();
    })
    it("click on wishlist",async ()=>{
      await $("//ul[@id='menu-top-menu']//a[text()='Wishlist']").click();

    })
    it("get text of the product",async ()=>{
      let text=await $("//tr[1]//td[3]/a");
      console.log(await text.getText()+"------>");

    })

 it("remove the product",async ()=>{
      let text=await $("//tr[1]/td[1]//a");
     await text.click();
     //div[contains(text(),'removed')]
    })
it("get text of  the product",async ()=>{
      let text=await $("//div[contains(text(),'removed')]");
     console.log(await text.getText()+"is the text after removing");
     
    })
    it("enter text in textbox",async ()=>{
   
      await $("#ws").setValue("table lamp 35");
      await $('#wsearchsubmit').click();

    
      })
      it("click on first link",async ()=>{
    //  await $("#ws").setValue("table lamp 35");
        await $('(//div[@class="gridview"]//h3/a)[2]').click();

   })

   it("click on add to cart",async ()=>{

    await $('[name="add-to-cart"]').click();
     

  })
    it("move mouse on cart and click on view cart",async ()=>{

    await $('//span[text()="My Cart:"]/..').moveTo();
   await $('//p[@class="buttons"]//a[text()="View Cart"]').click();
     

  })
    it("get value of input text and the price",async ()=>{

   let form = await $('//div[@class="quantity"]//input');
   let attr=await form.getAttribute('value');
   console.log(attr+"---->");
  let pr=await $('//tr//td[3]//bdi').getText();
  let result=pr.substring(1);
  console.log(result+"is the value");
  let re=result.replace(",","");
  let val=attr*re;
  parseInt(val);
  console.log(val+" is the total calc value");
  let act= await $('//tr[1]//td[5]//bdi').getText();
  let tr=act.substring(1);
  let act2=tr.replace(",","");
  console.log("the value before parsenint is "+act2);
  var x=Math.round(act2);

  console.log("the act value is "+x);
 
 console.log(x===val);
w=x===val;
console.log(w);
if(w){
  console.log("both are equal");

}
else{

  console.log("both are  not equal");
}




})
 it("enter text in textbox",async ()=>{
   
      await $("#ws").setValue("JC-02/01");
      await $('#wsearchsubmit').click();

   })
     it("click on add to cart",async ()=>{

    await $('[name="add-to-cart"]').click();
     

  })

    it("move mouse on cart and click on view cart",async ()=>{

    await $('//span[text()="My Cart:"]/..').moveTo();
   await $('//p[@class="buttons"]//a[text()="View Cart"]').click();
     

  })
    it("clear text and enter 2",async ()=>{
    await $('//tr[2]//td[4]//input').clearValue();
    await $('//tr[2]//td[4]//input').setValue("2");
})
  it("get row count and text of the price",async ()=>{
  let leng= await $$('//tr//td[@class="product-thumbnail"]');
  let le=leng.length;
  console.log(le+"is the length");
  //tr//td[3]//bdi
  let price=await $$("//tr//td[3]//bdi");
  //price=price.getText();
 
  let sum=0;
  for(let i=0;i<price.length;i++){

    let pr2=await price[i].getText()+"-->is the price of bulbs in list view ";
   // console.log(await price[i].getText()+"-->is the price of bulbs in list view ");
console.log(pr2);
let pr3=pr2.substring(1);
let pr4=pr3.replace(",","");
console.log(pr3+"is the  text without rupee");
console.log(pr4+"is the text without comma");
let pr5=parseInt(pr4);


console.log(pr5+"  is the value after conversion");

sum=sum+pr5;




  // const one=await price.filter(pr => pr.substring(1));
  // console.log(await price[i].slice(1)+"is the second item");
  

 //   price[i]=await price[i].getText().substring(1);


  
}
console.log(sum+"  is the total value");
})
/*
it("replace comma with blank ",async ()=>{
  var strArray = browser.getHTML("//tr//td[3]//bdi");
  for(var i=0;i<strArray.length;i++){
    strArray[i]= strArray[i].replace(",","");
    console.log(strArray[i]);

  }
  
  
})

*/
});