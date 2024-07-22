# Todo List | React - JavaScript
Uma aplicação simples de lista de tarefas construída com React usando JavaScript.

### Descrição
A Todo List App permite aos usuários adicionar, visualizar, gerenciar e remover tarefas. A aplicação possui contador de tarefas criadas, contador de tarefas concluídas e uma interface limpa e intuitiva.

### Funcionalidades
- Adicionar novas tarefas
- Visualizar lista de tarefas
- Marcar tarefas como concluídas/não concluídas
- Remover tarefas
- Contador de tarefas criadas
- Contador de tarefas concluídas

### Instalação
Para instalar e executar a aplicação localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/Augustorf01/TodoList---Reactjs.git
    cd TodoList---Reactjs
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute a aplicação:
    ```bash
    npm run dev
    ```

4. Clique no link do localhost fornecido no terminal e visualize o projeto rodando no seu navegador "`http://localhost:XXXX`".

## Uso

### Adicionar Tarefa
1. Digite o título da tarefa no campo de input.
2. Clique no botão "Criar" para adicionar a tarefa.

### Marcar Tarefa como Concluída
1. Clique no checkbox ao lado da tarefa para marcar como concluída ou não concluída.

### Remover Tarefa
1. Clique no ícone de lixeira ao lado da tarefa que deseja remover.

## Estrutura do Projeto
```plaintext
src/
├──── assets
│ ├─── empty-list.svg
│ ├─── logo.svg
│ ├─── plus.svg
│
├── components/
│ ├─── List/
│ ├──── Empty/
│ ├───── empty-list.jsx
│ ├─── CounterTask.jsx
│ ├─── TaskList.jsx
│
│ ├── CreateTask.jsx
│ ├── Header.jsx
│
├── Layouts/
│  ├── empty-theme/
│  ├──── counter-task.module.css
│  ├──── tasks.module.css
│  ├── global.css
│  ├── create-task.module.css
│  ├── header.module.css
│  ├── task-list.module.css
│
├── App.jsx
├── index.jsx
