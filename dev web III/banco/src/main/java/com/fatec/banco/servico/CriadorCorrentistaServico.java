package com.fatec.banco.servico;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.banco.modelo.CorrentistaModelo;
import com.fatec.banco.repositorio.CorrentistaRepositorio;

@Service
public class CriadorCorrentistaServico {

    @Autowired
    private CorrentistaRepositorio repositorio;

    public void criar(CorrentistaModelo correntista){
        repositorio.save(correntista);
    }

    public void salvarTodos(List<CorrentistaModelo> correntistas){
        repositorio.saveAll(correntistas);
    }
}
