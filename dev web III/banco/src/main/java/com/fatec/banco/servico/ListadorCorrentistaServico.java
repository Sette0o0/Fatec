package com.fatec.banco.servico;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.banco.modelo.CorrentistaModelo;
import com.fatec.banco.repositorio.CorrentistaRepositorio;

@Service
public class ListadorCorrentistaServico {
    
    @Autowired
    private CorrentistaRepositorio repositorio;

    public List<CorrentistaModelo> listarTodos(){
        return repositorio.findAll();
    }

    public CorrentistaModelo listarCorrentista(CorrentistaModelo correntista){
        return repositorio.findById(correntista.getId()).get();
    }
}
