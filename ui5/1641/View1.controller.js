sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("sync4.zfc1641.controller.View1", {
            onInit: function () {
                let oData = {
                        classList: [
                            {class: "400004", cName: "Sync 4" },
                            {class: "400002", cName: "Sync 2" },
                        ],
                        stdList: [
                            {stdNo: "24040001", sName: "Kang"}, 
                            {stdNo: "24040002", sName: "Han"}
                        ]    
                };
                let oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                // 2nd Model
                let oData2 = {
                    classList: [
                        {key: "400004", text: "Sync 4" },
                        {key: "400002", text: "Sync 2" },
                    ],
                    stdList: [
                        {key: "24040001", text: "Kang"}, 
                        {key: "24040002", text: "Han"}
                    ]    
                };
                let oModel2 = new JSONModel();
                oModel2.setData(oData2);
                this.getView().setModel(oModel2, "2nd");
                // this.getView().setModel(oModel2);
            },
            onSearch: function() {
                let oComboBox = this.getView().byId("comboClass");
                let selectedKey = oComboBox.getSelectedKey();
                alert(selectedKey);
            },
            onSelectionChange: function(oEvent) {
                // console.log(oEvent.getSource().getSelectedKey());
                let oBindingContext = oEvent.getParameter("selectedItem").getBindingContext();
                let sPath = oBindingContext.getPath();
                alert(oBindingContext);
                console.log(oBindingContext);
                console.log(sPath)
                // alert(oBindingContext);
                // let oComboBox = this.getView().byId("comboClass");
                // let selectedKey = oComboBox.getSelectedKey();
                // alert(selectedKey);
            },
            onItem: function(oEvent) {
                let sTitle = oEvent.getParameters("listItem").listItem.getTitle();
                MessageBox.show(
                    sTitle,
                    {
                        title: "item text"
                    }
                )
            },
            onStd: function() {
                alert("onStd");
                let oList = this.getView().byId("list2nd");
                let sPath = oList.getBindingContext().getPath();
                console.log(sPath);
                oList.bindElement("2nd>/0");
            }
        });
    });
