({
	createItem : function(component, newItem) {

		var createItem = component.getItem("createItem");
		createItem.setParams({"item":item});
		createItem.fire();

		component.set("v.newItem", {
			'sobjectType' : 'Camp0ing_Item__c', 
			'Name' : '',
			'Quantity__c' : 0, 
			'Price__c' : 0,
			'Packed__c' : false
		})
		
	}, 

	
})