public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        // return [
        //     SELECT Name, AnnualRevenue, Industry
        //     FROM Account
        //     WITH SECURITY_ENFORCED
        //     ORDER BY Name
        // ];
        throw new AuraHandledException('Forced error');
    }

//  private Id accountId = null;
//  private Account accountObj = null;


//  public AccountController() {
//   accountId = ApexPages.currentPage().getParameters().get('id');
//   accountObj = (accountId == null) ? new Account() : [SELECT name, accountnumber, industry, billingstreet FROM account WHERE Id = :accountId];
//  }

//  public Account getAccountObj() {
//   if (accountObj != null) {
//    return accountObj;
//   }
//   return null;
//  } 
//  public PageReference save() {
//   try {
//    upsert(accountObj);
//   } 
//   catch(System.DMLException e) {
//    ApexPages.addMessages(e);
//    return null;
//   }
//   PageReference page = new PageReference('/apex/ContactViewPage?Id=' + accountId);  // PageReference is a class that allows you to set up paths from one page to the other
//   page.setRedirect(true);
//   return page; 
//  }
//  public PageReference cancel() {
//   PageReference page = new PageReference('/apex/AccountViewPage?id=' + accountId);
//   page.setRedirect(true);
//   return page; 
//  }

 }
