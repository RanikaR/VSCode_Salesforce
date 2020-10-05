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

    handleAddItem : function(component, event, helper){
        var newCampingItem = event.getParam('item');

        //var theItems = component.get("v.items");
        //theItems.push(newCampingItem);
        //component.set("v.items", theItems);

        //helper.createItem(component, newCampingItem);
        var saveItemAction = component.get('c.saveItem');
        saveItemAction.setParams({ 'campingItem' :  newCampingItem });

        saveItemAction.setCallback(this, function(response){
            var respState = response.getState();
            console.log(respState);
            if( respState == 'SUCCESS'){
                var theItems = component.get("v.items");
                theItems.push(response.getReturnValue());
                component.set("v.items", theItems);
            }
        });

        $A.enqueueAction(saveItemAction);
    }

    

    
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