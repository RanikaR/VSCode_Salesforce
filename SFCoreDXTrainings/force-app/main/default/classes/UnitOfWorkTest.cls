@isTest
public class UnitOfWorkTest {

    // Unit of Work Instance
    @isTest
    public static void challengeComplete(){
        fflib_SObjectUnitOfWork uow = new fflib_SObjectUnitOfWork(
            new Schema.SObjectType[] {
                Account.SObjectType,
                Contact.SObjectType,
                Note.SObjectType
            }
        );
    }


}
