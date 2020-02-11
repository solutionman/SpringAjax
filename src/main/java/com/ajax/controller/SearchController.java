package com.ajax.controller;

import com.ajax.model.AjaxResponseBody;
import com.ajax.model.SearchCriteria;
import com.ajax.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class SearchController {

    UserService userService;

    @Autowired
    public void setUserService(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/api/search")
    public ResponseEntity<?> getSearchResultVaAjax(@Valid @RequestBody SearchCriteria search, Errors errors){

        AjaxResponseBody result = new AjaxResponseBody();


        return ResponseEntity.ok(result);
    }
}
