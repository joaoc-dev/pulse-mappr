'use client';

import type { Schema } from '@/amplify/data/resource';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';
import { env } from '@/env/client';
import '@aws-amplify/ui-react/styles.css';

const client = generateClient<Schema>();

export default function HomePage() {
  const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([]);
  const { user, signOut } = useAuthenticator();

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: data => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      // eslint-disable-next-line no-alert
      content: window.prompt('Todo content'),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  return (
    <div className="min-w-xl">
      <div className="flex justify-between">
        <h1>
          {user?.signInDetails?.loginId}
          's todos
        </h1>
        <Button variation="primary" onClick={signOut}>Sign out</Button>
      </div>
      <Button variation="primary" onClick={createTodo}>+ new</Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell as="th">Content</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map(todo => (
            <TableRow key={todo.id}>
              <TableCell>{todo.content}</TableCell>
              <TableCell><Button variation="destructive" onClick={() => deleteTodo(todo.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p>
        Public variable:
        {env.NEXT_PUBLIC_VARIABLE}
      </p>
    </div>
  );
}
