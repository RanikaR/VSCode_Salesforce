public class AccountsSelector extends fflib_SObjectSelector {

    public List<Account> selectById(Set<ID> idSet) {
        return (List<Account>) selectObjectsById(idSet);
    }

}