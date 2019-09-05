setTimeout(function() {
    document.dispatchEvent(new CustomEvent('globalVarsListener', {
        detail: {
            shopifyData: JSON.stringify(window['ShopifyAnalytics']),
            fbData: functionToStr(window['fbq'])
        }
    }));
}, 0);

let functionToStr = (objWithFunction: Function) => {
    return objWithFunction.toString();
}