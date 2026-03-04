package com.fatec.banco.controle.correntista;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.banco.modelo.CorrentistaModelo;
import com.fatec.banco.servico.CriadorCorrentistaServico;
import com.fatec.banco.servico.ExcluidorCorrentistaServico;
import com.fatec.banco.servico.ListadorCorrentistaServico;

@RestController
public class CorrentistaControle {

    @Autowired
    private CriadorCorrentistaServico servicoCriador;

    @Autowired
    private ExcluidorCorrentistaServico servicoExcluidor;

    @Autowired
    private ListadorCorrentistaServico servicoListador;

    @PostMapping("/criar")
    public ResponseEntity<String> criar(@RequestBody CorrentistaModelo correntistaModelo){
        servicoCriador.criar(correntistaModelo);

        return new ResponseEntity<>("Correntista criado com sucesso!", HttpStatus.CREATED);
    }

    @PostMapping("/criar/correntistas")
    public void criarTodos(@RequestBody List<CorrentistaModelo> correntistasModelo){
        servicoCriador.salvarTodos(correntistasModelo);
    }

    @DeleteMapping("/apagar")
    public void apagar(@RequestBody CorrentistaModelo correntistaModelo){
        servicoExcluidor.excluir(correntistaModelo);
    }

    @GetMapping("/correntistas")
    public List<CorrentistaModelo> listarTodos(){
        return servicoListador.listarTodos();
    }

    @GetMapping("/correntista")
    public CorrentistaModelo listarCorrentista(@RequestBody CorrentistaModelo correntistaModelo){
        return servicoListador.listarCorrentista(correntistaModelo);
    }
}
