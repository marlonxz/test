sap.ui.define([
    "sap/ui/core/mvc/XMLView"
//    "sap/m/Text"
], (x) => {
    "use strict";

//    new t({
//        text: "Hi, everyone!"
//    }).placeAt("content");
    x.create({
        viewName: "com.logaligroup.view.App"
    }).then((oView)=> {
        oView.placeAt("content");
    });

});