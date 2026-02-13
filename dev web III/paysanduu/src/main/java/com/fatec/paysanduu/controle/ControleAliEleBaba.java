package com.fatec.paysanduu.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControleAliEleBaba {
    @GetMapping("/baba")
    public String trocaDilho(){
        return "Ali ele baba";
    }
}
