package com.fatec.banco.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.banco.repositorio.CorrentistaRepositorio;

@Service
public class AtualizarCorrentistaServico {
    
    @Autowired
    private CorrentistaRepositorio repositorio;

    public atualizarCorrentista(CorrentistaModelo correntista){
        repositorio.
    }
}
