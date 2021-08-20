public class Accounts extends fflib_SObjectDomain {
    
    public Accounts(List<Accounts> sObjectList) {
        super(sObjectList);
    }

    public class Constructor implements fflib_SObjectDomain.IConstructable {
        public fflib_SObjectDomain construct(List<SObject> sObjectList) {
            return new Accounts(sObjectList);
        }
    }

    public override void onApplyDefaults() {
        for (Account acct : (List<Account>)Records) {
            if(acc.Description == null) {
                acct.Description = 'Domain classes rock!';
            }
            
        }
    }

    public override void handleBeforeInsert(){
        onApplyDefaults();
    }

    public override void onBeforeUpdate(Map<Id, SObject> Records) {
        String description = 'Domain classes rock!';
        List<Account> updatedAccounts = new List<Account>(); 

        for (Account acct: (List<Account>) Records) {
            acct.AnnualRevenue = description.getLevenshteinDistance(acc.Description);
            updatedAccounts.add(acc);
        }

        fflib_SObjectInitOfWork uow = 
            new fflib_SObjectUnitOfWork(
                new Schema.SObjectType[] {Account.SObjectType}
            );
            
        uow.registerDirty(updatedAccounts);
        
    } 
}
