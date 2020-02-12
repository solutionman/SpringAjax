package com.ajax.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

@Data
public class SearchAddress {
    @NotBlank(message = "put some value")
    String searching;
}
