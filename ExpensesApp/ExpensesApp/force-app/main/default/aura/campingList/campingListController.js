({
        // Load camping items from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        let action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },

    handleAddItem: function(component, event, helper) {
        var action = component.get("c.saveItem");
        action.setParams({"item" : newItem});
        action.setCall(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS") {
                console.log("Succeeded with state: " + state);
            } else {
                console.log("Failed with state: " + state);
            }
        });
    },


    
   /* createItem : function(component, event, helper){
        
        helper.validateFields (component,component.find("name"));
        helper.validateFields (component,component.find("Price"));
        helper.validateFields (component,component.find("Quantity"));
        if(component.get("v.er") === false)
        {     
            var Item = component.get("v.newItem");            
            helper.createItem (component,Item);             
                       
        }
    }   
    */ 
})