module.exports = {
    
    elements: {
      header: "span[class=title]",
      menu:"#react-burger-menu-btn",
      logOut:"#react-burger-menu-btn",
      producto:{        
        selector:"//div[text()='Sauce Labs Backpack']",
        locateStrategy:'xpath'},
        cart:"#shopping_cart_container"
        

    }
    
    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }
    
}
