package com.cognizant.spring_learn;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {

    public static void displayDate() throws Exception {
        // Load Spring XML config from classpath
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");

        // Get the dateFormat bean
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

        // Parse and display the date
        Date parsedDate = format.parse("31/12/2018");
        System.out.println("Parsed Date: " + parsedDate);
    }

    public static void main(String[] args) throws Exception {
        displayDate(); // Line 21
    }
}
