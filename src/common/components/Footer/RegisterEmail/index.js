import React, { useState } from 'react';
import api from 'services/api';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { container } from './RegisterEmail.module.scss';

export default function RegisterEmail() {
  const [email, setEmail] = useState('');
  const { showNotification } = useNotification();

  const registerEmail = async () => {
    try {
      await api.post('password/forgot', { email });
      showNotification(
        'Email de recuperação de senha enviado.',
        NOTIFICATION_TYPES.SUCCESS
      );
    } catch (error) {
      showNotification('Erro ao enviar email.', NOTIFICATION_TYPES.ERROR);
    }
  };

  return (
    <form className={container}>
      <input
        type="email"
        data-testid="emailInput"
        placeholder="Endereço de email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="button" data-testid="registerEmail" onClick={registerEmail}>
        Cadastrar
      </button>
    </form>
  );
}
