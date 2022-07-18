package com.promocion.horizontalback.controller;
import com.promocion.horizontalback.config.request.AuthenticationRequest;
import com.promocion.horizontalback.config.request.UserSession;
import com.promocion.horizontalback.dto.auth.UserDto;
import com.promocion.horizontalback.exception.AppException;
import com.promocion.horizontalback.log.AuthLoginLogger;
import com.promocion.horizontalback.service.auth.AuthLoginService;
import com.promocion.horizontalback.shared.CustomResponseEntity;
import com.promocion.horizontalback.shared.LoggedUser;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@Log4j2
@CrossOrigin
public class AuthLoginController {


    @Autowired
    private AuthLoginService authLoginService;

    @PostMapping( "/client_credential/access_token")
    public ResponseEntity< ? > authLogin( @RequestBody AuthenticationRequest authenticationRequest ){
        try {
            String jwtToken= authLoginService.authLogin(authenticationRequest);
            return CustomResponseEntity.OK(jwtToken);
        }catch ( AppException app ){
            AuthLoginLogger.authLogin(log, app.getMessage(),authenticationRequest );
            return CustomResponseEntity.BAD_REQUEST(app.getMessage());
        }
        catch ( Exception e ){
            AuthLoginLogger.authLogin(log, e.toString(),authenticationRequest );
            return CustomResponseEntity.INTERNAL_SERVER_ERROR();
        }
    }

    @GetMapping("/userProfile")
    public ResponseEntity<?> getUserInfo( @LoggedUser UserSession userSession) {
        try {
            UserDto userDto= authLoginService.getUserInfo(userSession);
            return CustomResponseEntity.OK( userDto  );
        }catch ( AppException app ){
            AuthLoginLogger.getUserInfo(log, app.getMessage(),userSession );
            return CustomResponseEntity.BAD_REQUEST(app.getMessage());
        }
        catch ( Exception e ){
            AuthLoginLogger.getUserInfo(log, e.toString(),userSession );
            return CustomResponseEntity.INTERNAL_SERVER_ERROR();
        }
    }

}
