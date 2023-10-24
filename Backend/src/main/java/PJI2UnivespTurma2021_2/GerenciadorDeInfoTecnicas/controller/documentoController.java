package PJI2UnivespTurma2021_2.GerenciadorDeInfoTecnicas.controller;

import PJI2UnivespTurma2021_2.GerenciadorDeInfoTecnicas.documento.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/doc")
@CrossOrigin("http://localhost:3000/")
public class documentoController {

  @Autowired
  private DocumentoRepository repository;

  @PostMapping
  @Transactional
  public void cadastrar(@RequestBody @Valid DadosCadastroDocumento dados) {
    repository.save(new Documento(dados));
  }


  @GetMapping
  public Page<DadosListagemDocumento> listar (@PageableDefault(size=10, sort = {"nome"}) Pageable paginacao) {
    return repository.findAllByAtivoTrue(paginacao).map(DadosListagemDocumento::new);

  }
  @PutMapping
  @Transactional
  public void atualizar(@RequestBody @Valid DadosAtualizaDocumento dados) {
    var documento = repository.getReferenceById(dados.id());
    documento.atualizarInformacoes(dados);

  }
  @DeleteMapping("/{id}")
  @Transactional
  public void excluir(@PathVariable Long id){
    var documento = repository.getReferenceById(id);
    documento.excluir();
  }
}