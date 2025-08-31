// populate_database.mjs

// Importa a biblioteca para interagir com o SQLite.
import Database from 'better-sqlite3';

// Define o caminho para o arquivo do banco de dados.
const dbPath = './database.db';
const db = new Database(dbPath);

console.log("Conectado ao banco de dados com sucesso.");

// Dados de exemplo que serão inseridos na tabela 'events'.
const events = [
    {
        title: 'Workshop de Culinária Saudável',
        description: 'Aprenda a preparar refeições deliciosas e nutritivas para o dia a dia.',
        date: '2025-09-15',
        location: 'Centro Comunitário',
        image_url: 'https://placehold.co/400x300/F0F0F0/000000?text=Culinária'
    },
    {
        title: 'Feira de Artesanato Local',
        description: 'Exposição e venda de produtos artesanais criados por artistas da região.',
        date: '2025-10-01',
        location: 'Praça Principal',
        image_url: 'https://placehold.co/400x300/F0F0F0/000000?text=Artesanato'
    },
    {
        title: 'Maratona de Leitura 2025',
        description: 'Um dia inteiro de incentivo à leitura, com atividades e autores convidados.',
        date: '2025-10-20',
        location: 'Biblioteca Municipal',
        image_url: 'https://placehold.co/400x300/F0F0F0/000000?text=Leitura'
    }
];

try {
    // Prepara a instrução SQL para inserir dados.
    // Usamos um prepared statement para maior segurança e desempenho.
    const stmt = db.prepare('INSERT INTO events (title, description, date, location, image_url) VALUES (?, ?, ?, ?, ?)');

    // Itera sobre os dados de exemplo e executa a inserção para cada evento.
    for (const event of events) {
        stmt.run(event.title, event.description, event.date, event.location, event.image_url);
    }

    console.log("Dados de exemplo inseridos com sucesso na tabela 'events'!");

} catch (error) {
    console.error("Erro ao inserir dados:", error.message);
} finally {
    // Sempre fecha a conexão com o banco de dados.
    db.close();
    console.log("Conexão com o banco de dados fechada.");
}
