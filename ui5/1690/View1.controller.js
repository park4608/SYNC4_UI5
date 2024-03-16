sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync4.zfc1690.controller.View1", {
            onInit: function () {
            },
            onSearch: function() {
                alert("press");
                let inpLoc = this.getView().byId("locInput").getValue();
                let oTable = this.getView().byId("classTable");
                let oFilter = new sap.ui.model.Filter("Region", "EQ", inpLoc);
                oTable.getBinding("items").filter(oFilter);
            }
        });
    });
