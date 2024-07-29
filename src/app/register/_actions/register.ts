'use server'
import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

export default async function register(FormData: FormData){
    
    const name = FormData.get('name') as string
    const email = FormData.get('email') as string
    const password = FormData.get('password') as string

     // Verifique se algum campo está vazio
    if (!name || !email || !password) {
        throw new Error('Preencha todos os campos');
    }

    // Verifique se o usuário já existe
  const userExists = await db.user.findUnique({
    where: { email },
  });

  if (userExists) {
    throw new Error('Usuário já existe');
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });

  redirect('/');
}
