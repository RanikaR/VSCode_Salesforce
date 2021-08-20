@isTest
public class UnitOfWorkTest {

    // Unit of Work Instance
    @isTest
    public static void challengeComplete(){
        fflib_SObjectUnitOfWork uow = new fflib_SObjectUnitOfWork(
            new Schema.SObjectType[]{
                Account.SObjectType,
                Contact.SObjectType,
                Note.SObjectType
            }
        );

        // Creating Test Account Records
        for (Integer i = 0; i < 100; i++) {
        Account acct = new Account(Name = 'TestAccount ' + i);
        uow.registerNew(acct);

            // Creating 5 Contacts and Notes per Account
            for(Integer j = 0; j < 5; j++) {
                Contact con = new Contact(FirstName = 'Test', LastName = 'Contact' + j);
                uow.registerNew(con, Contact.AccountId, acct);


                Note n = new Note(Title = 'TestNote ' + j, Body = 'Testing');
                uow.registerNew(n, Note.ParentId, acct);
            }
        }

        // Commit work to database
        uow.commitWork();

        // System asserts from challenge
        System.assertEquals(100, [Select Id from Account].size());
        System.assertEquals(500, [Select Id from Contact].size());
        System.assertEquals(500, [Select Id from Note].size());
    }

    


}
