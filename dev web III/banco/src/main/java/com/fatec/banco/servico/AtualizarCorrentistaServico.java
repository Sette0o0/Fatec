package com.fatec.banco.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.banco.modelo.CorrentistaModelo;
import com.fatec.banco.repositorio.CorrentistaRepositorio;

@Service
public class AtualizarCorrentistaServico {
    
    @Autowired
    private CorrentistaRepositorio repositorio;

    public void atualizarCorrentista(CorrentistaModelo correntistaNovo){
        CorrentistaModelo correntista = repositorio.findById(correntistaNovo.getId())
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        correntista.setNome(correntistaNovo.getNome());
        repositorio.save(correntista);
    }
}
