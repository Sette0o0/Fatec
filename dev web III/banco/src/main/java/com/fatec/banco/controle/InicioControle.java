package com.fatec.banco.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InicioControle {
    
    @GetMapping("/")
    public String boaVindas(){
        return "Bem-vindo(a)!";
    }
}
