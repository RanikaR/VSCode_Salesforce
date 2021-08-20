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
                uow.registerNew(con, Conttact.AccountId, acct);


                Note note = new Note(Title = 'TestNote ' + j, Body = 'Testing');
                uow.registerNew(note, Note.ParentId, acct);
            }
        }
    }

    


}
