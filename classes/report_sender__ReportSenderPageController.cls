/*
This file is generated and isn't the actual source code for this
managed global class.
This read-only file shows the class's global constructors,
methods, variables, and properties.
To enable code to compile, all methods return null.
*/
global class ReportSenderPageController {
    global ReportSenderPageController() {

    }
    @AuraEnabled
    global static void createCustomSetting(String json) {

    }
global class ScheduledJob {
    @AuraEnabled
    global Boolean active;
    @AuraEnabled
    global String bcc;
    @AuraEnabled
    global String cc;
    @AuraEnabled
    global String description;
    @AuraEnabled
    global String fileType;
    @AuraEnabled
    global String folder;
    @AuraEnabled
    global String froms;
    @AuraEnabled
    global Id id;
    @AuraEnabled
    global String name;
    @AuraEnabled
    global String nextFireTime;
    @AuraEnabled
    global String subject;
    @AuraEnabled
    global String successfulSend;
    @AuraEnabled
    global String to;
    global ScheduledJob(String name, Id id, String nextFireTime, Boolean active, String description, String fileType) {

    }
    global ScheduledJob(String name, String folder, Id id, String nextFireTime, Boolean active, String description, String fileType, String successfulSend, String froms, String to, String cc, String bcc, String subject) {

    }
}
}
