({
	clickCreateItem : function(component, event, helper) {
        if(helpder.validateItemForm(component)) {
            // Create the new camping list item
            let newItem = component.get("v.newItem");
            helper.createItem(component, newItem);
        }
	}
})