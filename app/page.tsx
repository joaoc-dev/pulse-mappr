'use client';

import type { Schema } from '@/amplify/data/resource';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';
import outputs from '@/amplify_outputs.json';
import './../app/app.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

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
    <main>
      <button type="button" onClick={signOut}>Sign out</button>
      <h1>
        {user?.signInDetails?.loginId}
        's todos
      </h1>
      <button type="button" onClick={createTodo}>+ new</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.content}
            <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
