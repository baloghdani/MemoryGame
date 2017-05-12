package com.codecool.memorygame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by danielbalogh on 5/10/17.
 */
@Controller
public class SiteController {

    @RequestMapping("/")
    public String index() {
        return "memorygame";
    }
}
