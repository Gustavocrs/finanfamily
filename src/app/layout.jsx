import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="FinanFamily - Aplicativo de gerenciamento de despesas em grupo."
        />
        <meta
          name="keywords"
          content="finanças, despesas, grupo, divisão de custos, gerenciamento financeiro"
        />
        {/* <meta name="author" content="Seu Nome ou Nome da Empresa" /> */}
        <meta name="robots" content="index, follow" />
        <title>FinanFamily - Gerenciamento de Despesas em Grupo</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
