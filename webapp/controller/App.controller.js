sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (c) => {
    "use strict"

    return c.extend("com.logaligroup.controller.App", {
        onShowHello (){
            alert("Hi, everyone!");
        }
    });
});