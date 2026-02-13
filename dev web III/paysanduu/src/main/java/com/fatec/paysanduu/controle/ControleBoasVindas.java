package com.fatec.paysanduu.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControleBoasVindas {
    
    @GetMapping("/")
    public String boasVindas(){
        return "Bem-Vindo";
    }

}
