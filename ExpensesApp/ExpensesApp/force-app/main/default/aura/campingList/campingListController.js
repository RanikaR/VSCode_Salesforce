({
    clickCreateItem: function(component, event, helper) {
        let validItem = component.find('campinglistform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
		}, true);
		
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new expense
            let newItem = component.get("v.newItem");
			console.log("Create item: " + JSON.stringify(newItem));
			var items = component.get("v.items");
			var item = JSON.parse(JSON.stringify(newItem));

			items.push(item);

			component.set("v.items", items);
			component.set("v.newItem", { 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
			'Price__c': 0,'Packed__c': false });
        }
    }
})