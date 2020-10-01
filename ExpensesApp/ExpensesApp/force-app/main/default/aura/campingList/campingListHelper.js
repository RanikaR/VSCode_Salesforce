({
        validateFields : function (component,field) {
        
        var nameField = field;
        console.log('yes:'+nameField);
        var expname = nameField.get("v.value"); 
        if ($A.util.isEmpty(expname)){
           component.set("v.er",true);
           nameField.set("v.errors", [{message:"this field can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
    },
    
    createItem: function(component, item) {
        let action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);
    },
})