sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (c, m, j,  r) => {
    "use strict"

    return c.extend("com.logaligroup.controller.App", {
        onInit (){
            const oData =  {
                name: "Logali Group"
            };
            const oModel = new j(oData);
            this.getView().setModel(oModel, "view");

            const i18nModel = new r({
                bundleName:  "com.logaligroup.i18n.i18n"
            });

            this.getView().setModel(i18nModel, "i18n");
        },
        onShowHello (){
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sName = this.getView().getModel("view").getProperty("/name");
            const sMessage = oBundle.getText("helloMessage", [sName, "Marlon Rodriguez", "Brigite Tarazona"]);
            m.show(sMessage);
        }
    });
});