package com.ajax.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

@Data
public class SearchCriteria {

    @NotBlank(message = "username can't be empty")
    String username;
}
