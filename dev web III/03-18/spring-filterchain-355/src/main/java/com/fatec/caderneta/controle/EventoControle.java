package com.fatec.caderneta.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatec.caderneta.modelo.dto.EventoDTO;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.servico.EventoServico;

import jakarta.validation.Valid;

@RestController
public class EventoControle {
    
    @Autowired
    private EventoServico servico;
    
    @GetMapping("/boasvindas")
    public String darBoasVindas() {
    	return "Bem-vindo(a) a API";
    }

    @PostMapping("/cadastrar/evento")
    public ResponseEntity<Evento> criar(@RequestBody @Valid EventoDTO eventoDto){
        Evento eventoCriado = servico.criarEvento(eventoDto);
        ResponseEntity<Evento> resposta = new ResponseEntity<>(eventoCriado,HttpStatus.OK);
        return resposta;
    }
    
    @DeleteMapping("/excluir/evento")
    public void excluir(@RequestBody EventoDTO eventoDto) {
    	servico.excluirEvento(eventoDto);
    }
}

