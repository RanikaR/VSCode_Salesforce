({
    createExpense: function(component, expense) {
        let theExpenses = component.get("v.expenses");
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        let newExpense = JSON.parse(JSON.stringify(expense));
        
        // logging statement to see what component.set does
        console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
        theExpenses.push(newExpense);
        component.set("v.expenses", theExpenses);
        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));

        // component.set() does affect theExpenses, but it triggers notification that
        // the expenses attribute has changed. In order to trigger underlying effects
        // built into the Aura Components programming model, you need to use component.set()
    }
})