import { useState, useEffect } from 'react';

export interface UsuarioPerfil {
  nome: string;
  dataNascimento: string;
  email: string;
  telefone: string;
  cpf: string;
}

export function usePerfilViewModel() {
  const [carregando, setCarregando] = useState(false);
  const [usuario, setUsuario] = useState<UsuarioPerfil>({
    nome: 'Nome Sobrenome',
    dataNascimento: '00/00/0000',
    email: 'email@exemplo.com',
    telefone: '(11) 99999-9999',
    cpf: '000.000.000-00',
  });

  const carregarDadosUsuario = async () => {
    try {
      setCarregando(true);
      // Exemplo de integração futura com API:
      // const response = await api.get('/perfil');
      // setUsuario(response.data);
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    } finally {
      setCarregando(false);
    }
  };

  const handleEditarDados = () => {
    console.log('Navegar para tela de edição ou abrir modal');
  };

  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  return {
    usuario,
    carregando,
    handleEditarDados,
  };
}