package com.fatec.banco.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.banco.modelo.CorrentistaModelo;
import com.fatec.banco.repositorio.CorrentistaRepositorio;

@Service
public class ExcluidorCorrentistaServico {
    
    @Autowired
    private CorrentistaRepositorio repositorio;

    public void excluir(CorrentistaModelo correntista){
        repositorio.deleteById(correntista.getId());
    }
}
