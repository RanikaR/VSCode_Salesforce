({
	createItem : function(component, newItem) {

		var createItem = component.getItem("createItem");
		createItem.setParams({"item":item});
		createItem.fire();

		// Resets fields to blank
		component.set("v.newItem",{'sobjectType':'Camping_Item__c',
		'Name': '',
		'Quantity__c': 0,
		'Price__c': 0,
		'Packed__c': false});
		
	}, 

	validateItemForm : function(component) {
		var validItem = true;

		var nameField = component.find("itemname");
		var itemname = nameField.get("v.value");

		if ($A.util.isEmpty(quantity)){
            validItem = false;
            quantityField.set("v.errors", [{message:"Quantity can't be blank."}]);
        }
        else {
            quantityField.set("v.errors", null);
        }
		// Price must not be blank
        var priceField = component.find("price");
        var price = priceField.get("v.value");
        if ($A.util.isEmpty(price)){
            validItem = false;
            priceField.set("v.errors", [{message:"Price can't be blank."}]);
        }
        else {
            quantityField.set("v.errors", null);
        }
            return validItem;
	}


})