public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getContacts(){
        return [
            SELECT FirstName, LastName, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER BY LastName
        ];
    }
}

// WITH SECURITY_ENFORCED - enable field and object-level security permissions 
// checking for SOQL SELECT queries in Apex code