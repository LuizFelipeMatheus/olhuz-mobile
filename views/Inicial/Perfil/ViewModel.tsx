import { useState, useEffect } from 'react';

export interface UserData {
  id: string;
  label: string;
  valor: string;
  type: 'nome' | 'dataNascimento' | 'email' | 'telefone' | 'cpf';
}

export const usePerfilViewModel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dadosUsuario, setDadosUsuario] = useState<UserData[]>([]);

  // Simula busca dos dados na API ou Banco de Dados
  const carregarPerfil = async () => {
    setLoading(true);
    try {
      // Exemplo de payload vindo de uma API
      const response = {
        nome: 'Nome Sobrenome',
        dataNascimento: '00/00/0000',
        email: 'email@exemplo.com',
        telefone: '(11) 99999-9999',
        cpf: '000.000.000-00',
      };

      // Mapeamento para o formato do componente UI
      const dadosFormatados: UserData[] = [
        { id: '1', label: 'Nome Completo', valor: response.nome, type: 'nome' },
        { id: '2', label: 'Data de Nascimento', valor: response.dataNascimento, type: 'dataNascimento' },
        { id: '3', label: 'Email', valor: response.email, type: 'email' },
        { id: '4', label: 'Telefone', valor: response.telefone, type: 'telefone' },
        { id: '5', label: 'CPF', valor: response.cpf, type: 'cpf' },
      ];

      setDadosUsuario(dadosFormatados);
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditarDados = () => {
    // Lógica para navegação ou abertura de modal para edição
    console.log('Editar dados acionado');
  };

  useEffect(() => {
    carregarPerfil();
  }, []);

  return {
    dadosUsuario,
    loading,
    handleEditarDados,
    carregarPerfil,
  };
};