package com.fatec.moura.controle;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fatec.moura.dto.Resposta;

@RestController
public class Usador {
    
    @GetMapping("/gepeto/somador/{num1}/{num2}")
    public Resposta usar(@PathVariable double num1, @PathVariable double num2){
        RestTemplate requisicao = new RestTemplate();

        ResponseEntity<Resposta> resposta = requisicao.getForEntity("http://localhost:8080/somar/" + num1 + "/" + num2, Resposta.class);
        return resposta.getBody();
    }
}
