<aura:application extends="force:slds">
        <!-- This component is the real "app" -->
        <c:expenses/>  
        <c:expensesList expenses="{!v.expenses}"/>  
</aura:application>