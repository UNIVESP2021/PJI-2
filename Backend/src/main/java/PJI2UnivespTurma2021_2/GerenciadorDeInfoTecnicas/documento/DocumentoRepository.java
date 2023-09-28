package PJI2UnivespTurma2021_2.GerenciadorDeInfoTecnicas.documento;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentoRepository extends JpaRepository<Documento, Long> {
   Page<Documento> findAllByAtivoTrue(Pageable paginacao);
}