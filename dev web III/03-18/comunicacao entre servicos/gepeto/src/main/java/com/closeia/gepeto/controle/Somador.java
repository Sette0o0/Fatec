package com.closeia.gepeto.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.closeia.gepeto.dto.Resposta;

@RestController
public class Somador {
    
    @GetMapping("/somar/{num1}/{num2}")
    public Resposta somar(@PathVariable Double num1, @PathVariable Double num2){
        Resposta resposta = new Resposta();
        resposta.setResultado(num1 + num2);
        return resposta;
    }
}
