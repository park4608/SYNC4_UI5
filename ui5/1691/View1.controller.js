sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync4.zfc1691.controller.View1", {
            onInit: function () {
                // this.getView().bindElement("/esStdSet('SNA-01')");
                // let oPanel = this.getView().byId("idPanel");
                // oPanel.bindElement("/esStdSet('SNA-01')");
            },
            onSearch: function() {
                let oView = this.getView();
                let oInput = oView.byId("idInput");
                let sId = oInput.getValue();

                let oPanel = oView.byId("idPanel");
                // let sPath = "/esStdSet(" + sId + "')";
                oPanel.bindElement(`/esStdSet('${sId}')`);
            }
        });
    });
