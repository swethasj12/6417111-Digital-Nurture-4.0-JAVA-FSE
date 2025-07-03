package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class MainApp {
    public static void main(String[] args) {
        // Load the Spring XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the BookService bean from the container
        BookService bookService = (BookService) context.getBean("bookService");

        // Call a method to test the setup
        bookService.addBook();
    }
}
