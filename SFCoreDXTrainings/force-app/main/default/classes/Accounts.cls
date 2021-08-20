public class Accounts extends fflib_SObjectDomain {
    
    public Accounts(List<Accounts> sObjectList) {
        super(sObjectList);
    }

    public class Constructor implements fflib_SObjectDomain.IConstructable {
        public fflib_SObjectDomain construct(List<SObject> sObjectList) {
            return new Accounts(sObjectList);
        }
    }

    public override void onApplyDefault() {
        for (Account acct : (List<Account>)Reccords) {
            acct.Description = 'Domain classes rock!';
        }
    }
}
