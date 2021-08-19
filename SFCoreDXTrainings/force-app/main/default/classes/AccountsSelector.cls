public class AccountsSelector extends fflib_SObjectSelector {

    public List<Schema.SObjectField> getSObjectFieldList(){
        return new List<Schema.SObjectField> {
            Account.Name,
            Account.Description,
            Account.AnnualRevenue
        };
    }

    public List<Account> selectById(Set<ID> idSet) {
        return (List<Account>) selectObjectsById(idSet);
    }

}