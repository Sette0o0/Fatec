package com.fatec.banco.controle.excecao;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TratadorExcecaoGlobalControle {
    
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> manipularIntegridadeDado(DataIntegrityViolationException ex){
        String erroResposta = "Tu mandou os dados errado";
        ResponseEntity<String> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
        return resposta;
    }
}
