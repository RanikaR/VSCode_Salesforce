@isTest
private class TestVerifyDate {
    
    // Case 1: Date 2 within 30 days of Date 1. Expected return: Date 2. 
    @isTest static void testCheckDates() {
        Date date1 = Date.newInstance(2020, 7, 1);
        Date date2 = Date.newInstance(2020, 7, 15);
        Date testCase = VerifyDate.CheckDates(date1, date2);
        System.assertEquals(testCase, date2);
            
    }
    
    // Case 2: Date 2 NOT within 30 days of Date 1. Expected return: Last Day of Month
    @isTest static void testSetEndOfMonthDate() {
        Date date1 = Date.newInstance(2020, 7, 1);
        Date date2 = Date.newInstance(2020, 8, 1);
        Date endMonth = Date.newInstance(2020, 7, 31);
        Date testCase2 = VerifyDate.CheckDates(date1, date2);
        System.assertEquals(testCase2, endMonth);
        
    }

}