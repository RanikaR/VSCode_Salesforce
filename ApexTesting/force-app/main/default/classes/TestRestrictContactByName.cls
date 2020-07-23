@isTest public class TestRestrictContactByName {
    
    @isTest static void testContact() {
        
        List<Contact> conList = new List<Contact>();
        
        // valid contact
        Contact con1 = new Contact(FirstName = 'John', LastName = 'Doe');
        conList.add(con1);
        
        // invalid contact
        Contact con2 = new Contact(FirstName = 'Jane', LastName = 'INVALIDNAME');
        conList.add(con2);
        
        Test.startTest();
        
        try {
          insert conList;   
        } catch (Exception e) {

        }
         
        Test.stopTest();
   
    }

}