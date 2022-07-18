package com.promocion.horizontalback.shared;

public class AppFunctions {

    public static String fullName(String name, String firstLastName, String secondLastName) {
        return String.format("%s %s%s", name, firstLastName, secondLastName.equals("") ? "" : " " + secondLastName);
    }
}
