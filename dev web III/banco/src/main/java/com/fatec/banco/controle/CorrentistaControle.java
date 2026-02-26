package com.fatec.banco.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public void criar(@RequestBody CorrentistaModelo correntistaModelo){
        servicoCriador.criar(correntistaModelo);
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
