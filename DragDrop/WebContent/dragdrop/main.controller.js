sap.ui.controller("dragdrop.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf dragdrop.main
*/
	onInit: function() {
		
		var data = [
			{
				name:"Sachin Tendulkar",
				role:"Batsman",
				rating:"100"
			},
			
			{
				name:"Saurav Ganguly",
				role:"Batsman",
				rating:"78"
			},
			{
				name:"Rahul Dravid",
				role:"Batsman",
				rating:"99"
			},
			{
				name:"Yuvraj Singh",
				role:"All Rounder",
				rating:"80"
			},
			{
				name:"Virender Sehwag",
				role:"Batsman",
				rating:"92"
			},
			{
				name:"Suresh Raina",
				role:"Batsman",
				rating:"70"
			},
			{
				name:"MS Dhoni",
				role:"Keepr",
				rating:"86"
			},
			{
				name:"Zaheer Khan",
				role:"Bowler",
				rating:"90"
			},
			{
				name:"Harbhajan Singh",
				role:"Bowler",
				rating:"90"
			}
			
		];
		var model = new sap.ui.model.json.JSONModel({"players":data});
		
		var oPlayingModel  = new sap.ui.model.json.JSONModel({"playing": []});
		
		this.getView().setModel(model);
		this.getView().setModel(oPlayingModel, 'playing');
		
		//make list draggable
		
		var oDragList = this.byId("players");
		var idDragList = oDragList.getId();
		
		var oDropList = this.byId('playing'), 
			oDropListId = oDropList.getId();
		
		var that = this;
		oDragList.addEventDelegate({
			"onAfterRendering": function(oEvent) {
				$("#" + idDragList + "-listUl li").sortable({
				      revert: true
				});
				$("#" + idDragList + "-listUl li").draggable({
			         helper: "original"
			         
				});
			}
		});
		

		
		/*oDragList.onAfterRendering  =function (){
			 if (sap.m.List.prototype.onAfterRendering) {
	             sap.m.List.prototype.onAfterRendering.apply(this);
	         }
			$("#" + oDropListId + "-listUl li").sortable({
				      revert: true
				});
				
				$("#" + oDropListId).droppable({
					
					drop: function(evt, ui) {
//						debugger;
						var oControl = ui.draggable.control()[0];
//						debugger;
						var oContext = oControl.getBindingContext().getObject();
						var srcControl = evt.srcControl,
							oPlayingModel = srcControl.getModel("playing");
						
						oPlayingModel.getProperty("/playing").push(oContext);
						oPlayingModel.refresh();
//						$(this).droppable('enable');
//						oControl.destroy();
						
					}
				});
//				
		};*/
		 
		
	
		oDropList.addEventDelegate({
			
			"onAfterRendering": function(oEvent) {
				$("#" + oDropListId + "-listUl li").sortable({
				      revert: true
				});
				
//				$("#" + oDropListId + "-listUl li").draggable({
//			         helper: "clone"
//			         
//				});
				
				$("#" + oDropListId).droppable({
					
					drop: function(evt, ui) {
//						debugger;
						var oControl = ui.draggable.control()[0];
//						debugger;
						var oContext = oControl.getBindingContext().getObject();
						var srcControl = evt.srcControl,
							oPlayingModel = srcControl.getModel("playing");
						
						oPlayingModel.getProperty("/playing").push(oContext);
						oPlayingModel.refresh();
//						var oPlayerModel = oControl.getModel();
//						oControl.getParent().destroyItems();
//						oPlayerModel.refresh();
						
//						oControl.destroy();
					}
				});
				 
				
			}
		}, oDragList);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf dragdrop.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf dragdrop.main
*/
	onAfterRendering: function() {/*
		var oDragList = this.byId("players");
		var idDragList = oDragList.getId();
		
		var oDropList = this.byId('playing'), 
			oDropListId = oDropList.getId();
		$("#" + oDropListId + "-listUl li").sortable({
		      revert: true
		});
		
		$("#" + oDropListId).droppable({
			drop: function(evt, ui) {
//				debugger;
				var oControl = ui.draggable.control()[0];
//				debugger;
				var oContext = oControl.getBindingContext().getObject();
				var srcControl = evt.srcControl,
					oPlayingModel = srcControl.getModel("playing");
				
				oPlayingModel.getProperty("/playing").push(oContext);
				oPlayingModel.refresh();
			}
		});
	*/},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf dragdrop.main
*/
//	onExit: function() {
//
//	}

});