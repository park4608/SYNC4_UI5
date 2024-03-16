sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter) {
        "use strict";

        return Controller.extend("sync4.zfc1680.controller.View1", {
            onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);
            },
            onClick: function(oEvent) {
                let oContext = oEvent.getSource().getBindingContext();
                // let oProperty = oContext.getProperty();
                // alert(oProperty.Class);
                let oModel = this.getView().getModel();
                let selClass = oModel.getProperty("Class", oContext);
                let oTableConn = this.getView().byId("idTabConn");
                let oFilter = new Filter(
                    "Stcla", "EQ", selClass
                );
                oTableConn.getBinding("items").filter(oFilter);
                // console.log(oModel);
            }
        });
    });
