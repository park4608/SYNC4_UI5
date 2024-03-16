sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync4.zfc1650.controller.View1", {
            onInit: function () {
                let oData = {
                    classList: [
                        {
                            class: "400001",
                            cName: "Sync 1",
                            stdList: [
                                { stdNo: "24040001", sName: "Kang1", gender: "2", genderKey: "Female" },
                                { stdNo: "24040002", sName: "Han1", gender: "1", genderKey: "Male" },
                            ],
                        },

                        {
                            class: "400004",
                            cName: "Sync 4",
                            stdList: [
                                { stdNo: "24040041", sName: "Kang4", gender: "1", genderKey: "Male" },
                                { stdNo: "24040042", sName: "Han4", gender: "2", genderKey: "Female" },
                            ],
                        },
                    ],
                };
                let oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                // let oComb = this.getView().byId("clsCombo");
                // oComb.setSelectedKey("400001"); // bindElement로 경로 string으로 넣어도 가능함.
            },
            onItemChange: function (oEvent) {
                let oItem = oEvent.getParameter("selectedItem");
                let sPath = oItem.getBindingContext().getPath();
                let oList = this.getView().byId("stdList");
                oList.bindElement(sPath);
            },
            onSearch: function() {
                let oComb = this.getView().byId("clsCombo");
                let oItem = oComb.getSelectedItem();
                let sPath = oItem.getBindingContext().getPath();

                let oList = this.getView().byId("stdList");
                oList.bindElement(sPath);
            },
            onItemPress: function(oEvent) {
                let oItem = oEvent.getSource();
                let sPath = oItem.getBindingContextPath();

                let oList = this.getView().byId("infoPanel");
                oList.bindElement(sPath);
                oList.setExpanded(true);
            },
            onTest: () => {

            }
        });
    }
);
