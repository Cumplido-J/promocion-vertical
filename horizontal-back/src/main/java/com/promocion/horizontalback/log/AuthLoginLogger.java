package com.promocion.horizontalback.log;

import com.promocion.horizontalback.config.request.AuthenticationRequest;
import com.promocion.horizontalback.config.request.UserSession;
import org.apache.logging.log4j.Logger;


public class AuthLoginLogger {


    public static void authLogin( Logger log, String message, AuthenticationRequest loginRequest) {
        StringBuilder error = new StringBuilder();
        error.append("Method: ").append("authLogin");
        error.append(". Error: ").append(message);
        error.append(". AuthenticationRequest: ").append(loginRequest);
        log.error(error);
    }

    public static void getUserInfo( Logger log, String message, UserSession userSession) {
        StringBuilder error = new StringBuilder();
        error.append("Method: ").append("getUserInfo");
        error.append(". Error: ").append(message);
        error.append(". UserSession: ").append(userSession);
        log.error(error);
    }


    /*public static void authLogin( Logger log, String message, UserSession userSession, Integer adminType) {
        StringBuilder error = new StringBuilder();
        error.append("Method: ").append("adminSearch");
        error.append(". Error: ").append(message);
        error.append(". User: ").append(userSession == null ? "null" : userSession.getUsername());
        error.append(". AdminType: ").append(adminType);
        log.error(error);
    }*/
}
