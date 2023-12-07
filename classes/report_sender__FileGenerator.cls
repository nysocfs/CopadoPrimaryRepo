/*
This file is generated and isn't the actual source code for this
managed global class.
This read-only file shows the class's global constructors,
methods, variables, and properties.
To enable code to compile, all methods return null.
*/
global class FileGenerator {
    global static Boolean emailWrapper {
        get;
        set;
    }
    global static String filters {
        get;
        set;
    }
    global String format {
        get;
        set;
    }
    global static String namedCredential {
        get;
        set;
    }
    global String reportId {
        get;
        set;
    }
    global FileGenerator() {

    }
    global Messaging.EmailFileAttachment getReportAsCSV(String ReportName, Boolean isChecked) {
        return null;
    }
    global Messaging.EmailFileAttachment getReportAsExcel(String ReportName, Boolean isChecked) {
        return null;
    }
    global Messaging.EmailFileAttachment getReportAsType(String ReportName, Boolean isChecked, String contentType) {
        return null;
    }
    global Messaging.EmailFileAttachment getReportAttachment(String reportId, String ReportName, Boolean isChecked, String contentType) {
        return null;
    }
    global void getReportId(String ReportName) {

    }
}
