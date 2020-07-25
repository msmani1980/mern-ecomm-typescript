import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

export async function storeUser(req: express.Request, res: express.Response) {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    res.send({ message: 'User created' });
  } catch (error) {
    res.status(500).send(error);
  }
}
