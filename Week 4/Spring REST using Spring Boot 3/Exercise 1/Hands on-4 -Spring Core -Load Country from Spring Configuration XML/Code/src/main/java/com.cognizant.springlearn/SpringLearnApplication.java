package com.cognizant.springlearn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {
    public static void displayCountry() {
        System.out.println("== Inside displayCountry ==");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        System.out.println("Country from XML: " + country.toString());
    }

    public static void main(String[] args) {
        displayCountry();
    }
}
