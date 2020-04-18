package br.com.nicefitapp.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "professor")
public class Professor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "CREF é obrigatório")
	@Column(unique = true)
	private String cref;

	@NotBlank(message = "Nome é obrigatório")
	private String nome;

	@Email
	@NotBlank(message = "Email é obrigatório")
	@Column(unique = true)
	private String email;

	@Length(min = 6, message = "A senha precisa ter no mínimo 6 caracteres")
	@NotBlank(message = "A senha é orbigatória")
	private String senha;

	@NotBlank(message = "Telefone é obrigatório")
	private String telefone;

	@Column(name = "data_nascimento")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dataNascimento;

	@NotBlank(message = "Cidade é obrigatório")
	private String cidade;

	@NotNull(message = "O estilo da aula é obrigatório")
	@Enumerated(EnumType.STRING)
	@Column(name = "estilo_aula")
	private EstiloAula estiloAula;

	private String instagram;

	@Column(name = "instituicao_onclusao")
	@NotBlank(message = "O campo Instituição de Conclusão é obrigatório")
	private String instituicaoConclusao;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "data_conclusao", updatable = false)
	private Date dataConclusao;

	@Transient
	private Long[] especialidadesId;

	@JsonIgnore
	@ManyToMany()
	@JoinTable(name = "tb_professor_especialidade", joinColumns = @JoinColumn(name = "professor_id"), inverseJoinColumns = @JoinColumn(name = "especialidade_id"))
	private List<Especialidade> especialidades = new ArrayList<Especialidade>();

	@JsonIgnore
	@OneToMany(mappedBy = "professor")
	private List<Aula> aulas = new ArrayList<Aula>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCref() {
		return cref;
	}

	public void setCref(String cref) {
		this.cref = cref;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTelefone() {
		return telefone;
	}

	public Long[] getEspecialidadesId() {
		return especialidadesId;
	}

	public void setEspecialidadesId(Long[] especialidadesId) {
		this.especialidadesId = especialidadesId;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public EstiloAula getEstiloAula() {
		return estiloAula;
	}

	public void setEstiloAula(EstiloAula estiloAula) {
		this.estiloAula = estiloAula;
	}

	public String getInstagram() {
		return instagram;
	}

	public void setInstagram(String instagram) {
		this.instagram = instagram;
	}

	public String getInstituicaoConclusao() {
		return instituicaoConclusao;
	}

	public void setInstituicaoConclusao(String instituicaoConclusao) {
		this.instituicaoConclusao = instituicaoConclusao;
	}

	public Date getDataConclusao() {
		return dataConclusao;
	}

	public void setDataConclusao(Date dataConclusao) {
		this.dataConclusao = dataConclusao;
	}

	public List<Especialidade> getEspecialidades() {
		return especialidades;
	}

	public List<Aula> getAulas() {
		return aulas;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Professor other = (Professor) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
