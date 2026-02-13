package com.fatec.paysanduu.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControleCalculo {
    
    @GetMapping("/soma/{numero1}/{numero2}")
    public String soma(@PathVariable double numero1, @PathVariable double numero2){
        return "Resultado: " + (numero1 + numero2);
    }

    @GetMapping("/sub/{numero1}/{numero2}")
    public String sub(@PathVariable double numero1, @PathVariable double numero2){
        return "Resultado: " + (numero1 - numero2);
    }
}
