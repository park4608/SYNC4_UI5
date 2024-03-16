sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync4.zfc1660.controller.View1", {
            onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);
            },
            onPressItem: function(oEvent) {
                // let oItem = oEvent.getParameter("listItem");
                // let sPath = oItem.getBindingContext().getPath();

                let oContext = oEvent.getSource().getBindingContext();
                let sPath = oContext.getPath();
                
                let oTable = this.getView().byId("connectionTable");
                oTable.bindElement(sPath);
            }
        });
    });
